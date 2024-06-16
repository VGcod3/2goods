import { BlurredEffects } from "./BlurredEffects";
import Image from "next/image";
import { ScreenWrapper } from "./Wrappers";

interface iAdvantage {
  icon: string;
  title: string;
  description: string;
}

const advantages: iAdvantage[] = [
  {
    icon: "/gradient-ticket.svg",
    title: "Great odds",
    description: "Limited tickets in each draw",
  },
  {
    icon: "/gradient-numbers.svg",
    title: "Transparant",
    description: "We show the number of entries in every draw",
  },
  {
    icon: "/gradient-medal.svg",
    title: "Guaranteed",
    description: "Guaranteed winner even if we don't sell out",
  },
];

const roadMap = [
  "Select your prize and entries",
  "Answer the question correctly",
  "Winner announced on Live Draw",
];

export const WhyUs = () => {
  return (
    <ScreenWrapper>
      <div className="absolute top-0 -z-50 w-full h-5/6 bg-land-violet"></div>
      <BlurredEffects />

      <div className="absolute top-0 left-0 -z-40 w-full h-full backdrop-blur-3xl"></div>

      <div className="w-full mx-auto max-w-4xl">
        <h2 className="h1-text text-white text-center">Why choose us?</h2>
        <div className="flex flex-col gap-5 mt-10">
          {advantages.map((advantage) => (
            <div
              className="flex gap-4 items-center max-w-lg w-full mx-auto"
              key={advantage.title}
            >
              <div className="h-24 lg:h-32 max-w-24 lg:max-w-32 w-full rounded-[30px] bg-white flex items-center justify-center p-7 lg:p-0">
                <Image
                  src={advantage.icon}
                  width={60}
                  height={60}
                  alt={advantage.title}
                />
              </div>
              <div>
                <h3 className="h2-text text-white">{advantage.title}</h3>
                <p className="r1-text text-white">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto max-w-4xl">
        <h2 className="h1-text text-white text-center">How to play?</h2>
        <div className="flex flex-col gap-5 mt-10">
          {roadMap.map((item, index) => (
            <div
              className="flex gap-4 items-center max-w-lg w-full mx-auto bg-white rounded-[30px] shadow-[0_0_57px_0_rgb(1,1,1,0.4)]"
              key={item}
            >
              <div className="h-24 lg:h-32 max-w-24 lg:max-w-32 w-full rounded-[30px] bg-gradient-to-tr from-land-violet to-land-primary text-white flex items-center justify-center h1-text">
                {index + 1}
              </div>
              <div className="p-4">
                <h3 className="h2-text text-land-gray">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScreenWrapper>
  );
};
