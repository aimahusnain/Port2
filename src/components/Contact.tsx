"use client";

import emailjs from "emailjs-com";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { BsMastodon, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { IoLogoStackoverflow } from "react-icons/io5";
import { TbBrandYoutube } from "react-icons/tb";
import SectionContainer from "./SectionContainer";
import TooltipForIcons from "./tooltipforicons";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: boolean;
  email?: boolean;
  message?: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const triggerEmail = async (data) => {
    await emailjs
      .send("service_8j8ygx5", "template_itv3s7k", data, "gDiiIsHO-vSM4wYX6")
      .then((success) => {
        console.log("Success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("message cannot go Successfully!");

        console.log(err);
      });
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const errors: FormErrors = {};

    if (!name) {
      errors.name = true;
    }
    if (!email) {
      errors.email = true;
    }
    if (!message) {
      errors.message = true;
    }

    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      triggerEmail(formData);
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [isSent, setIsSent] = useState(false);

  const router = useRouter();
  const handleClick = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
    router.refresh();
  };

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const errorMessage = validateInput(name, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const validateEmail = (email: string): boolean => {
    // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateInput = (
    fieldName: string,
    value: string
  ): string | undefined => {
    switch (fieldName) {
      case "name":
        return value.trim() === "" ? "Name is required" : undefined;
      case "email":
        return value.trim() === ""
          ? "Email is required"
          : !validateEmail(value)
          ? "Invalid email format"
          : undefined;
      case "message":
        return value.trim() === "" ? "Message is required" : undefined;
      default:
        return undefined;
    }
  };

  return (
    <SectionContainer
      extraClass="about-section bg-darkness dark:bg-light"
      name={"contact"}
      title="CONTACT US"
      subTitle={"GET IN TOUCH"}
      leftImage="/static/img/Eman Contact2.png"
      leftImageTitle={"About Me"}
    >
      <p className="text-white/60 dark:text-dark/70 text-lg tracking-widest">
        Thank you for reaching out! We're here to assist you. Please feel free
        to contact us using the information below:
      </p>
      <br />
      <div>
        <div className="w-full flex justify-center p-0 h-fit items-center text-left">
          <div className="flex flex-col sm:w-full align-middle w-fit text-center gap-8 sm:justify-between">
            <div className="flex w-full sm:gap-40 gap-10 sm:flex-row flex-col">
              <p className="m-0 text-white dark:text-dark p-0 flex flex-row items-center gap-3">
                <IoMdMail />
                webkinSolutions1@proton.me
                <br />
              </p>

              <p className="m-0 text-white dark:text-dark p-0 flex flex-row items-center gap-3">
                <FaPhoneAlt fill="white" className="dark:fill-black" />
                +92 3074241757
              </p>
            </div>

            <ul className="flex flex-row gap-1">
            <TooltipForIcons
                linkhref="https://github.com/WebKinSolutions"
                arialabel="Github"
              >
                <FiGithub
                  className="fill-white dark:hover:fill-white duration-200 transition-all dark:fill-black"
                  stroke="0"
                  size={15}
                />
              </TooltipForIcons>
            
              <TooltipForIcons
                linkhref="https://www.facebook.com/"
                arialabel="Facebook"
              >
                <Facebook
                  className="fill-white dark:hover:fill-white duration-200 transition-all dark:fill-black"
                  stroke="0"
                  size={15}
                />
              </TooltipForIcons>

              <TooltipForIcons
                linkhref="https://twitter.com/"
                arialabel="Twitter"
              >
                <BsTwitterX
                  className="fill-white dark:hover:fill-white duration-200 transition-all dark:fill-black"
                  stroke="0"
                  size={15}
                />
              </TooltipForIcons>

              <TooltipForIcons
                linkhref="https://instagram.com/"
                arialabel="Instagram"
              >
                <Instagram
                  className="stroke-white dark:hover:fill-white duration-200 transition-all dark:stroke-dark"
                  size={15}
                />
              </TooltipForIcons>

              <TooltipForIcons
                linkhref="https://linkedin.com/"
                arialabel="Linkedin"
              >
                <FaLinkedinIn
                  className="fill-white dark:hover:fill-white duration-200 transition-all dark:fill-black"
                  stroke="0"
                  size={15}
                />
              </TooltipForIcons>

              <TooltipForIcons
                linkhref="https://youtube.com/"
                arialabel="Youtube"
              >
                <TbBrandYoutube
                  className="stroke-white dark:hover:fill-white duration-200 transition-all dark:stroke-black"
                  size={15}
                />
              </TooltipForIcons>

              <TooltipForIcons
                linkhref="https://hashnode.com/"
                arialabel="Hashnode"
              >
                <FaHashnode
                  className="fill-white dark:hover:fill-white duration-200 transition-all stroke-white dark:stroke-dark dark:fill-dark"
                  size={15}
                />
              </TooltipForIcons>

              <TooltipForIcons
                linkhref="https://mastodon.social/"
                arialabel="Mastodon"
              >
                <BsMastodon className="fill-white dark:hover:fill-white duration-200 transition-all dark:fill-black" size={15} />
              </TooltipForIcons>

              <TooltipForIcons
                linkhref="https://stackoverflow.com/"
                arialabel="StackOverFlow"
              >
                <IoLogoStackoverflow
                  className="fill-white dark:hover:fill-white duration-200 transition-all dark:fill-black"
                  size={15}
                />
              </TooltipForIcons>
            </ul>
          </div>
        </div>
        <br />
        <p className="text-white/60 dark:text-dark/70 tracking-widest text-lg">
          Have a specific question or request? Feel free to use the form below
          to send us a direct message:
        </p>
        <br />
      </div>

      <section id="contact" className="w-full mt-12 mb-8 flex gap-4">
        <form className="flex flex-col w-full" onSubmit={onFormSubmit}>
          <div className="flex sm:flex-row flex-col sm:gap-7 gap-0 w-full">
            {/* Email */}
            <div className="mb-6 w-full">
              <label
                htmlFor="name"
                className="text-white dark:text-black block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                onBlur={handleBlur}
                onChange={handleInputChange}
                value={formData.name}
                required
                className={`bg-[#18191E] dark:text-black dark:bg-[#f3f3f3] border border-[#33353F] placeholder-[#9CA2A9] dark:placeholder-[#474444] text-zinc-100 text-sm rounded-lg block w-full p-2.5 ${
                  formErrors.name ? "border-red-500" : ""
                }`}
                placeholder="Your Name"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>

            <div className="mb-6 w-full">
              <label
                htmlFor="email"
                className="text-white dark:text-black block text-sm mb-2 font-medium"
              >
                Email
              </label>
              <input
                id="emailfield"
                type="email"
                onBlur={handleBlur}
                placeholder="example@website.com"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                required
                className={`bg-[#18191E] dark:text-black dark:bg-[#f3f3f3] border border-[#33353F] placeholder-[#9CA2A9] dark:placeholder-[#474444] text-zinc-100 text-sm rounded-lg block w-full p-2.5 ${
                  formErrors.email ? "border-red-500" : ""
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onBlur={handleBlur}
              onChange={handleInputChange}
              id="messagefield"
              className={`bg-[#18191E] resize-none dark:bg-[#f3f3f3] border border-[#33353F] placeholder-[#9CA2A9] dark:placeholder-[#474444] text-zinc-100 dark:text-black text-sm rounded-lg block w-full p-2.5 ${
                formErrors.message ? "border-red-500" : ""
              }`}
              placeholder="Let's talk about..."
            />
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            aria-label="Send Message button for Contact"
            className="bg-boo-700 hover:bg-boo-800 transition-all duration-150 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      <p className="text-white dark:text-dark tracking-widest mt-[16px] text-lg">
        We value your feedback and aim to respond witin 24 hours.
      </p>
    </SectionContainer>
  );
};
export default Contact;