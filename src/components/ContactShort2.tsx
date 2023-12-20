import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  email: string;
}

interface FormErrors {
  email?: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const triggerEmail = async (data) => {
    await emailjs
      .send("service_doy4axr", "template_0yd6gu7", data, "gDiiIsHO-vSM4wYX6")
      .then((success) => {
        console.log("message go Successfully!")

        setFormData({
          email: "",
        });
      })
      .catch((err) => {
        console.log("message cannot go Successfully!")

        console.log(err);
      });
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = formData;
    const errors: FormErrors = {};

    if (!email) {
      errors.email = true;
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
      <form className="flex w-full items-center" onSubmit={onFormSubmit}>
        <div className="flex sm:flex-row flex-col sm:gap-7 gap-0 w-full">
          <div className="w-full">
            
            <input
              id="emailfield2"
              type="email"
              placeholder="Enter your Email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              required
              className="bg-[#18191E] dark:text-black dark:bg-[#f3f3f3] border border-[#33353F] placeholder-[#9CA2A9] dark:placeholder-[#474444] text-zinc-100 text-sm w-64 p-3"
            />
          </div>
        </div>

        <button
          aria-label="Send Message for footer"
          type="submit"
          className="bg-boo-700 dark:bg-black hover:text-black transition-color dark:hover:bg-teal-300 px-5 h-fit  hover:bg-boo-800 transition-all duration-150 text-white font-medium py-2.5 w-full"
        > Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
