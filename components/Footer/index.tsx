import Link from "next/link";
import {
  Facebook,
  HouseFill,
  InfoCircleFill,
  Instagram,
  Linkedin,
} from "react-bootstrap-icons";
import footerStyles from "./Footer.module.scss";
import { logo } from "../../assets/images";

/**
 * @name - Footer
 * @description Footer Component
 * @return JSX
 * */

const Footer = () => {
  return (
    <>
      <footer className="block w-full bg-transparent border-t border-[#121212]">
        <div className="container w-[90%] sm:w-[70%] mx-auto text-white sm:flex justify-between sm:p-8 py-8">
          <div className="left w-[50%]">
            <img src="https://media.discordapp.net/attachments/1175284209217175653/1189060624781672599/logo.png?ex=659cca00&is=658a5500&hm=bbbffd6a0980f072ef00c70bcc13f807d5f38fcde94fe2079840ec4e2522212b&=&format=webp&quality=lossless&width=282&height=218" alt="Citronics'24" className="w-3/4" />
          </div>
          <div className="middle flex-grow my-12 sm:my-0">
            <h2 className="text-xl font-bold font-montserrat mb-4 text-[0.8rem] md:text-[1rem] lg:text-[1.4rem]">
              Important Links
            </h2>
            <ul className="font-josefin">
              <Link href="/">
                <li className="mb-2 text-gray-500 hover:text-white transition-colors cursor-pointer">
                  <a className="flex items-center">
                    <HouseFill />
                    &nbsp; Home
                  </a>
                </li>
              </Link>
              <Link href="/about">
                <li className="mb-2 text-gray-500 hover:text-white transition-colors cursor-pointer">
                  <a className="flex items-center">
                    <InfoCircleFill />
                    &nbsp; About Us
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="right flex-grow">
            <h2 className="text-xl font-bold font-montserrat mb-4 text-[0.8rem] md:text-[1rem] lg:text-[1.4rem]">
              Social Links
            </h2>
            <ul className="font-josefin">
              <li className="mb-3">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  <Facebook />
                  &nbsp;Facebook
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  <Instagram />
                  &nbsp;Instagram
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  <Linkedin />
                  &nbsp;Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white font-josefin bg-transparent py-3">
          <h1 className="mb-2 text-gray-200 text-sm">
            Made with{" "}
            <span role="img" aria-label="heart">
              💖
            </span>
            &nbsp; by&nbsp;
            <a
              href="https://github.com/anuplayz"
              target="_blank"
              rel="noreferrer"
              className="text-white font-josefin font-medium"
            >
              Aniruddh Dubge
            </a>
          </h1>
          <h3 className="text-gray-600 text-[12px]">
            &#169; All Rights Reserved
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
