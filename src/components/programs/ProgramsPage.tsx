import React from "react";
import Cta from "../cta/Cta";

const ProgramsPage = () => {
  return (
    <>
      
        <div
          className="py-14 lg:py-16 text-center bg-gray-800"
          style={{
            // backgroundImage: `url('/image1.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-3xl font-semibold text-white sm:text-3xl mb-10">
            Our Programs
            <div className="w-20 h-1 bg-white mx-auto mb-5 mt-2"></div>
          </h2>
        </div>
        <section className="py-8 lg:py-16">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-800 text-white rounded-lg p-8 md:w-1/2 flex flex-col justify-center items-center text-center">
              <img
                src="/infant.jpg"
                alt="Child painting"
                className="w-full h-58 object-cover object-center rounded-md"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <div>
                <h4 className="text-xl font-semibold flex items-center mb-2">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Infant Care
                </h4>
                <p className="text-gray-600">
                  Our infant care program is designed to provide a safe and
                  nurturing environment for babies from six weeks to 18 months
                  old. Our experienced caregivers provide individualized care
                  and attention to each child, helping them develop the skills
                  they need to thrive. We offer a variety of activities to
                  promote social, emotional, physical, and cognitive
                  development, including tummy time, sensory play, music, and
                  more. We also provide daily reports to keep parents informed
                  about their child&apos;s day.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex flex-col justify-center order-2 md:order-1">
              <div>
                <h4 className="text-xl font-semibold flex items-center mb-2">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Preschool Care
                </h4>
                <p className="text-gray-600">
                  Our preschool care program is designed to help children ages
                  18 months to five years old develop the skills they need to
                  succeed in school and in life. Our experienced teachers
                  provide a nurturing and stimulating environment where children
                  can learn and grow. We offer a variety of activities to
                  promote social, emotional, physical, and cognitive
                  development, including early literacy, math, science, art,
                  music, and more. We also provide daily reports to keep parents
                  informed about their child&apos;s day.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 text-white rounded-lg p-8 md:w-1/2 flex flex-col justify-center items-center text-center order-1 md:order-2">
              <img
                src="/preshool.jpg"
                alt="Child painting"
                className="w-full h-58 object-cover object-center rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-gray-800 text-white rounded-lg p-8 md:w-1/2 flex flex-col justify-center items-center text-center">
              <img
                src="/school.jpg"
                alt="Child painting"
                className="w-full h-58 object-cover object-center rounded-md"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <div>
                <h4 className="text-xl font-semibold flex items-center mb-2">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  School-Age Care
                </h4>
                <p className="text-gray-600">
                  Our school-age care program is designed to provide a safe and
                  nurturing environment for children ages five to 12 years old
                  before and after school. Our experienced teachers provide
                  homework help, tutoring, and enrichment activities to help
                  children succeed in school and in life. We offer a variety of
                  activities to promote social, emotional, physical, and
                  cognitive development, including art, music, science, math,
                  literacy, and more. We also provide healthy snacks and
                  opportunities for physical activity to keep children healthy
                  and active.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default ProgramsPage;
