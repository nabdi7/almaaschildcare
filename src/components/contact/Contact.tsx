import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className="py-14 lg:py-16 text-center"
        style={{
          backgroundImage: `url('/image1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 sm:text-3xl mb-10">
          Contact Us
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-5 mt-2"></div>
        </h2>
      </div>
      <section className="px-8 py-8 lg:py-16">
        <div className="max-w-6xl  mx-auto ">
          <h1 className="mb-4 text-3xl lg:text-5xl font-bold text-blue-gray-700 text-center">
            Were Here to Help
          </h1>
          <p className="mb-10 font-normal text-lg lg:mb-20 mx-auto max-w-3xl text-gray-500 text-center">
            Whether its a question about our services, a request for a tour,
            please get in touch with us.
          </p>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <div className="grid w-full h-full lg:max-h-[510px]">
              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 mt-1.5 text-gray-800 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>

                <div className="grow">
                  <h3 className="font-semibold text-gray-800 ">Address</h3>
                  <p className="mt-1 text-sm text-gray-500 ">
                    25921 161st CT SE Covington, WA 98042 United States
                  </p>
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 mt-1.5 text-gray-800 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>

                <div className="grow">
                  <h3 className="font-semibold text-gray-800 ">Phone Number</h3>
                  <p className="mt-1 text-sm text-gray-500 ">(206) 934-9581</p>
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <svg
                  className="shrink-0 size-6 mt-1.5 text-gray-800 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                </svg>

                <div className="grow">
                  <h3 className="font-semibold text-gray-800 ">
                    Email Address
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 ">
                    haymuunchildcare22@gmail.com
                  </p>
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <form action="#" className="flex flex-col gap-4 lg:max-w-sm">
              <div className="">
                <div>
                  <p className="mb-2 text-left font-medium text-gray-900">
                    Name
                  </p>
                  <input
                    type="text"
                    placeholder="Name"
                    name="first-name"
                    className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
                  />
                </div>
              </div>
              <div>
                <p className="mb-2 text-left font-medium text-gray-900">
                  Phone
                </p>
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
                />
              </div>
              <div>
                <p className="mb-2 text-left font-medium text-gray-900">
                  Email
                </p>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
                />
              </div>
              <div>
                <p className="mb-2 text-left font-medium text-gray-900">
                  Message
                </p>
                <textarea
                  rows={6}
                  placeholder="Message"
                  name="message"
                  className="w-full border border-gray-300 p-2 rounded focus:border-gray-900"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 mb-20">
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
