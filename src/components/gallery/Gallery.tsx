import React from "react";

export const Gallery = () => {
  return (
    <section className="max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8 lg:py-20 mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center py-5 mb-10">
          Our Gallery
        </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pb-14">
        <div className="group block relative overflow-hidden rounded-lg">
          <img
            className="w-full size-80 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
            src="image1.jpeg"
            alt="Project"
          />
        </div>

        <div className="group block relative overflow-hidden rounded-lg">
          <img
            className="w-full size-80 object-cover bg-gray-100 rounded-lg "
            src="image2.jpeg"
            alt="Project"
          />
        </div>

        <div className="group block relative overflow-hidden rounded-lg">
          <img
            className="w-full size-80 object-cover bg-gray-100 rounded-lg "
            src="image3.jpeg"
            alt="Project"
          />
        </div>

        <div className="group block relative overflow-hidden rounded-lg">
          <img
            className="w-full size-80 object-cover bg-gray-100 rounded-lg "
            src="image4.jpg"
            alt="Project"
          />
        </div>

        <div className="group block relative overflow-hidden rounded-lg">
          <img
            className="w-full size-80 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
            src="image5.jpg"
            alt="Project"
          />
        </div>

        <div className="group block relative overflow-hidden rounded-lg">
          <img
            className="w-full size-80 object-cover bg-gray-100 rounded-lg "
            src="kid5.jpeg"
            alt="Project"
          />
        </div>
      </div>
    </section>
  );
};
