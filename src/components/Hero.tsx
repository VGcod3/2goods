"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { ScreenWrapper, BlurredWrapper } from "./Wrappers";
import useSmoothScrollTo from "@/lib/useSmoothScrollTo";

export const Hero = () => {
  const scrollTo = useSmoothScrollTo();

  return (
    <ScreenWrapper className=" overflow-x-clip">
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
              Lorem ipsum dolor sit amet consectetur. Vulputate interdum sed
              gravida nunc pharetra tempor. Elementum auctor aliquam ullamcorper
              fames tristique cursus rhoncus enim accumsan. Leo ut euismod velit
              elit amet. Tortor integer porta senectus massa.
            </p>

            <Button
              className="mx-auto lg:ml-0"
              // asChild
              onClick={() => scrollTo("#prizes")}
            >
              {/* <Link href={"#prizes"}> */}
              Take your chance
              {/* </Link> */}
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
