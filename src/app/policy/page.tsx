"use client";
import { ScreenWrapper } from "@/components/Wrappers";

type iPolicy = {
  header: string;
  description: string;
};
const cookiePrivacyPolicy: iPolicy[] = [
  {
    header: "Information Collection",
    description:
      "We collect personal information such as your name, email address, phone number, and payment details when you purchase a ticket or register on our website. We may also collect information about your usage of our website, including IP addresses, browser type, and access times, to improve our services and enhance your experience.",
  },
  {
    header: "Cookies",
    description:
      "We use cookies to enhance your experience on our website. Cookies are small text files that are stored on your device when you visit our website. They help us understand your preferences, remember your settings, and improve our services. You can manage your cookie preferences through your browser settings, but please note that disabling cookies may affect the functionality of our website.",
  },
  {
    header: "Data Usage",
    description:
      "Your information is used to process transactions, send updates about your participation, and improve our services. We may also use your information to send promotional materials, but you can opt out of receiving these communications at any time. We do not sell your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting the lottery, provided they agree to keep your information confidential.",
  },
  {
    header: "Data Security",
    description:
      "We implement stringent security measures to protect your data from unauthorized access, alteration, or disclosure. This includes encryption, firewalls, and secure server infrastructure. However, please note that no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    header: "Your Rights",
    description:
      "You have the right to access, update, and delete your personal information. You can also request to limit the processing of your data or object to certain types of processing. To exercise these rights, please contact our support team. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.",
  },
];

export default function Policy() {
  return (
    <ScreenWrapper>
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl text-land-secondary font-bold mb-4">
          Cookie & Privacy Policy
        </h1>
        <p className="mb-4">
          At Sweeps, we are committed to protecting your privacy. This Cookie &
          Privacy Policy outlines how we collect, use, and protect your
          information, ensuring transparency and your control over your personal
          data.
        </p>
        {cookiePrivacyPolicy.map((policy, index) => (
          <>
            <h5 key={index} className="mb-1 text-xl font-bold">
              {policy.header}
            </h5>
            <p key={index} className="mb-4 text-land-gray">
              {policy.description}
            </p>
          </>
        ))}
      </div>
    </ScreenWrapper>
  );
}
