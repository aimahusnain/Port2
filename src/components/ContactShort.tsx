import { useToast } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

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
    <section id="contact" className="w-full mt-12 mb-8 flex gap-4">
      <form className="flex flex-col w-full" onSubmit={onFormSubmit}>
        <div className="flex sm:flex-row flex-col sm:gap-7 gap-0 w-full">
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
              onChange={handleInputChange}
              value={formData.name}
              required
              className="bg-[#18191E] dark:bg-[#d1d1d1] border border-[#33353F] placeholder-[#9CA2A9] dark:placeholder-[#474444] text-zinc-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6 w-full">
            <label
              htmlFor="email"
              className="text-white dark:text-black block text-sm mb-2 font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@website.com"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              required
              className="bg-[#18191E] dark:bg-[#d1d1d1] border border-[#33353F] placeholder-[#9CA2A9] dark:placeholder-[#474444] text-zinc-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white dark:text-black block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            id="message"
            className="bg-[#18191E] dark:bg-[#d1d1d1] border border-[#33353F] placeholder-[#9CA2A9] dark:placeholder-[#474444] text-zinc-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-boo-700 hover:bg-boo-800 transition-all duration-150 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
