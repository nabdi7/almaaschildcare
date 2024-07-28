import React from 'react';

const Footer = () => {
  const footerNavs = [
    { href: '/about', name: 'About' },
    { href: '/programs', name: 'Programs' },
    { href: '/', name: 'Contact' },
    { href: '/', name: 'About us' }
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <img src="/almaas.png" className="w-32 sm:mx-auto" alt="Almaas Logo" />
          <p>
          25921 161st CT SE Covington, WA 98042 United States
          </p>
          <p>
            <a href="mailto:haymuunchildcare22@gmail.com">haymuunchildcare22@gmail.com</a>
          </p>
          <p>
            <a href="tel:+12069349581">(206) 934-9581</a>
          </p>
        </div>
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© {new Date().getFullYear()} Almaas Family Home Childcare</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerNavs.map((item, idx) => (
              <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* made by */}
        <div className="text-center text-gray-600 py-4 mb-5">
          <p>
            Made by{" "}
            <a
              href="www.qualitydesigns.com"
              className="text-blue-500 hover:underline"
            >QD Web Designs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
