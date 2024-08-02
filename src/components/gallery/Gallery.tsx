import React from "react";

export const Gallery = () => {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1> Gallery </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
