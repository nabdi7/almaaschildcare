import React from "react";
import Cta from "../cta/Cta";

const ProgramsPage = () => {
  return (
    <>
    <section>
      <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
        <div className="w-full md:w-1/2 relative overflow-hidden h-64 md:h-auto">
          <img
            src="/school.jpg"
            alt="Child painting"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full md:w-1/2 bg-purple-900 text-white p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-sm leading-relaxed">
            We provide a balanced approach to learning so that every child has
            the opportunity to learn and grow. Each activity is designed with a
            special lesson in mind. Our goal at Creative Care Childrena&apos;s School
            is to provide a curriculum that focuses on every child&apos;s social,
            cognitive, oral language, and physical development. Creating a
            life-long love for learning and strong self-esteem.
          </p>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-gray-800 text-white rounded-lg p-8 md:w-1/2 flex flex-col justify-center items-center text-center">
            <img
              src="/school.jpg"
              alt="Child painting"
              className="w-full h-58 object-cover object-center"
            />
          </div>

          <div className="md:w-1/2">
            <div className="mb-8">
              <h4 className="text-xl font-semibold flex items-center mb-2">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Childcare Services
              </h4>
              <p className="text-gray-600">
                We offer a range of childcare services, including full-time and
                part-time care, before and after-school programs, and summer
                camps. Our programs are designed to meet the unique needs of
                each child, with a focus on social, emotional, physical, and
                cognitive development. We offer a variety of education programs
                to help children develop the skills they need to succeed in
                school and in life. Our programs include early literacy, math,
                science, art, music, and more. We also provide homework help and
                tutoring for school-age children.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
        <div className="w-full md:w-1/2 relative overflow-hidden h-64 md:h-auto">
          <img
            src="/school.jpg"
            alt="Child painting"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full md:w-1/2 bg-purple-900 text-white p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-sm leading-relaxed">
            We provide a balanced approach to learning so that every child has
            the opportunity to learn and grow. Each activity is designed with a
            special lesson in mind. Our goal at Creative Care Children&apos;s School
            is to provide a curriculum that focuses on every child&apos;s social,
            cognitive, oral language, and physical development. Creating a
            life-long love for learning and strong self-esteem.
          </p>
        </div>
      </div>
    </section>
    <Cta />
    </>
  );
};

export default ProgramsPage;
