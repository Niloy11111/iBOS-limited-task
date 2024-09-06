import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E] px-[100px] mt-10">
      <div className="  pt-12 text-white">
        <div className="">
          <div className="flex justify-between mb-24 mt-12">
            <div className="flex  gap-[5px]">
              <div>
                <img
                  className="w-[40px]"
                  src="https://i.ibb.co/pvB63sq/icon-1.png"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-[22px] font-dinBold font-bold">
                  Furni<span className="text-[#1E99F5] ">Flex</span>
                </h2>
              </div>
            </div>

            <div className="flex gap-[140px] justify-between ">
              <div className=" ">
                <h2 className=" mb-5 font-dinLight font-extrabold text-lg ">
                  About US
                </h2>
                <ul className=" space-y-3">
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    <a className="link link-hover">Master Plan</a>{" "}
                  </li>
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    <a className="link link-hover">Jobs</a>{" "}
                  </li>
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    <a className="link link-hover">Invest</a>{" "}
                  </li>

                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    <a className="link link-hover">Pressroom</a>
                  </li>
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    <a className="link link-hover">Blog</a>
                  </li>
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    <a className="link link-hover">Contact</a>
                  </li>
                </ul>
              </div>
              <div className=" lg:mb-0 mb-5 font-semibold">
                <h2 className="mb-5 font-dinLight font-extrabold text-lg">
                  Explore EEVE
                </h2>
                <ul className=" space-y-3">
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    {" "}
                    <a className="link link-hover">
                      Unlock my Robot Power
                    </a>{" "}
                  </li>
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    {" "}
                    <a className="link link-hover">Starlight</a>{" "}
                  </li>
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    {" "}
                    <a className="link link-hover">Robot Platform</a>{" "}
                  </li>
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    {" "}
                    <a className="link link-hover">EEVE Roadmap</a>
                  </li>
                </ul>
              </div>

              <div className=" lg:mb-0 mb-5 font-semibold">
                <h2 className=" mb-5 font-dinLight font-extrabold text-lg">
                  Community & Support
                </h2>
                <ul className=" space-y-3">
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    {" "}
                    <a className="link link-hover">Wilow X Community</a>{" "}
                  </li>
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    {" "}
                    <a className="link link-hover">
                      Developer & Meker Access
                    </a>{" "}
                  </li>
                  <li className="mb-5 font-dinLight font-extrabold text-[#81859F]">
                    {" "}
                    <a className="link link-hover">Special Cases</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center  border-t border-[#81859F]  pt-4 pb-14 space-y-3">
            <div className="flex gap-1 justify-center">
              <ul className="flex gap-[10px]">
                <a href="https:/facebook.com">
                  <SlSocialFacebook className="text-xl  "></SlSocialFacebook>
                </a>
                <a href="https:/instagram.com">
                  <FaInstagram className="text-xl  "></FaInstagram>
                </a>
                <a href="https:/twitter.com">
                  <BsTwitterX className="text-xl  "></BsTwitterX>
                </a>

                <a href="https:/youtube.com">
                  <FiLinkedin className="text-xl  "></FiLinkedin>
                </a>
              </ul>
            </div>

            <div>
              <ul className="flex gap-[20px]">
                <li className="text-lg font-dinLight font-extrabold text-[#81859F]">
                  March22 Recap
                </li>
                <li className="text-lg font-dinLight font-extrabold text-[#81859F]">
                  Privacy Policy
                </li>
                <li className="text-lg font-dinLight font-extrabold text-[#81859F]">
                  General Terms
                </li>
                <li className="text-lg font-dinLight font-extrabold text-[#81859F]">
                  Contact
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-dinLight font-extrabold text-[#81859F]">
                United States(English)
              </h2>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-dinLight font-extrabold text-[#81859F] text-center pb-10">
              EEVE © 2024.All right reserved
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
