"use client";
import { ScreenWrapper } from "@/components/Wrappers";
import { User } from "lucide-react";

type iReview = {
  header: string;
  description: string;
};

const reviews: iReview[] = [
  {
    header: "Jane D.",
    description:
      "Winning the lottery was a dream come true! The process was smooth and transparent from start to finish. I still can’t believe I won such an amazing prize. Thank you for this incredible opportunity!",
  },
  {
    header: "Mark S.",
    description:
      "I love the fair chances this lottery offers. The limited ticket sales make me feel like I actually have a shot at winning. Plus, the customer service is excellent, always ready to help with any questions I have. Highly recommended!",
  },
  {
    header: "Anna T.",
    description:
      "A thrilling experience! I appreciate the limited ticket sales which increase my chances of winning. It’s also great that they prioritize transparency by showing the number of entries for each draw. Definitely a lottery site I trust and enjoy.",
  },
  {
    header: "David R.",
    description:
      "I’ve participated in several draws and even won a few times. The platform is easy to navigate, and I love that I can see the number of entries for each draw. It’s exciting and fair, and I’ve had a great time playing.",
  },
];

export default function Reviews() {
  return (
    <ScreenWrapper>
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl text-land-secondary font-bold mb-4">Reviews</h1>
        <p className="mb-4">
          Hear from our happy winners and participants! We pride ourselves on
          providing a fair, transparent, and exciting lottery experience. Here
          are some testimonials from our satisfied players:
        </p>
        {reviews.map((r, index) => (
          <div key={index} className="w-full mb-7">
            <div className="flex gap-3 mb-2">
              <User
                size={36}
                strokeWidth={1.5}
                className="bg-neutral-300 rounded-full p-1"
              />
              <h5 className="mb-1 text-xl font-bold">{r.header}</h5>
            </div>
            <p className="mb-4 text-land-gray">{r.description}</p>
          </div>
        ))}
      </div>
    </ScreenWrapper>
  );
}
