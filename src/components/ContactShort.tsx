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

  return (
    // <form className="contact-short bg-green-500 flex justify-between items-center" onSubmit={onFormSubmit}>
    //   <div className="w-full">
    //     <div className="flex flex-row gap-4 w-full">
    //     <div className="col-md-6">
    //       <div className="form-group">
    //         <input
    //           id="name"
    //           name="name"
    //           onChange={handleInputChange}
    //           value={formData.name}
    //           type="text"
    //           placeholder="Name"
    //           className="validate form-control"
    //           required
    //         />
    //         <span className="input-focus-effect bg-boo" />
    //       </div>
    //     </div>

    //     <div className="col-md-6">
    //       <div className="form-group">
    //         <input
    //           id="email"
    //           type="email"
    //           placeholder="Email"
    //           name="email"
    //           onChange={handleInputChange}
    //           value={formData.email}
    //           className="validate form-control"
    //           required
    //         />
    //         <span className="input-focus-effect bg-boo" />
    //       </div>
    //     </div>
    //     </div>

    //     <div className="col-md-12">
    //       <div className="form-group">
    //         <textarea
    //           name="message"
    //           value={formData.message}
    //           onChange={handleInputChange}
    //           placeholder="Message..."
    //           className="w-full focus:ring-0 pl-0 bg-transparent border-none border-b-2 text-[17px] text-white resize-none border-b-white focus:outline-none"
    //           style={{ borderBottom: "1px solid #ececec" }}
    //           rows={2}
    //         />

    //         <span className="input-focus-effect bg-boo relative top-[77px]" />
    //       </div>
    //     </div>

    //     <div className="flex flex-col ml-3">
    //       <button type="submit">
    //         <div id="content">
    //           <div className="flex flex-row">
    //             <button
    //               className="text-black hover:text-white border-black hover:border-white tracking-widest shadow-lg hover:shadow-xl transition-all duration-500
    //            px-4 py-2 rounded-lg font-bold border-2 bg-pinky hover:no-underline"
    //             >
    //               Send Message
    //             </button>
    //           </div>
    //         </div>
    //       </button>

    //       <div className="flex gap-8 static sm:absolute  sm:right-6 sm:flex-row py-0 flex-col justify-center items-center">
    //         <div className="flex text-white lg:mt-0 mt-6 mb-0 sm:flex-row flex-col gap-0">
    //           <div>
    //             <p className="m-0 p-0 flex flex-row items-center gap-3">
    //               <FaPhoneAlt fill="white" />
    //               tahaamindob2013@gmail.com
    //             </p>
    //             <p className="m-0 p-0 flex flex-row items-center gap-3">
    //               <IoMdMail />
    //               +92 3074241757
    //             </p>
    //           </div>
    //           <div className="m-0 mt-3 p-0 flex">
    //             <ul className="flex flex-row gap-2">
    //               <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
    //                 <Link href="https://www.facebook.com/" target="_blank">
    //                   <Facebook className="fill-white" stroke="0" size={15} />
    //                 </Link>
    //               </li>
    //               <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
    //                 <Link href="https://twitter.com/" target="_blank">
    //                   <Twitter className="fill-white" stroke="0" size={15} />
    //                 </Link>
    //               </li>
    //               <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
    //                 <Link href="https://Google.com/" target="_blank">
    //                   <FaGooglePlusG
    //                     className="fill-white"
    //                     stroke="0"
    //                     size={15}
    //                   />
    //                 </Link>
    //               </li>
    //               <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
    //                 <Link href="https://Linkedin.com/" target="_blank">
    //                   <FaLinkedinIn
    //                     className="fill-white"
    //                     stroke="0"
    //                     size={15}
    //                   />
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </form>

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
              id="name"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-zinc-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@example.com"
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
              id="email"
              type="email"
              placeholder="Email"
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
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            id="message"
            className="bg-[#18191E] border border-[#33353F] resize-none placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-boo-800 hover:bg-pinky-600 transition-all duration-150 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
