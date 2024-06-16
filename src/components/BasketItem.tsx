import { iOffer } from "@/app/products-data";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useCartItem } from "@/lib/useCart";

export const BasketItem = (product: iOffer) => {
  const { image, title, href, name, quantity } = product;

  const { removeFromCart, itemSum } = useCartItem(product);
  return (
    <div className="w-full h-40 rounded-[30px] bg-white shadow-[0_0_14px_0_rgb(0,0,0,.25)]">
      <div className="p-2 flex px-6 h-full items-center ">
        <Link href={href} className="h-28 w-28 col-span-2">
          <Image
            src={image}
            width={112}
            height={112}
            alt={title}
            className="rounded-[20px] bg-land-violet"
          />
        </Link>
        <div className="flex-1 flex flex-col h-full justify-evenly px-7">
          <p className="r1-text">{name}</p>
          <div className="flex gap-2">
            <p className="r1-text">x{quantity}</p>
            <p className="h2-text bg-clip-text bg-gradient-to-r from-land-violet to-land-primary text-transparent">
              $ {itemSum}
            </p>
          </div>
          <div className="flex gap-12">
            <Link href="/basket">
              <Button
                size={"sm"}
                variant={"link"}
                className="text-black font-extralight p-0 m-0 leading-none"
              >
                Edit
              </Button>
            </Link>

            <Button
              size={"sm"}
              variant={"link"}
              onClick={removeFromCart}
              className="text-black font-extralight p-0 m-0 leading-none"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
