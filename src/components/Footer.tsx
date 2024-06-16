import { Logo } from "./Logo";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { AiOutlineYoutube } from "react-icons/ai";

import { GradientBtn } from "./GradientBtn";

export const Footer = () => {
  const links = [
    [
      "Terms & Conditions",
      "Cookie & Privacy Policy",
      "Website Terms",
      "Responsible Playing",
    ],
    ["Reviews", "FAQ", "Security", "Our Team"],
  ];

  return (
    <footer className="w-full flex flex-col justify-center align-middle container p-4">
      <Logo />
      <div className="grid mt-8 xl:mt-16 grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 xl:col-span-4 text-center xl:text-left">
          {links[0].map((link) => (
            <a
              href="#"
              key={link}
              className="font-light block text-lg lg:text-2xl leading-normal"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-4 text-center xl:text-left">
          {links[1].map((link) => (
            <a
              href="#"
              key={link}
              className="font-light block text-lg lg:text-2xl leading-normal"
            >
              {link}
            </a>
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
          <div className="flex gap-2">
            <GradientBtn>
              <a href="#" className="p-[1px]">
                <FaInstagram size={48} />
              </a>
            </GradientBtn>

            <GradientBtn>
              <a href="#" className="p-[1px]">
                <FaFacebookF size={48} />
              </a>
            </GradientBtn>

            <GradientBtn>
              <a href="#" className="p-[1px]">
                <AiOutlineYoutube size={48} />
              </a>
            </GradientBtn>
          </div>
        </div>
      </div>
      <p className="text-center mt-6 text-lg lg:text-2xl leading-normal font-light">
        © All rights reserved
      </p>
    </footer>
  );
};
