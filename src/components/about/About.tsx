"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Text content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-6">
                Learn More About Almaas Family Home Childcare
              </h2>
              <p className="text-gray-600 mb-8">
                At Almaas Family Home Childcare, our mission is to provide a
                nurturing, safe, and educational environment for children to
                grow and thrive. Located in Covington, WA, we are dedicated to
                fostering a love for learning and a sense of community among our
                children and families.
              </p>
              <p className="text-gray-600 mb-8">
                We believe in the importance of early childhood education and
                aim to offer innovative and affordable childcare. Our
                experienced and caring staff are committed to providing the
                highest quality of care for children from newborn to school age,
                ensuring a positive and enriching experience for every child.
              </p>
              <p className="text-gray-600 mb-8">
                Contact us today at{" "}
                <a href="tel:+12069349581" className="font-bold text-teal-800">
                  (206) 934-9581
                </a>{" "}
                to schedule a tour of our facility and learn more about how we
                can support your child&apos;s development and well-being.
              </p>
              <div className="flex items-center">
                <Link href="/about" className="btn-secondary">
                  Read More
                </Link>
              </div>
            </motion.div>
          </div>
          {/* About image */}

          <div className="lg:block lg:max-w-xl lg:mt-0 mt-6 flex  w-full h-96 lg:w-full">
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
              <div className="lg:block lg:max-w-xl lg:mt-0 mt-6 flex  w-full h-96 lg:w-full">
                <Image
                  src="https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317248/image1_cdgx9e.jpg"
                  className="object-cover md:w-full md:h-full md:max-w-3xl rounded-lg"
                  alt="about-image"
                  width={500}
                  height={500}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
