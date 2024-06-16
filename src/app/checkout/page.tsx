"use client";
import { ScreenWrapper, BlurredWrapper } from "@/components/Wrappers";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { BasketItem } from "@/components/BasketItem";
import { CheckoutForm } from "@/components/CheckoutForm";
import { useCart } from "@/lib/useCart";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const { items, totalSum, discontedMoney, finalSum, taxes } = useCart();

  const router = useRouter();

  useEffect(() => {
    if (items.length === 0) {
      router.push("/");
    }
  }, [items, router]);

  return (
    <>
      <ScreenWrapper>
        <BlurredWrapper className="hidden lg:block h-3/6">
          <div className="grid grid-cols-12 mt-20">
            <div className="col-span-12 lg:col-span-6 w-full flex flex-col gap-4 p-6 ">
              <h1 className="h1-text text-transparent bg-clip-text bg-gradient-to-r from-land-violet to-land-primary text-center lg:text-left lg:hidden">
                CHECKOUT
              </h1>

              {items.length > 0 ? (
                items.map((item, i) => <BasketItem key={i} {...item} />)
              ) : (
                <div className="border-4 p-6 bg-white shadow-xl rounded-3xl gap-6 flex flex-col">
                  <p className="h2-text text-center text-land-secondary">
                    No items in the basket
                  </p>
                  <Link href="/">
                    <Button
                      variant={"gradient"}
                      size={"sm"}
                      className="h-16 w-full h2-text flex gap-2"
                    >
                      <ShoppingCartIcon size={28} />
                      Go to shop
                    </Button>
                  </Link>
                </div>
              )}

              <h2 className="h2-text">Discount code:</h2>

              <div className="flex gap-2">
                <Input
                  style={{
                    boxShadow: "inset 0 0px 18px 0 rgb(0 0 0 / 0.17)",
                    color: "black",
                  }}
                  className="h-16 w-full rounded-full p-6 text-xl placeholder:text-black"
                />
                <Button
                  variant={"gradient"}
                  size={"sm"}
                  className="h-16 px-16 h2-text"
                >
                  Apply
                </Button>
              </div>
              <div className="flex w-full justify-between">
                <p className="h2-text">Subtotal:</p>
                <p className="h2-text">$ {totalSum}</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="r1-text">Discount:</p>
                <p className="r1-text">- ${discontedMoney}</p>
              </div>
              <div className="flex w-full justify-between border-b-2 border-black">
                <p className="r1-text">Taxes:</p>
                <p className="r1-text pb-4">$ {taxes}</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="r1-text">Total:</p>
                <p className="r1-text">$ {finalSum}</p>
              </div>
              <Button
                variant={"gradient"}
                size={"sm"}
                className="h-16 w-full h2-text gap-3 hidden lg:flex"
              >
                Pay $ {finalSum}
              </Button>
            </div>

            <div className="w-full h-full flex flex-col gap-6 col-span-12 lg:col-span-6 p-6 lg:order-first">
              <h1 className="h1-text text-white text-center lg:text-left hidden lg:block">
                CHECKOUT
              </h1>
              <CheckoutForm />
            </div>
          </div>
        </BlurredWrapper>
      </ScreenWrapper>
    </>
  );
}
