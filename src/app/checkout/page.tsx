"use client";
import { ScreenWrapper, BlurredWrapper } from "@/components/Wrappers";

import { CheckoutForm } from "@/components/CheckoutForm/CheckoutForm";
import { useCart } from "@/lib/useCart";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const { items } = useCart();

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
          <CheckoutForm />
        </BlurredWrapper>
      </ScreenWrapper>
    </>
  );
}
