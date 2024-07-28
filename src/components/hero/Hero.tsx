import React from "react";

const Hero = () => {
  return (
    <section>
      <div
        className="w-full bg-center bg-cover h-[38rem]"
        style={{ backgroundImage: "url('/background1.jpg')" }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
          <p className="inline-block text-2xl font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          A beautiful place to grow.
        </p>
            <h1 className="block font-bold text-gray-800 text-5xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Almaas Family Home {""}
              <span className="bg-clip-text text-blue-400 ">
                Childcare
              </span>
            </h1>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
