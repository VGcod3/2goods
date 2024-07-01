"use client";
import { ScreenWrapper } from "@/components/Wrappers";

type iPaying = {
  header: string;
  description: string;
};

const responsiblePlaying: iPaying[] = [
  {
    header: "Set Limits",
    description:
      "Set a budget for ticket purchases and stick to it. Only spend what you can afford to lose, and never use money intended for essential expenses. If you find it difficult to set limits, consider using self-exclusion tools available on our website or seeking advice from support organizations.",
  },
  {
    header: "Know the Odds",
    description:
      "Understand that lotteries are games of chance and there are no guaranteed wins. While we offer great odds due to limited ticket sales, the outcome is always uncertain. Play for fun, not as a way to make money or solve financial problems.",
  },
  {
    header: "Seek Help",
    description:
      "If you feel that gambling is becoming a problem, seek help from professional organizations dedicated to helping individuals with gambling issues. There are many resources available that can provide support, including counseling services and helplines.",
  },
  {
    header: "Underage Gambling",
    description:
      "Participation in our lottery is restricted to individuals of legal age as per their jurisdiction. We have strict age verification processes in place to prevent underage gambling. Parents and guardians should monitor and control access to gambling websites to prevent underage participation.",
  },
  {
    header: "Recognize the Signs",
    description:
      "Be aware of the signs of problem gambling, which can include spending more money and time on gambling than intended, lying about gambling habits, and neglecting responsibilities. If you recognize these signs in yourself or someone you know, it’s important to seek help immediately.",
  },
  {
    header: "Use Available Tools",
    description:
      "Utilize the responsible gaming tools we provide, such as setting deposit limits, self-exclusion, and time-out features. These tools are designed to help you control your gambling activities and ensure they remain fun and within your control.",
  },
];

export default function Paying() {
  return (
    <ScreenWrapper>
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl text-land-secondary font-bold mb-4">
          Responsible Playing
        </h1>
        <p className="mb-4">
          At Sweeps, we promote responsible playing. Our lottery is meant to be
          a fun and exciting activity, but it’s important to play responsibly.
          Here are some guidelines to help ensure that your participation
          remains enjoyable and within your means:
        </p>
        {responsiblePlaying.map((guideline, index) => (
          <>
            <h5 key={index} className="mb-1 text-xl font-bold">
              {guideline.header}
            </h5>
            <p key={index} className="mb-4 text-land-gray">
              {guideline.description}
            </p>
          </>
        ))}
      </div>
    </ScreenWrapper>
  );
}
