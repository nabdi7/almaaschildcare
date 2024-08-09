import React from "react";
import Link from "next/link";

const Footer = () => {
  const footerNavs = [
    { href: "/about", name: "About" },
    { href: "/programs", name: "Programs" },
    { href: "/contact", name: "Contact" },
    { href: "/contact", name: "Enroll" },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center text-center md:text-centerr">
          <img
            src="/almaas.png"
            className="w-32 mx-auto sm:mx-auto "
            alt="Almaas Logo"
          />
          <p>
            <a
              href="https://maps.app.goo.gl/VpuvEEwt4wRMAWry7"
              target="_blank"
              rel="noopener noreferrer"
            >
              25921 161st CT SE, Covington, WA 98042, US
            </a>
          </p>

          <p>
            <a href="mailto:haymuunchildcare22@gmail.com">
              haymuunchildcare22@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+12069349581">(206) 934-9581</a>
          </p>
        </div>
        <div className="mt-10 py-10 border-t flex flex-col items-center sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Almaas Family Home Childcare</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerNavs.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-800 hover:text-gray-500 duration-150"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* made by */}
        <div className="text-center text-gray-600 py-4 mb-5">
          <p>
            Made by{" "}
            <a
              href="https://qualitydesigns.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              QD Web Designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
