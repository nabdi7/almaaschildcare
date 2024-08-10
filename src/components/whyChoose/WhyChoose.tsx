"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyChoose = () => {
  return (
    <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white text-center relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover z-0"
        style={{
          backgroundImage: "url('/about-bg.png')",
          opacity: 0.4,
        }}
      ></div>
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
          Giving Your Child the Best Start in Life
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-700 mb-10 sm:mb-10 md:mb-16">
          Why Choose Almaas Family Childcare for Your Little One
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <Image
                src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317248/image1_cdgx9e.jpg"
                alt="Passionate and Qualified Educators"
                className="rounded-lg mb-4 w-full h-48 object-cover"
                width={500}
                height={500}
              />
              <h3 className="text-lg font-medium">
                Passionate and Qualified Staff
              </h3>
            </div>
          </motion.div>
          <div className="flex flex-col items-center">
            <Image
              src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317249/image2_qu6iec.jpg"
              alt="Individualized Learning Approaches"
              className="rounded-lg mb-4 w-full h-48 object-cover"
              width={500}
              height={500}
            />
            <h3 className="text-lg font-medium">
              Individualized Care Approaches
            </h3>
          </div>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
              },

              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <Image
                src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317249/image3_jw5khk.jpg"
                alt="Social and Emotional Development"
                className="rounded-lg mb-4 w-full h-48 object-cover"
                width={500}
                height={500}
              />
              <h3 className="text-lg font-medium">
                Social and Physical Development
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
