import { Badge } from "./ui/badge";
import { BlurredEffects } from "./BlurredEffects";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { offers, iOffer } from "@/app/products-data";
import { ScreenWrapper } from "./Wrappers";

export const Offers = () => {
  return (
    <ScreenWrapper className="h-full min-h-min" id="prizes">
      <div className="absolute bottom-0 -z-50 w-full h-4/6 bg-land-violet"></div>
      <div className="absolute top-1/4">
        <BlurredEffects />
      </div>

      <div
        className="absolute top-0 left-0 -z-40 w-full h-full backdrop-blur-3xl"
        style={{
          WebkitBackdropFilter: "blur(64px)",
        }}
        id="prizes"
      ></div>
      <div className="flex flex-wrap justify-center gap-10 lg:gap-20 w-full container relative bottom-40">
        {offers.map((offer, index) => (
          <Offer key={index} {...offer} />
        ))}
      </div>
    </ScreenWrapper>
  );
};

const Offer = ({ image, title, price, sold, href }: iOffer) => {
  return (
    <div className="flex flex-col basis-[30rem] w-full max-w-[30rem] rounded-[48px] bg-white shadow-[0_0_57px_0_rgb(1,1,1,0.4)]">
      <Image
        src={image}
        width={410}
        height={410}
        alt={title}
        className="rounded-[48px] w-full object-cover"
      />

      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-land-gray">{title}</h3>

        <Badge className="w-24 lg:w-36 h-10 lg:h-12 h2-text justify-center ">
          £{price}
        </Badge>
        <div className="relative bottom-6 flex flex-col gap-0.5">
          <p className="r2-text text-right text-land-violet">Sold {sold}%</p>

          <div className="w-full rounded-md h-2.5 bg-land-light">
            <div
              className="h-full rounded-md bg-gradient-to-r from-land-violet to-land-primary"
              style={{
                width: `${sold}%`,
              }}
            ></div>
          </div>
        </div>

        <Button
          variant={"secondary"}
          size={"sm"}
          className="w-full flex gap-2"
          asChild
        >
          <Link href={href}>
            <Image src="/starTicket.svg" alt="Ticket" width={25} height={20} />
            Enter
          </Link>
        </Button>
      </div>
    </div>
  );
};
