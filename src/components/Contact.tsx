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

  return (
    <SectionContainer
      extraClass="about-section bg-darkness dark:bg-light"
      name={"contact"}
      title="CONTACT US"
      subTitle={"GET IN TOUCH"}
      leftImage="static/img/team/Eman.png"
      leftImageTitle={"About Me"}
    >
      <p className="text-white/60 dark:text-dark/70 text-lg tracking-widest">
        Thank you for reaching out! We're here to assist you. Please feel free
        to contact us using the information below:
      </p>
      <br />
      <div>
        <div className="w-full flex justify-center p-0 h-fit items-center text-left">
          <div className="flex flex-col sm:w-full align-middle w-fit text-center gap-8  sm:justify-between">
            <div className="flex w-full sm:gap-40 gap-10 sm:flex-row flex-col">
              <p className="m-0 text-white dark:text-dark p-0 flex flex-row items-center gap-3">
                <IoMdMail />
                DevKinSolutions@proton.me
                <br />
              </p>

              <p className="m-0 text-white dark:text-dark p-0 flex flex-row items-center gap-3">
                <FaPhoneAlt fill="white" className="dark:fill-black" />
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
                  <Facebook
                    className="fill-white dark:fill-black"
                    stroke="0"
                    size={15}
                  />
                </Link>
              </li>

              {/* TWITTER */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://twitter.com/"
                  aria-label="Twitter"
                  target="_blank"
                >
                  <BsTwitterX
                    className="fill-white dark:fill-black"
                    stroke="0"
                    size={15}
                  />
                </Link>
              </li>

              {/* INSTAGRAM */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://instagram.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <Instagram
                    className="stroke-white dark:stroke-dark"
                    size={15}
                  />
                </Link>
              </li>

              {/* LINKEDIN */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedinIn
                    className="fill-white dark:fill-black"
                    stroke="0"
                    size={15}
                  />
                </Link>
              </li>

              {/* YOUTUBE */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://youtube.com/"
                  aria-label="Youtube"
                  target="_blank"
                >
                  <TbBrandYoutube
                    className="stroke-white dark:stroke-black"
                    size={15}
                  />
                </Link>
              </li>

              {/* GITHUB */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://github.com/"
                  aria-label="Github"
                  target="_blank"
                >
                  <FiGithub
                    className="stroke-white dark:stroke-dark"
                    size={15}
                  />
                </Link>
              </li>

              {/* HASHNODE */}
              <li className="transition-all duration-500 hover:bg-boo-700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://hashnode.com/"
                  aria-label="Hashnode"
                  target="_blank"
                >
                  <FaHashnode
                    className="fill-white stroke-white dark:stroke-dark
dark:fill-dark"
                    size={15}
                  />
                </Link>
              </li>

              {/* MASTODON */}
              <li className="transition-all duration-500 hover:bg-boo-700 -700 p-2 cursor-pointer rounded-full">
                <Link
                  href="https://mastodon.social/"
                  aria-label="Mastodon"
                  target="_blank"
                >
                  <BsMastodon className="fill-white dark:fill-black" size={15} />
                </Link>
              </li>

              {/* STACKOVERFLOW */}
              <li className="transition-all duration-500 hover:bg-boo-700  p-2 cursor-pointer rounded-full">
                <Link
                  href="https://stackoverflow.com/"
                  aria-label="StackOverFlow"
                  target="_blank"
                >
                  <IoLogoStackoverflow
                    className="fill-white dark:fill-black"
                    size={15}
                  />
                </Link>
              </li>
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
                id="nameField"
                name="name"
                onChange={handleInputChange}
                value={formData.name}
                required
                className="bg-[#18191E] dark:bg-light border border-[#33353F] placeholder-[#9CA2A9] dark:placeholder-black text-zinc-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your name"
              />
            </div>

            {/* Subject */}
            <div className="mb-6 w-full">
              <label
                htmlFor="email"
                className="text-white dark:text-black block text-sm mb-2 font-medium"
              >
                Email
              </label>
              <input
                id="emailField"
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                required
                className="bg-[#18191E] dark:bg-light dark:text-light border border-[#33353F] placeholder-[#9CA2A9] dark:placeholder-black text-gray-100 text-sm rounded-lg block w-full p-2.5"
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
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              id="messageField"
              className="bg-[#18191E] dark:text-black dark:bg-light border border-[#33353F] resize-none placeholder-[#9CA2A9] dark:placeholder-black text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          {/* Submit Button */}
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
