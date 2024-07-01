import { Logo } from "./Logo";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { AiOutlineYoutube } from "react-icons/ai";

import { GradientBtn } from "./GradientBtn";
import Link from "next/link";

export const Footer = () => {
  const links = [
    [
      {
        header: "Terms & Conditions",
        link: "/terms",
      },
      { header: "Cookie & Privacy Policy", link: "/policy" },
      { header: "Website Terms", link: "/website-terms" },
      { header: "Responsible Playing", link: "/responsible-playing" },
    ],
    [
      { header: "Reviews", link: "/reviews" },
      { header: "FAQ", link: "/faq" },
      { header: "Security", link: "/security" },
      { header: "Our Team", link: "/team" },
    ],
  ];

  return (
    <footer className="w-full flex flex-col justify-center align-middle container p-4">
      <Logo />
      <div className="grid mt-8 xl:mt-16 grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 xl:col-span-4 text-center xl:text-left">
          {links[0].map((link) => (
            <Link
              href={link.link}
              key={link.header}
              className="font-light block text-lg lg:text-2xl leading-normal"
            >
              {link.header}
            </Link>
          ))}
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 text-center xl:text-left">
          {links[1].map((link) => (
            <Link
              href={link.link}
              key={link.header}
              className="font-light block text-lg lg:text-2xl leading-normal"
            >
              {link.header}
            </Link>
          ))}
        </div>
        <div className="col-span-12 md:col-span-12 xl:col-span-4 flex flex-col gap-2 justify-end items-center xl:items-start ">
          <a
            href="#"
            key={"contact"}
            className="font-light block text-lg lg:text-2xl leading-normal"
          >
            hello@sweeps.com
          </a>
        </div>
      </div>
      <p className="text-center mt-6 text-lg lg:text-2xl leading-normal font-light">
        © All rights reserved
      </p>
    </footer>
  );
};
