import React from "react";

const Hero = () => {
  return (
    <section>
      <div
        className="w-full bg-center bg-cover h-[38rem]"
        style={{ backgroundImage: "url('/background1.jpg')" }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center space-y-4">
            <p className="inline-block text-2xl font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              A beautiful place to grow.
            </p>
            <h1 className="text-gray-200 font-bold text-4xl md:text-5xl">
              Almaas Family Home {""}
              <span className="text-indigo-600"> Childcare</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
