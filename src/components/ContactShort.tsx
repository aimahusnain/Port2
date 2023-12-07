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

  return (
    <form className="contactform flex ml-4 mb-6" onSubmit={onFormSubmit}>
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
              rows={2}
            />

            <span className="input-focus-effect bg-boo relative top-[77px]" />
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

          <div className="flex gap-8 static sm:absolute sm:right-6 sm:flex-row py-0 flex-col justify-center items-center">
            <div className="flex text-white lg:mt-0 mt-6 flex-col">
              <p className="m-0 p-0 flex flex-row items-center gap-3">
                <FaPhoneAlt fill="white" />
                tahaamindob2013@gmail.com
              </p>
              <p className="m-0 p-0 flex flex-row items-center gap-3">
                <IoMdMail />
                +92 3074241757
              </p>
            </div>
            <div>
              <ul className="flex flex-row gap-2 ">
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                  <Link href="#">
                    <Facebook className="fill-white" stroke="0" size={15} />
                  </Link>
                </li>
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                  <Link href="#">
                    <Twitter className="fill-white" stroke="0" size={15} />
                  </Link>
                </li>
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                  <Link href="#">
                    <FaGooglePlusG
                      className="fill-white"
                      stroke="0"
                      size={15}
                    />
                  </Link>
                </li>
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                  <Link href="#">
                    <FaLinkedinIn className="fill-white" stroke="0" size={15} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
