import React from "react";

const WhyChoose = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          Giving Your Child the Best Start in Life
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-700 mb-10 sm:mb-10 md:mb-16">
          Why Choose Almaas Family Childcare for Your Little One
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="/image1.jpeg"
              alt="Passionate and Qualified Educators"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-medium">
              Passionate and Qualified Educators
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/image2.jpeg"
              alt="Individualized Learning Approaches"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-medium">
              Individualized Learning Approaches
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/image3.jpeg"
              alt="Social and Emotional Development"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-medium">
              Social and Emotional Development
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
