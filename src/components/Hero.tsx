"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { ScreenWrapper, BlurredWrapper } from "./Wrappers";
import useSmoothScrollTo from "@/lib/useSmoothScrollTo";

export const Hero = () => {
  const scrollTo = useSmoothScrollTo();

  return (
    <ScreenWrapper className="overflow-x-clip">
      <BlurredWrapper>
        <Image
          width="300"
          height="300"
          src="/gift.png"
          alt="gift"
          className="absolute top-32 -right-24 -rotate-[24deg] blur-sm -z-30"
        />
        <Image
          width="300"
          height="300"
          src="/gift.png"
          alt="gift"
          className="absolute bottom-[36vw] -left-24 rotate-[24deg] blur-sm -z-30"
        />
        <div className="grid grid-cols-12 gap-4 w-full container relative bottom-24">
          <div className="col-span-12 lg:col-span-6 h-96 gap-6 flex flex-col">
            <h1 className="h1-text text-white text-center lg:text-left">
              Win prizes
            </h1>
            <p className="r1-text text-white  text-center lg:text-left">
              Win prizes with our lottery! Everyone can try their luck and win
              amazing gifts. Participants have great chances of winning, as the
              number of tickets in each draw is limited. We ensure transparency
              by showing the number of entries for each draw. The winner is
              guaranteed even if all tickets are not sold. Join now and win!
            </p>

            <Button
              className="mx-auto lg:ml-0"
              // asChild
              onClick={() => scrollTo("#prizes")}
            >
              Take your chance
            </Button>
          </div>
          <div className="hidden lg:block col-span-6 h-96">
            <Image
              width="676"
              height="676"
              src="/phones.png"
              alt="phnes"
              className="object-cover"
            />
          </div>
        </div>
      </BlurredWrapper>
    </ScreenWrapper>
  );
};
