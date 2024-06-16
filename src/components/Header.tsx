import Link from "next/link";
import { Logo } from "./Logo";
import React from "react";
import { ShoppingCartIcon } from "lucide-react";
import { GradientBtn } from "./GradientBtn";

export const Header = () => {
  return (
    <div className="fixed top-0 r-0 w-full shadow-xl bg-white z-50">
      <header className="flex justify-between items-center container ">
        <Link href="/">
          <Logo />
        </Link>
        <GradientBtn>
          <Link href="/basket">
            <ShoppingCartIcon size={36} />
          </Link>
        </GradientBtn>
      </header>
    </div>
  );
};
