"use client";
import { ScreenWrapper } from "@/components/Wrappers";

type iPaying = {
  header: string;
  description: string;
};

const terms: iPaying[] = [
  {
    header: "Use of Content",
    description:
      "The content on our website is for your general information and use only. It is subject to change without notice. You may not use our content for commercial purposes without obtaining prior written consent from us. Any unauthorized use of our content may result in legal action.",
  },
  {
    header: "Intellectual Property",
    description:
      "All content, trademarks, and logos on this website are the property of Sweeps and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or display any part of our website without our express written permission. You may download or print individual pages for personal, non-commercial use only.",
  },
  {
    header: "User Conduct",
    description:
      "You agree not to use our website for any unlawful or prohibited activities. This includes, but is not limited to, activities such as hacking, spreading malware, or engaging in fraudulent behavior. You also agree not to interfere with the proper functioning of our website or disrupt other users' experience.",
  },
  {
    header: "Links to Other Websites",
    description:
      "Our website may contain links to other websites. These links are provided for your convenience and do not signify our endorsement of the content on those websites. We are not responsible for the content of these external sites and encourage you to review their terms and conditions before using them.",
  },
  {
    header: "Disclaimer",
    description:
      "We do not guarantee the accuracy, completeness, or timeliness of the information on our website. The content is provided 'as is' and for informational purposes only. Your use of any information on this website is at your own risk. We do not warrant that our website will be available at all times or free from errors, viruses, or other harmful components.",
  },
  {
    header: "Limitation of Liability",
    description:
      "To the fullest extent permitted by law, Sweeps shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, our website or the lottery services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.",
  },
];

export default function Terms() {
  return (
    <ScreenWrapper>
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl text-land-secondary font-bold mb-4">
          Website Terms
        </h1>
        <p className="mb-4">
          Welcome to Sweeps. By using our website, you agree to the following
          terms and conditions. These terms govern your access to and use of our
          website, so please read them carefully.
        </p>
        {terms.map((term, index) => (
          <>
            <h5 key={index} className="mb-1 text-xl font-bold">
              {term.header}
            </h5>
            <p key={index} className="mb-4 text-land-gray">
              {term.description}
            </p>
          </>
        ))}
      </div>
    </ScreenWrapper>
  );
}
