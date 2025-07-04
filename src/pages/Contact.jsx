import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import Footer from "../components/Footer/Footer";
import SendButton from "../components/SendButton";

function Contact() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        // console.log("Success", res);
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 2000);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (value) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(value)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    validateEmail(emailValue);
  };

  return (
    <section
      id="contact"
      className="flex lg:min-h-[90vh] sm:min-h-auto p-10 items-center justify-between flex-col bg-orange-100 lg:w-[1000px] m-auto"
    >
      <div className="w-full flex lg:flex-row flex-col justify-around relative py-10">
        <div className="flex flex-col transform scale-110 mb-8 lg:mb-0">
          <h1 className="text-[#212121] text-center lg:text-left text-3xl font-bold tracking-wide mb-5">
            Contact
          </h1>
          <div className="m-auto lg:m-0">
            <div className="flex gap-3 items-center m-auto lg:m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4 text-[#212121]-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                ></path>
              </svg>
              <a
                href="mailto:riktamrdxnandi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#212121] font-medium tracking-wide"
              >
                riktamrdxnandi@gmail.com
              </a>
            </div>
            <div className="flex gap-3 items-center lg:m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4 text-[#212121]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                ></path>
              </svg>
              <a
                href="tel:+91-8637382898"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#212121] tracking-wide font-medium"
              >
                +91 8637382898
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-3">
            <input
              className="lg:w-[500px] h-[50px] font-medium rounded-lg border-[1px] border-[#212121] outline-hidden bg-orange-200 pl-4 placeholder-gray-600 placeholder:font-medium"
              type="text"
              name="name"
              placeholder="Name*"
              required
            />
            <input
              className="lg:w-[500px] h-[50px] font-medium rounded-lg border-[1px] border-[#212121] outline-hidden bg-orange-200 pl-4 placeholder-gray-600 placeholder:font-medium"
              type="email"
              name="email"
              placeholder="Email*"
              required
              onChange={handleEmailChange}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <textarea
              className="lg:w-[500px] h-[140px] font-medium rounded-lg border-[1px] border-[#212121] outline-hidden bg-orange-200 p-4 placeholder-gray-600 placeholder:font-medium"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <SendButton sent={sent} disabled={disabled} loading={loading} />
          </div>
        </form>

        {/* Social link for mobile screen */}
        <div className="flex gap-3 m-auto mt-7 lg:hidden">
          <a
            href="https://www.linkedin.com/in/riktam-nandi-1a0449319/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-orange-300 rounded-full w-[35px] h-[35px]"
          >
            <FaLinkedin className="text-orange-300 text-xl" />
          </a>
          <a
            href="https://github.com/rdxnandi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-orange-300 rounded-full w-[35px] h-[35px]"
          >
            <FaGithub className="text-orange-300 text-xl" />
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="flex items-center justify-center border-2 border-orange-300 rounded-full w-[35px] h-[35px]"
          >
            <FaSquareXTwitter className="text-orange-300 text-xl" />
          </a>
          <a
            href="https://www.frontendmentor.io/profile/rdxnandi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border-2 border-orange-300 rounded-full w-[35px] h-[35px]"
          >
            <SiFrontendmentor className="text-orange-300 text-xl" />
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
