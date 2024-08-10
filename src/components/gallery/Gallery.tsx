import React from "react";
import Image from "next/image";

export const Gallery = () => {
  return (
    <section className="max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8 lg:py-20 mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center py-5 mb-10">
          Our Gallery
        </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pb-14">
        <div className="group block relative overflow-hidden rounded-lg">
          <Image
            className="w-full size-80 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
            src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317250/kid4_qpmdih.jpg"
            alt="Project"
            width={500}
            height={500}
          />
        </div>

        <div className="group block relative overflow-hidden rounded-lg">
          <Image
            className="w-full size-80 object-cover bg-gray-100 rounded-lg "
            src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317249/image2_qu6iec.jpg"
            alt="Project"
            width={500}
            height={500}
          />
        </div>

        <div className="group block relative overflow-hidden rounded-lg">
          <Image
            className="w-full size-80 object-cover bg-gray-100 rounded-lg "
            src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317250/kid2_chsiey.jpg"
            alt="Project"
            width={500}
            height={500}
          />
        </div>

        <div className="group block relative overflow-hidden rounded-lg">
          <Image
            className="w-full size-80 object-cover bg-gray-100 rounded-lg "
            src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317249/image4_bts9wp.jpg"
            alt="Project"
            width={500}
            height={500}
          />
        </div>

        <div className="group block relative overflow-hidden rounded-lg">
          <Image
            className="w-full size-80 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
            src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317249/image5_lrquyn.jpg"
            alt="Project"
            width={500}
            height={500}
          />
        </div>

        <div className="group block relative overflow-hidden rounded-lg">
          <Image
            className="w-full size-80 object-cover bg-gray-100 rounded-lg "
            src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317250/kid5_vzbcf0.jpg"
            alt="Project"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
