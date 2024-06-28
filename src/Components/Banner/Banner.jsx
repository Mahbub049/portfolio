import { Button, IconButton, Typography } from "@material-tailwind/react";
import banner from "../../assets/banner.png";
import { Typewriter } from "react-simple-typewriter";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { IoCall, IoDocument } from "react-icons/io5";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import ExampleDoc from "../../assets/webresume.pdf";
import "./Banner.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import { MdMail } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';

import MahbubSarwarResume from "../../assets/webresume.pdf";
AOS.init();

const Banner = () => {
  return (
    <div id="about" className="md:ml-6 my-24 lg:my-56 ">
      <SectionTitle heading={"About Me"}></SectionTitle>
      <div className="flex flex-col lg:flex-row justify-between gap-8 min-h-full">
        <div className="flex-1 md:flex md:justify-center lg:justify-start lg:ml-0" data-aos="fade-right">
          <img className="w-[600px] my-auto moveArrow" src={banner} alt="" />
        </div>
        <div className="flex justify-center p-4 flex-col flex-1 md:text-center lg:text-start space-y-6" data-aos="fade-left">
          <div className="space-y-4">
            <h4 className="text-lg text-blue-400 font-semibold">
              Name:{" "}
              <span className="text-white">Muhammad Mahbub Sarwar Shafi</span>
            </h4>
            <h4 className="text-lg text-blue-400 font-semibold">
              Graduate:{" "}
              <span className="text-white">
                B.Sc in Information and Communication Engineering
              </span>
            </h4>
            <h4 className="text-lg text-blue-400 font-semibold">
              Expertise:{" "}
              <span className="text-white">MERN Stack Web Development</span>
            </h4>
          </div>
          <div className="flex md:justify-center lg:justify-start flex-col md:flex-row gap-4 lg:gap-8">
            <h4 className="text-lg flex items-center gap-2 text-blue-400 font-semibold">
              <IoIosMail className="text-3xl"></IoIosMail>
              <span className="text-white">mahbubsarwar5@gmail.com</span>
            </h4>
            <h4 className="text-lg flex items-center gap-2 text-green-600 font-semibold">
              <IoLogoWhatsapp className="text-3xl"></IoLogoWhatsapp>
              <span className="text-white">+8801820909803</span>
            </h4>
          </div>
          <p className="text-justify">
            Hi there! I&apos;m Muhammad Mahbub Sarwar Shafi, a dedicated MERN
            Stack web developer with a flair for crafting seamless and efficient
            web applications. I specialize in building robust full-stack
            solutions that are both scalable and user-friendly. With expertise
            in MongoDB, Express.js, React, and Node.js, I transform innovative
            ideas into dynamic web experiences.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link to={"https://www.linkedin.com/in/mahbubsarwar49/"}>
              <IconButton
                size="lg"
                variant="outlined"
                className="text-[#4690ff] text-2xl border-[#4690ff] rounded-full hover:bg-opacity-80 transform hover:bg-blue-700 hover:text-white hover:border-blue-800 transition duration-500"
              >
                <FaLinkedin className=""></FaLinkedin>
              </IconButton>
            </Link>
            <Link to={"https://github.com/Mahbub049"}>
              <IconButton
                size="lg"
                variant="outlined"
                className="text-[#4690ff] text-2xl border-[#4690ff] rounded-full hover:bg-opacity-80 border-2   transform hover:bg-blue-700 hover:text-white hover:border-blue-800 transition duration-500"
              >
                <FaGithub className=""></FaGithub>
              </IconButton>
            </Link>
            <Link to={"https://www.facebook.com/mahbub.sarwar46"}>
              <IconButton
                size="lg"
                variant="outlined"
                className="text-[#4690ff] text-2xl border-[#4690ff] rounded-full hover:bg-opacity-80 transform hover:bg-blue-700 hover:text-white hover:border-blue-800 transition duration-500"
              >
                <FaFacebook className=""></FaFacebook>
              </IconButton>
            </Link>
            <a
              href={MahbubSarwarResume}
              download="MahbubSarwarResume"
              target="_blank"
            >
              <IconButton
                size="lg"
                variant="outlined"
                className="text-[#4690ff] text-2xl border-[#4690ff] rounded-full hover:bg-opacity-80 transform hover:bg-blue-700 hover:text-white hover:border-blue-800 transition duration-500"
              >
                <IoDocument className=""></IoDocument>
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
