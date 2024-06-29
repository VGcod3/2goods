"use client";
import { Badge } from "@/components/ui/badge";

import { TicketNumberPicker } from "@/app/TicketNumberPicker";
import { ScreenWrapper, BlurredWrapper } from "@/components/Wrappers";
import { useDataFromSlug } from "@/app/products-data";
import { PhotoSlider } from "@/components/PhotoSlider";
import Image from "next/image";
import dayjs from "dayjs";

const rules = [
  "Entries only $4.99",
  "Max entries 319,999",
  "Max 1000 per person",
  "Total value $500,245.23",
  "Total prizes 3001",
];

export default function Good({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full h-full">
      <GoodSection slug={params.slug} />
    </div>
  );
}

const GoodSection = ({ slug }: { slug: string }) => {
  const product = useDataFromSlug(slug);

  const { title, price, sold, name, image } = product;

  return (
    <ScreenWrapper className="w-full h-full overflow-x-clip">
      <BlurredWrapper className="h-4/6">
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
        <div className="lg:grid grid-cols-12 gap-4 w-full container mt-40 hidden">
          <div className="col-span-6 flex flex-col gap-4">
            <PhotoSlider slug={slug} />

            <div className="bg-white shadow-[0_0_40px_0_rgb(1,1,1,0.3)] rounded-[30px] h-96 w-full max-w-md mt-12">
              <ul className="flex flex-col gap-2 p-8 justify-between h-full list-disc ml-6">
                {rules.map((rule, index) => (
                  <li key={index} className="r1-text">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-6  w-full flex flex-col gap-2 p-4">
            <h1 className="h1-text text-white">{title}</h1>
            <Badge variant={"secondary"}>$ {price}</Badge>

            <div className="relative bottom-6 flex flex-col gap-0.5">
              <p className="r1-text text-right text-white">Sold {sold}%</p>

              <div className="w-full rounded-full h-4 bg-land-light p-0.5">
                <div
                  className="h-full rounded-md bg-gradient-to-r from-land-violet to-land-primary"
                  style={{
                    width: `${sold}%`,
                  }}
                ></div>
              </div>
            </div>

            <TicketNumberPicker product={product} />

            <div className="flex flex-col mt-20 gap-4 max-w-md w-full mx-auto">
              <h2 className="h2-text">
                Automated draw {dayjs().add(1, "month").format("DD.MM.YYYY")} at
                10:00 AM
              </h2>
              <p className="r1-text">
                Competition will close sooner if the maximum entries are
                received
              </p>
              <p className="r1-text">Draw takes place regardless of sell out</p>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col gap-4 w-full h-max max-w-2xl mx-auto mt-16">
          <h2 className="h1-text text-white">{title}</h2>

          <img
            src={image}
            alt={name}
            className="rounded-[54px] w-full flex flex-col"
          />

          <p className="text-white text-5xl">$ {price}</p>
          <div className="relative bottom-6 flex flex-col gap-0.5">
            <p className="r1-text text-right text-white">Sold {sold}%</p>

            <div className="w-full rounded-full h-4 bg-land-light p-0.5">
              <div
                className="h-full rounded-md bg-gradient-to-r from-land-violet to-land-primary"
                style={{
                  width: `${sold}%`,
                }}
              ></div>
            </div>
          </div>
          <TicketNumberPicker product={product} />
          <p className="h2-text text-land-gray p-10 text-center">
            Automated draw {dayjs().add(1, "month").format("DD.MM.YYYY")} at
            10:00 AM
          </p>
          <h2 className="h1-text text-land-gray text-center">
            About this prize
          </h2>
          <ul className="flex flex-col gap-4 justify-between h-full">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="r1-text text-center items-center leading-none w-full bg-white p-5 rounded-full shadow-[0_0_40px_0_rgb(1,1,1,0.3)]"
              >
                {rule}
              </li>
            ))}
          </ul>

          <p className="r1-text text-land-gray text-center">
            Draw takes place regardless of sell out 
          </p>

          <p className="r1-text text-land-gray text-center">
            Competition will close sooner if the maximum entries are received
          </p>
        </div>
      </BlurredWrapper>
    </ScreenWrapper>
  );
};
