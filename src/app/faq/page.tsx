"use client";
import { ScreenWrapper } from "@/components/Wrappers";
import { useState } from "react";

type iFaq = {
  question: string;
  answer: string;
};

const faq: iFaq[] = [
  {
    question: "How do I purchase a ticket?",
    answer:
      "To purchase a ticket, simply select your desired draw, choose the number of tickets you wish to buy, and complete the purchase process using our secure payment system. You will receive a confirmation email with your ticket details.",
  },
  {
    question: "How are winners selected?",
    answer:
      "Winners are selected through a random draw from all eligible entries. The draw is conducted using a secure, random number generator to ensure fairness and transparency. The results are audited by an independent third party.",
  },
  {
    question: "What happens if not all tickets are sold?",
    answer:
      "A winner is still chosen even if not all tickets are sold. This ensures that the draw proceeds as scheduled and participants have a fair chance of winning. The prize value remains the same regardless of the number of tickets sold.",
  },
  {
    question: "How will I know if I win?",
    answer:
      "Winners are notified via email and phone, using the contact details provided during ticket purchase. The results are also posted on our website under the 'Winners' section. Make sure your contact details are up to date to avoid missing out on notifications.",
  },
  {
    question: "Can I participate if I am outside my country?",
    answer:
      "Yes, our lottery is open to participants from various countries, subject to local laws and regulations. Please ensure that participating in lotteries is legal in your jurisdiction before purchasing tickets.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept a variety of payment methods, including credit/debit cards, PayPal, and other secure online payment options. All transactions are encrypted to protect your financial information.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Yes, we prioritize your privacy and security. All personal information is stored securely and handled in accordance with our Privacy Policy. We use advanced encryption technologies to protect your data.",
  },
  {
    question: "How often are draws conducted?",
    answer:
      "Draw schedules vary depending on the specific lottery. Check our website for the latest information on upcoming draws and ticket purchase deadlines.",
  },
  {
    question: "Can I cancel my ticket purchase?",
    answer:
      "All ticket purchases are final and non-refundable. Please double-check your selections and details before completing the purchase.",
  },
  {
    question: "Can I cancel my ticket purchase?",
    answer:
      "All ticket purchases are final and non-refundable. Please double-check your selections and details before completing the purchase.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our customer support team is available to assist you with any questions or issues. You can reach us via email, phone, or live chat on our website.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ScreenWrapper>
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl text-land-secondary font-bold mb-4">FAQ</h1>
        {faq.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left text-lg font-medium text-land-primary"
            >
              {item.question}
            </button>
            {activeIndex === index && <p className="mt-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </ScreenWrapper>
  );
}
