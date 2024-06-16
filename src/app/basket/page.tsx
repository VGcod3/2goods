"use client";
import { Button } from "@/components/ui/button";
import { ScreenWrapper, BlurredWrapper } from "@/components/Wrappers";
import { MinusIcon, PlusIcon, ShoppingCartIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { iOffer } from "../products-data";
import { useDispatch, useSelector } from "@/store/hooks";
import {
  addStoreTickets,
  removeFromStore,
  subStoreTickets,
} from "@/store/CartSlice";
import { useCart, useCartItem } from "@/lib/useCart";

export default function Good() {
  const { items, totalSum } = useCart();

  return (
    <>
      <ScreenWrapper>
        <BlurredWrapper>
          <div className="w-full h-full flex flex-col gap-6 max-w-6xl mx-auto">
            <h1 className="h1-text text-white text-center lg:text-left mt-32">
              Basket
            </h1>
            <div className="flex flex-col gap-4">
              {items.length > 0 ? (
                items.map((co, i) => <BasketItem {...co} key={i} />)
              ) : (
                <div className="border-4 px-6 py-36 rounded-3xl gap-6 flex flex-col items-center">
                  <p className="h2-text text-center text-white">
                    No items in the basket
                  </p>
                  <Link href="/">
                    <Button
                      size={"default"}
                      className="h-16 font-normal h2-text flex gap-2"
                    >
                      <ShoppingCartIcon size={28} />
                      Go to shop
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-between mt-36">
              <h1 className="h1-text">Total: {totalSum}$</h1>

              {items.length > 0 ? (
                <Link href="/checkout">
                  <Button variant={"gradient"}>Proceed to checkout</Button>
                </Link>
              ) : (
                <Button disabled={true} variant={"gradient"}>
                  Proceed to checkout
                </Button>
              )}
            </div>
          </div>
        </BlurredWrapper>
      </ScreenWrapper>
    </>
  );
}

const BasketItem = (product: iOffer) => {
  const { image, title, href } = product;

  const { itemSum, itemQuantity, removeFromCart, addTickets, subTickets } =
    useCartItem(product);

  return (
    <div className="flex flex-col">
      <div className="w-full h-40 rounded-t-[30px] md:rounded-b-[30px] bg-white relative md:shadow-[0_0_26px_0_rgb(164,62,240,1)]">
        <Button
          size={"icon"}
          onClick={removeFromCart}
          variant={"ghost"}
          className="rounded-full absolute top-2 right-2"
        >
          <XIcon />
        </Button>
        <div className="flex gap-4 p-6 h-full items-center ">
          <Link href={href} className="h-28 w-28 flex-shrink-0">
            <Image
              src={image}
              width={112}
              height={112}
              alt={title}
              className="rounded-[20px] bg-land-violet"
            />
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full flex-1">
            <p className="flex-1 r1-text w-full">{title}</p>
            <div className="flex-1 h-28 items-center justify-center hidden md:flex">
              <Button
                onClick={subTickets}
                size={"icon"}
                variant={"outline"}
                className="w-16 h-16 rounded-full shrink-0 rounded-r-none text-land-secondary"
              >
                <MinusIcon />
              </Button>

              <div className="flex-1 h-16 flex items-center justify-center border">
                {itemQuantity}
              </div>
              <Button
                onClick={addTickets}
                size={"icon"}
                variant={"outline"}
                className="w-16 h-16 rounded-full shrink-0 rounded-l-none text-land-secondary"
              >
                <PlusIcon />
              </Button>
            </div>
            <p className="flex-1 r1-text w-full md:text-center text-transparent bg-clip-text bg-gradient-to-r from-land-violet to-land-primary font-bold md:text-black">
              $ {itemSum}
            </p>
          </div>
        </div>
      </div>
      <div className="h-20 w-full bg-white rounded-b-[30px] flex md:hidden">
        <Button
          onClick={subTickets}
          size={"icon"}
          variant={"outline"}
          className="h-full rounded-none flex-1 text-land-secondary rounded-bl-[30px]"
        >
          <MinusIcon />
        </Button>
        <div className="flex-1 h-full text-xl flex items-center justify-center border">
          {itemQuantity}
        </div>
        <Button
          onClick={addTickets}
          size={"icon"}
          variant={"outline"}
          className="h-full rounded-none  flex-1 text-land-secondary rounded-br-[30px]"
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};
