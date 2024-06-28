import { Button, Typography } from "@material-tailwind/react";
import banner from "../../assets/topbanner.png";
import { Typewriter } from "react-simple-typewriter";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import MahbubSarwarResume from "../../assets/webresume.pdf";
import "./TopBanner.css";

const TopBanner = () => {
  return (
    <div className="ml-6 my-16 md:my-0 lg:my-56 flex flex-col md:flex-col-reverse lg:flex-row justify-between gap-8 min-h-full">
      <div data-aos="fade-down" data-aos-delay="100" className="flex items-center lg:text-start md:text-center flex-1">
        <div>
          <h1
            className="text-6xl md:text-4xl lg:text-6xl leading-[70px]"
            style={{ fontWeight: "normal" }}
          >
            {" "}
            <span className="text-blue-500" style={{ fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  `Build the Future of the Web`,
                ]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mt-6 text-lg text-white">
            Partner with me for innovative and reliable web development. With my
            advanced MERN stack expertise, I can deliver exceptional digital
            experiences tailored to your needs.
          </p>
          <div className="mt-8 flex md:justify-center lg:justify-start gap-4">
            <a href="#contact">
              <Button className="py-4 text-white hover:text-white bg-[#0D6EFD] hover:bg-[#0d6dfdb0] flex gap-2 items-center">
                <FaArrowRight className="text-lg"></FaArrowRight>Get Started
              </Button>
            </a>
            <a href={MahbubSarwarResume} download="MahbubSarwarResume" target="_blank">
              <Button
                variant="outlined"
                className="py-4 text-white hover:text-white bg-blue-500 border-[#0D6EFD] bg-transparent hover:bg-[#0D6EFD] flex gap-2 items-center"
              >
                <FaDownload className="text-lg"></FaDownload> Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" data-aos-delay="100" className="flex-1 md:mb-12">
        <img className="w-full my-auto moveArrow" src={banner} alt="" />
      </div>
    </div>
  );
};

export default TopBanner;
