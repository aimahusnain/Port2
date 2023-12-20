import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
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

  const validateEmail = (email: string): boolean => {
    // Regular expression to validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateInput = (fieldName: string, value: string): string | undefined => {
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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const errorMessage = validateInput(name, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: FormErrors = {};

    Object.keys(formData).forEach((fieldName) => {
      const errorMessage = validateInput(fieldName, formData[fieldName]);
      if (errorMessage) {
        errors[fieldName] = errorMessage;
      }
    });

    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      triggerEmail(formData);
    } else {
      setFormErrors(errors);
    }
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
              id="email"
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
            className="text-white dark:text-black block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onBlur={handleBlur}
            onChange={handleInputChange}
            id="message"
            className={`bg-[#18191E] resize-none dark:bg-[#f3f3f3] border border-[#33353F] placeholder-[#9CA2A9] dark:placeholder-[#474444] text-zinc-100 dark:text-black text-sm rounded-lg block w-full p-2.5 ${
              formErrors.message ? "border-red-500" : ""
            }`}
            placeholder="Let's talk about..."
          />
          {formErrors.message && (
            <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          aria-label="Send Message for Homepage"
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
