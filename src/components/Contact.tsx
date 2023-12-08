'use client'

import SectionContainer from "./SectionContainer";
import { useToast } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaGooglePlusG, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

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
    duration: 3000, // Set the duration for how long the toast will be displayed
    isClosable: true, // Allow the user to close the toast manually
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
        // Clear form fields after successful email send
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
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            setSuccess(true);
            console.log("respons");
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };


  return (
    
    <SectionContainer
    extraClass="about-section bg-darkness " // Add extraClass or adjust as per your requirements
    name={"contact"}
      title="CONTACT US"
      subTitle={"GET IN TOUCH"}
      leftImage="static/img/team/Eman.png"
      leftImageTitle={"About Me"} // Add leftImageTitle or adjust as per your requirements
    >
       <form className="contactform m-0 flex ml-4 mb-6" onSubmit={onFormSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <input
              id="name"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
              type="text"
              placeholder="Name"
              className="validate form-control"
              required
            />
            <span className="input-focus-effect bg-boo" />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              className="validate form-control"
              required
            />
            <span className="input-focus-effect bg-boo" />
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message..."
              className="w-full focus:ring-0 pl-0 bg-transparent border-none border-b-2 text-[17px] text-white resize-none border-b-white focus:outline-none"
              style={{ borderBottom: "1px solid #ececec" }}
              rows={6}
            />

            <span className="input-focus-effect bg-boo " />
          </div>
        </div>

        <div className="flex flex-col ml-3">
          <button type="submit">
            <div id="content">
              <div className="flex flex-row">
                <button
                  className="text-black hover:text-white border-black hover:border-white tracking-widest shadow-lg hover:shadow-xl transition-all duration-500 
               px-4 py-2 rounded-lg font-bold border-2 bg-pinky hover:no-underline"
                >
                  Send Message
                </button>
              </div>
            </div>
          </button>

          <div className="flex gap-8 static sm:absolute sm:right-6 sm:flex-col py-0 flex-row justify-center items-center">
            <div className="flex text-white lg:mt-0 mt-6 mb-0 flex-col gap-0">
              <p className="m-0 p-0 flex flex-row items-center gap-3">
                <FaPhoneAlt fill="white" />
                tahaamindob2013@gmail.com
              </p>
              <p className="m-0 p-0 flex flex-row items-center gap-3">
                <IoMdMail />
                +92 3074241757
              </p>
            <div className="m-0 mt-2 p-0 flex">
            </div>
              <ul className="flex flex-row gap-2">
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                  <Link href="https://www.facebook.com/" target="_blank">
                    <Facebook className="fill-white" stroke="0" size={15} />
                  </Link>
                </li>
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                  <Link href="https://twitter.com/" target="_blank">
                    <Twitter className="fill-white" stroke="0" size={15} />
                  </Link>
                </li>
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                  <Link href="https://Google.com/" target="_blank">
                    <FaGooglePlusG
                      className="fill-white"
                      stroke="0"
                      size={15}
                    />
                  </Link>
                </li>
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                  <Link href="https://Linkedin.com/" target="_blank">
                    <FaLinkedinIn className="fill-white" stroke="0" size={15} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
    </SectionContainer>
  );
};
export default Contact;
