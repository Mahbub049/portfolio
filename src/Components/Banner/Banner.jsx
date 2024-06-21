import { Button, Typography } from "@material-tailwind/react";
import banner from "../../assets/banner.png";
import { Typewriter } from "react-simple-typewriter";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import ExampleDoc from "../../assets/webresume.pdf";

const Banner = () => {
  return (
    <div className="ml-6 my-32 flex justify-between gap-8 min-h-full">
      <div className="flex items-center flex-1">
        <div>
          <h1 className="font-bold text-6xl leading-[70px]">
            I am{" "}
            <span className="text-blue-600">Muhammad Mahbub Sarwar Shafi</span>
          </h1>
          <span> </span>
          <h1
            className="text-4xl"
            style={{ paddingTop: "1rem", fontWeight: "normal" }}
          >
            I am{" "}
            <span className="text-blue-400" style={{ fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Jr. Web Developer",
                  "Mern Stack Developer",
                  "React.js Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className="mt-6 flex gap-10">
            <div className="flex items-center font-medium gap-2 text-xl">
              <IoIosMail className="text-2xl text-blue-600" />
              <p>mahbubsarwar5@gmail.com</p>
            </div>
            <div className="flex items-center font-medium gap-2 text-xl">
              <IoLogoWhatsapp className="text-2xl text-green-600" />
              <p>+8801820909803</p>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <a href={ExampleDoc} download="MyExampleDoc" target="_blank">
              <Button className="py-4 bg-blue-500 hover:bg-blue-800 flex gap-2 items-center">
                <FaDownload className="text-lg"></FaDownload>Download Resume
              </Button>
            </a>
            <Link to="https://github.com/mahbub049/">
              <Button
                variant="outlined"
                className="flex items-center border-blue-500 hover:bg-blue-700 hover:text-white gap-3 text-[14px]"
              >
                <FaGithub className="text-xl"></FaGithub> Github
              </Button>
            </Link>
            <Link to="https://www.linkedin.com/in/mahbubsarwar49/">
              <Button
                variant="outlined"
                className="flex items-center border-blue-500 hover:bg-blue-700 hover:text-white gap-3 text-[14px]"
              >
                <FaLinkedin className="text-xl"></FaLinkedin> LinkedIn
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img className="w-[600px] my-auto" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
