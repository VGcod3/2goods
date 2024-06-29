"use client";
import { ScreenWrapper } from "@/components/Wrappers";

type iTeam = {
  header: string;
  description: string;
};

const team: iTeam[] = [
  {
    header: "John Smith – CEO",
    description:
      "John has over 20 years of experience in the lottery industry and leads our team with a vision for innovation and transparency. His commitment to fair play and customer satisfaction drives our company forward.",
  },
  {
    header: "Jane Doe – CFO",
    description:
      "Jane manages our finances, ensuring that all transactions are handled securely and transparently. With a background in financial management, she ensures that our financial operations are robust and reliable.",
  },
  {
    header: "Mike Johnson – CTO",
    description:
      "Mike oversees our technology infrastructure, keeping our platform secure and user-friendly. He has a wealth of experience in IT security and software development, ensuring our systems are state-of-the-art.",
  },
  {
    header: "Emily Davis – Customer Support Manager",
    description:
      "Emily and her team are here to assist you with any inquiries or issues you may have. She is dedicated to providing excellent customer service and ensuring that your experience with us is smooth and enjoyable.",
  },
  {
    header: "Sarah Lee – Marketing Director",
    description:
      "Sarah leads our marketing efforts, developing strategies to reach new players and keep our community engaged. Her creative approach helps us communicate the excitement and fairness of our lottery.",
  },
  {
    header: "David Brown – Compliance Officer",
    description:
      "David ensures that our operations comply with all relevant laws and regulations. His expertise in legal matters and regulatory compliance helps us maintain a trustworthy and legitimate lottery platform.",
  },
  {
    header: "Laura Green – Operations Manager",
    description:
      "Laura coordinates the day-to-day operations of our lottery, from ticket sales to prize distribution. Her organizational skills and attention to detail ensure everything runs smoothly.",
  },
  {
    header: "Tom Wilson – Security Specialist",
    description:
      "Tom is responsible for our security measures, protecting our website and your data from potential threats. His knowledge of cybersecurity helps keep our platform safe and secure.",
  },
  {
    header: "Anna Clark – Communications Manager",
    description:
      "Anna manages our communications, keeping you informed about new draws, winners, and updates. She ensures that all our communications are clear, accurate, and engaging.",
  },
  {
    header: "Rachel Adams – Community Manager",
    description:
      "Rachel interacts with our players, gathering feedback and fostering a sense of community. She is always looking for ways to improve your experience and make our lottery more enjoyable.",
  },
];

export default function Team() {
  return (
    <ScreenWrapper>
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl text-land-secondary font-bold mb-4">
          Our Team
        </h1>
        <p className="mb-4">
          Meet the dedicated team behind Sweeps. Our team is composed of
          experienced professionals who are passionate about providing you with
          the best lottery experience possible. Here’s a closer look at our key
          team members:
        </p>

        {team.map((t, index) => (
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
