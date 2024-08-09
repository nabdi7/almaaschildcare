import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <section
      className="py-28 relative mt-16 sm:py-32 bg-gray-800"
      style={{
        // backgroundColor: `gray`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="custom-screen relative z-10 max-w-screen-xl mx-auto  text-center md:text-center px-8 md:px-8">
        <div className="max-w-xl md:mx-auto">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            Register your child now!
          </h3>
          <p className="text-blue-100 mt-3">
            We are here to provide a safe and nurturing environment for your child.
          </p>
        </div>
        <div className="mt-4">
          <Link href='/contact' className="btn-secondary"> Contact us </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
