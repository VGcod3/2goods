"use client";
import { ScreenWrapper } from "@/components/Wrappers";

type iSecurity = {
  header: string;
  description: string;
};

const security: iSecurity[] = [
  {
    header: "Data Encryption",
    description:
      "All sensitive data, including payment information, is encrypted using advanced encryption technologies such as SSL (Secure Socket Layer). This ensures that your information is protected during transmission over the internet.",
  },
  {
    header: "Secure Transactions",
    description:
      "We partner with reputable payment processors who comply with industry standards for security and data protection. All transactions are processed through secure gateways to prevent fraud and unauthorized access.",
  },
  {
    header: "Privacy Protection",
    description:
      "Your personal information is protected in accordance with our Privacy Policy. We collect and store only the information necessary to conduct the lottery and improve our services. Access to this information is restricted to authorized personnel only.",
  },
  {
    header: "Continuous Monitoring",
    description:
      "Our website is regularly monitored for any security vulnerabilities and threats. We employ advanced security tools and technologies to detect and respond to potential security incidents promptly.",
  },
  {
    header: "Compliance with Regulations",
    description:
      "We comply with all relevant data protection laws and regulations to ensure your information is handled responsibly and ethically. This includes adhering to GDPR (General Data Protection Regulation) standards for participants from the European Union.",
  },
  {
    header: "Incident Response",
    description:
      "In the unlikely event of a security breach, we have an incident response plan in place to quickly address and mitigate the impact. Affected users will be notified promptly, and steps will be taken to prevent future incidents.",
  },
  {
    header: "Security Awareness",
    description:
      "We conduct regular security training for our employees to ensure they are aware of the latest security threats and best practices for protecting your information.",
  },
  {
    header: "User Responsibility",
    description:
      "While we take every precaution to protect your data, it’s also important for you to take steps to safeguard your account. Be vigilant about monitoring your account activity and report any suspicious behavior to our support team immediately.",
  },
];

export default function Security() {
  return (
    <ScreenWrapper>
      <div className="container mx-auto p-6 mt-20">
        <h1 className="text-4xl text-land-secondary font-bold mb-4">
          Security
        </h1>
        <p className="mb-4">
          Your security is our priority at Sweeps. We are committed to
          protecting your personal and financial information through
          comprehensive security measures. Here’s how we ensure your data is
          safe:
        </p>
        {security.map((s, index) => (
          <>
            <h5 key={index} className="mb-1 text-xl font-bold">
              {s.header}
            </h5>
            <p key={index} className="mb-4 text-land-gray">
              {s.description}
            </p>
          </>
        ))}
      </div>
    </ScreenWrapper>
  );
}
