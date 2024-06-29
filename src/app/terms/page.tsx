"use client";
import { ScreenWrapper } from "@/components/Wrappers";

type iTerm = {
  header: string;
  description: string;
};

const terms: iTerm[] = [
  {
    header: "Eligibility",
    description:
      "Participation in our lottery is open to individuals who are of legal age according to the laws of their jurisdiction. By purchasing a ticket, you confirm that you meet the age requirement. Employees of [Your Lottery Website], their family members, and anyone else connected with the operation of the lottery are not eligible to participate.",
  },
  {
    header: "Ticket Purchase",
    description:
      "Each ticket purchase is final and non-refundable. Please ensure all details are correct before completing your purchase. Tickets must be purchased using valid payment methods, and all transactions are subject to verification and acceptance by our payment processing system. We reserve the right to cancel any ticket purchase if fraudulent activity is suspected.",
  },
  {
    header: "Draws and Prizes",
    description:
      "Draws will be conducted on the dates specified on our website. Winners will be selected at random from all eligible entries and notified via the contact details provided during ticket purchase. Prizes must be claimed within the specified period, and unclaimed prizes may be forfeited. Prizes are non-transferable, and no cash alternatives are available unless explicitly stated.",
  },
  {
    header: "Privacy",
    description:
      "We respect your privacy and handle your data in accordance with our Privacy Policy. Your personal information will be used to process transactions, communicate with you about your participation, and improve our services. We do not sell or share your personal information with third parties, except as necessary to conduct the lottery or as required by law.",
  },
  {
    header: "Liability",
    description:
      "We are not responsible for any loss or damage incurred as a result of participating in our lottery or using our website. This includes, but is not limited to, loss of data, loss of profits, or any other financial or personal loss. By participating in the lottery, you agree to release and hold harmless [Your Lottery Website] and its affiliates from any and all claims, damages, and liabilities.",
  },
  {
    header: "Amendments",
    description:
      "We reserve the right to amend these terms and conditions at any time. It is your responsibility to review these terms regularly. Continued participation in the lottery after any amendments constitutes acceptance of the new terms.",
  },
];

export default function Terms() {
  return (
    <ScreenWrapper>
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl text-land-secondary font-bold mb-4">
          Terms & Conditions
        </h1>
        <p className="mb-4">
          Welcome to Sweeps! By accessing and using our website, you agree to
          comply with and be bound by the following terms and conditions. Please
          read them carefully before participating in any lottery activities:
        </p>
        {terms.map((t, index) => (
          <>
            <h5 key={index} className="mb-1 text-xl font-bold">
              {t.header}
            </h5>
            <p key={index} className="mb-4 text-land-gray">
              {t.description}
            </p>
          </>
        ))}
      </div>
    </ScreenWrapper>
  );
}
