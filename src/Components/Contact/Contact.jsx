import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Success!",
          text: "Successfully Sent!",
          icon: "success",
          confirmButtonText: "Okay",
        });
        e.target.reset();
      });
  };
  return (
    <div className="my-32" id="contact">
      <SectionTitle heading={"Contact Me"}></SectionTitle>
      <div className="flex flex-col mx-3 lg:flex-row gap-10 mt-12">
        <div className="flex-1">
          <div
            data-aos="fade-down"
            className="px-8 py-12 border-blue-500 border-2 rounded-xl mb-3 space-y-2 border"
          >
            <FaWhatsapp className="text-2xl text-green-500" />
            <p className="font-bold text-blue-600">WhatsApp</p>
            <p>+8801820909803</p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            className="px-8 py-12 border-blue-500 border-2 rounded-xl mb-3 space-y-2 border"
          >
            <MdEmail className="text-2xl text-[#ff6961]" />
            <p className="font-bold text-blue-600">Email</p>
            <p>mahbubsarwar5@gmail.com</p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="px-8 py-12 border-blue-500 border-2 rounded-xl mb-3 space-y-2 border"
          >
            <GrLocation className="text-2xl text-blue-500"></GrLocation>
            <p className="font-bold text-blue-600">Address</p>
            <p>144/11, Matikata, Dhaka, Bangladesh</p>
          </div>
        </div>
        <form className="flex-1 " onSubmit={handleSubmit(onSubmit)}>
          <div data-aos="fade-left" data-aos-delay="150">
            <div className="mb-6">
              <p className="text-lg font-bold mb-3">Your Name</p>
              <input
                type="text"
                {...register("name")}
                className="border pl-3 border-blue-500 rounded-xl h-[40px] w-full"
              />
            </div>
            <div className="mb-6">
              <p className="text-lg font-bold mb-3">Your Email</p>
              <input
                type="text"
                {...register("email")}
                className="border pl-3 border-blue-500 rounded-xl h-[40px] w-full"
              />
            </div>
            <div>
              <p className="text-lg font-bold mb-3">Your Message</p>
              <input
                type="text"
                className="border h-[250px] border-blue-500 rounded-xl w-full hidden"
              />
              <textarea
                rows="11"
                className="border p-3 h-[250px] border-blue-500 rounded-xl w-full"
                {...register("message")}
                name="message"
                id=""
              />
            </div>
            <input
              className="bg-blue-500 px-4 py-2 rounded-xl w-full mt-3 text-white hover:bg-blue-800 font-bold hover:cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
