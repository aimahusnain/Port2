"use client";

import { useToast } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SectionContainer from "./SectionContainer";
import { BsTwitterX, BsMastodon } from "react-icons/bs";
import { TbBrandYoutube } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FaHashnode } from "react-icons/fa6";
import { IoLogoStackoverflow } from "react-icons/io5";

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

  const toast = useToast({
    duration: 3000,
    isClosable: true,
  });

  const triggerEmail = async (data) => {
    await emailjs
      .send("service_8j8ygx5", "template_itv3s7k", data, "gDiiIsHO-vSM4wYX6")
      .then((success) => {
        toast({
          title: "Email Sent Successfully",
          status: "success",
          duration: 500,
          isClosable: true,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 500,
          isClosable: true,
        });
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
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (name.length === 0 || email.length === 0 || message.length === 0) {
  //     setError(true);
  //   } else {
  //     emailjs
  //       .send(
  //         "service_seruhwu",
  //         "template_21aw58z",
  //         mailData,
  //         "Q3pccdLZhU-mZT7tQ"
  //       )
  //       .then(
  //         (response) => {
  //           setError(false);
  //           setSuccess(true);
  //           console.log("respons");
  //           setTimeout(() => {
  //             setSuccess(false);
  //           }, 3000);
  //           setMailData({ name: "", email: "", message: "" });
  //         },
  //         (err) => {
  //           console.log(err.text);
  //         }
  //       );
  //   }
  // };

  return (
    <SectionContainer
      extraClass="about-section bg-darkness"
      name={"contact"}
      title="CONTACT US"
      subTitle={"GET IN TOUCH"}
      leftImage="static/img/team/Eman.png"
      leftImageTitle={"About Me"}
    >
      <p className="text-white/60 text-lg tracking-widest">
        Thank you for reaching out! We're here to assist you. Please feel free
        to contact us using the information below:
      </p>
      <br />
      <div>
        <div className="w-full flex justify-center p-0 h-fit items-center text-left">
          <div className="flex flex-col sm:w-full align-middle w-fit text-center gap-8  sm:justify-between">
            <div className="flex w-full sm:gap-40 gap-10 sm:flex-row flex-col">
              <p className="m-0 text-white p-0 flex flex-row items-center gap-3">
                <IoMdMail />
                canals786@gmail.com
                <br />
              </p>

              <p className="m-0 text-white p-0 flex flex-row items-center gap-3">
                <FaPhoneAlt fill="white" />
                +92 3074241757
              </p>
            </div>

            <ul className="flex flex-row gap-2">
              {/* FACEBOOK */}
              <li className="transition-all duration-500 hover:bg-boo-700  p-2 cursor-pointer rounded-full">
                <Link
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                  target="_blank"
                >
                  <Facebook className="fill-white" stroke="0" size={15} />
                </Link>
              </li>

              {/* TWITTER */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://twitter.com/"
                  aria-label="Twitter"
                  target="_blank"
                >
                  <BsTwitterX className="fill-white" stroke="0" size={15} />
                </Link>
              </li>

              {/* INSTAGRAM */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <Instagram className="stroke-white" size={15} />
                </Link>
              </li>

              {/* LINKEDIN */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedinIn className="fill-white" stroke="0" size={15} />
                </Link>
              </li>

              {/* YOUTUBE */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://youtube.com/"
                  aria-label="Youtube"
                  target="_blank"
                >
                  <TbBrandYoutube className="stroke-white" size={15} />
                </Link>
              </li>

              {/* GITHUB */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://github.com/"
                  aria-label="Github"
                  target="_blank"
                >
                  <FiGithub className="stroke-white" size={15} />
                </Link>
              </li>

              {/* HASHNODE */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://hashnode.com/"
                  aria-label="Hashnode"
                  target="_blank"
                >
                  <FaHashnode className="fill-white stroke-white" size={15} />
                </Link>
              </li>

              {/* MASTODON */}
              <li className="transition-all duration-500 hover:bg-boo-700 -700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://mastodon.social/"
                  aria-label="Mastodon"
                  target="_blank"
                >
                  <BsMastodon className="fill-white" size={15} />
                </Link>
              </li>

              {/* STACKOVERFLOW */}
              <li className="transition-all duration-500 hover:bg-boo-700  p-2 cursor-pointer rounded-full">
                <Link
                  href="https://stackoverflow.com/"
                  aria-label="StackOverFlow"
                  target="_blank"
                >
                  <IoLogoStackoverflow className="fill-white" size={15} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <p className="text-white/60 tracking-widest text-lg">
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
                className="text-white block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                aria-label="Your Name"
                id="nameField"
                name="name"
                onChange={handleInputChange}
                value={formData.name}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-zinc-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your name"
              />
            </div>

            {/* Subject */}
            <div className="mb-6 w-full">
              <label
                htmlFor="email"
                className="text-white block text-sm mb-2 font-medium"
              >
                Email
              </label>
              <input
                aria-label="Your Email"
                id="emailField"
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              aria-label="Your Message here"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              id="messageField"
              className="bg-[#18191E] border border-[#33353F] resize-none placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            aria-label="Send Message"
            className="bg-boo-800 hover:bg-pinky-600 transition-all duration-150 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      <p className="text-white tracking-widest mt-[16px] text-lg">
        We value your feedback and aim to respond witin 24 hours.
      </p>
    </SectionContainer>
  );
};
export default Contact;
