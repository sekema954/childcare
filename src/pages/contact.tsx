import RegisterChildForm from "../components/gettingStartedForm";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormProp {
  name: string;
  email: string;
  message: string;
}

interface InputField {
  name: keyof FormProp;
  type: string;
  placeholder: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormProp>({
    name: "",
    email: "",
    message: ""
  });

  const inputs: InputField[] = [
    {
      name: "name",
      type: "text",
      placeholder: "Your Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Your Email",
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add integration with Formspree, EmailJS, or backend here
  };

  return (
    <section className="mt-16 py-10">
      {/* Hero */}
      <header className="bg-[#8F36FF] min-h-[400px] flex items-center justify-center text-white text-center px-4">
        <div className="flex flex-col gap-10 max-w-3xl">
          <h1 className="text-[40px] font-medium">Contact Us Today</h1>
          <p className="text-[20px] font-light">
            There are a lot of ABA therapy providers in the market to choose from whether you are in need of services or looking for the next opportunity in your career path. We look forward to speaking with you to learn more about us in determining if ABA Home Therapy is right for your child or your career.            
          </p>
        </div>
      </header>

      {/* Divider */}
      <div className="bg-[#3D9FFA] w-[20%] h-[20px] mx-auto my-10 rounded-full"></div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-[#8F36FF] text-center mb-6">Send Us a Message</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            {inputs.map((input) => (
              <input
                key={input.name}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={formData[input.name]}
                onChange={handleChange}
                className="border border-gray-400 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#8F36FF]"
              />
            ))}
          </div>

          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-400 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#8F36FF]"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#8F36FF] text-white px-8 py-3 rounded-full hover:bg-[#6d29cc] transition"
            >
              Submit Message
            </button>
          </div>
        </form>
      </div>

      {/* CTA Form */}
      <div className="mt-16">
        <RegisterChildForm />
      </div>
    </section>
  );
};

export default Contact;
