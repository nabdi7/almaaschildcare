import React from "react";

const Hero = () => {
  return (
    <section>
      <div
        className="w-full bg-center bg-cover h-[38rem]"
        style={{ backgroundImage: "url('/background1.jpg')" }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/45">
          <div className="text-center space-y-4">
            <p className="inline-block text-xl md:text-2xl font-medium bg-clip-text bg-teal-500 text-transparent">
              A beautiful place to grow.
            </p>
            <h1 className="text-gray-200 font-bold text-4xl md:text-6xl">
              Almaas Family Home {""}
              <span className="text-pink-600"> Childcare</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
              A trusted and reliable family childcare provider,
              offering a safe and nurturing environment for children in
              Covington, WA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
