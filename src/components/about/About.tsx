import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-6">
              Learn More About Almaas Family Home Childcare
            </h2>
            <p className="text-gray-600 mb-6">
              At Almaas Family Home Childcare, our mission is to provide a
              nurturing, safe, and educational environment for children to grow
              and thrive. Located in Covington, WA, we are dedicated to
              fostering a love for learning and a sense of community among our
              children and families.
            </p>
            <p className="text-gray-600 mb-8">
              We believe in the importance of early childhood education and aim
              to offer innovative and affordable childcare. Our
              experienced and caring staff are committed to providing the
              highest quality of care for children from newborn to school age,
              ensuring a positive and enriching experience for every child.
            </p>
            <p className="text-gray-600 mb-8">
              Contact us today at (206)934-9581 to schedule a tour of our
              facility and learn more about how we can support your child&apos;s
              development and well-being.
            </p>
            <div className="flex items-center">
              <Link href="/about" className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300">
                Read More
              </Link>
            </div>
          </div>

          {/* Image collage */}
          <div className="lg:w-1/2 relative mt-5 lg:mt-0">
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 rounded-full overflow-hidden">
                <Image
                  src="/image1.jpeg"
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute top-1/2 left-0 w-48 h-48 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/aboutImg1.jpeg"
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute top-1/2 right-0 w-48 h-48 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/image3.jpeg"
                  alt="Image 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
