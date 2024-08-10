"use client";
import React, { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "./index";

interface ContactFormState {
  formSubmitted: boolean;
  contactMessage: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}

const Contact = () => {
  const [state, setState] = useState<ContactFormState>({
    formSubmitted: false,
    contactMessage: "",
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_APP_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_APP_TEMPLATE_ID ?? "",
        formRef.current!,
        process.env.NEXT_PUBLIC_APP_USER_ID ?? ""
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setState((prevState) => ({
            ...prevState,
            formSubmitted: true,
            contactMessage: "Successful. We'll get back to you shortly!",
          }));
          setTimeout(() => {
            setState((prevState) => ({
              ...prevState,
              contactMessage: "",
              user_name: "",
              user_phone: "",
              user_email: "",
              message: "",
              formSubmitted: false,
            }));
          }, 1000);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <>
      <div
        className="py-14 lg:py-16 text-center bg-gray-800"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-semibold text-white sm:text-3xl mb-10">
          Contact Us
          <div className="w-20 h-1 bg-white mx-auto mb-5 mt-2"></div>
        </h2>
      </div>
      <section className="px-6 py-8 lg:py-16 ">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-4 text-3xl lg:text-5xl font-bold text-blue-gray-700 text-center">
            We&apos;re Here to Help
          </h1>
          <p className="mb-10 font-normal text-lg lg:mb-20 mx-auto max-w-3xl text-gray-500 text-center">
            Whether it&apos;s a question about our services, a request for a
            tour, please get in touch with us.
          </p>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <div className="grid w-full h-full lg:max-h-[510px]">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-x-7 py-6">
                  {info.icon}
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800">
                      {info.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{info.content}</p>

                    <a
                      className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                      href="#"
                    >
                      Contact support
                      <svg
                        className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 lg:max-w-lg "
            >
              <div>
                <p className="mb-2 text-left font-medium text-gray-900">Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  value={state.user_name}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      user_name: e.target.value,
                    }))
                  }
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
                />
              </div>
              <div>
                <p className="mb-2 text-left font-medium text-gray-900">
                  Phone
                </p>
                <input
                  type="tel"
                  placeholder="Phone"
                  name="user_phone"
                  value={state.user_phone}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      user_phone: e.target.value,
                    }))
                  }
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
                />
              </div>
              <div>
                <p className="mb-2 text-left font-medium text-gray-900">
                  Email
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  value={state.user_email}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      user_email: e.target.value,
                    }))
                  }
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
                />
              </div>
              <div>
                <p className="mb-2 text-left font-medium text-gray-900">
                  Message
                </p>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Message"
                  value={state.message}
                  onChange={(e) =>
                    setState((prevState) => ({
                      ...prevState,
                      message: e.target.value,
                    }))
                  }
                  required
                  className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
                />
              </div>
              {state.formSubmitted && (
                <p className="text-green-600">{state.contactMessage}</p>
              )}
              <button
                type="submit"
                className="w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-[85rem] py-10 lg:py-14 mx-auto mt-20 mb-10">
          <iframe
            title="map"
            className="w-full h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10808.783105947387!2d-122.1280788!3d47.3690973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905f1967c7aaa7%3A0xf4355668dfba3d39!2sAlmaas%20Family%20Childcare!5e0!3m2!1sen!2sus!4v1722144846553!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
