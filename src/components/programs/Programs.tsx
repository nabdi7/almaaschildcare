import React from "react";

const Programs = () => {
  return (
    <section>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
          <div 
              className="h-52 flex flex-col justify-center items-center rounded-t-xl bg-cover bg-center"
              style={{ backgroundImage: "url('infant.jpg')" }}
            >
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
              18 mo to 2 years
              </span>
              <h3 className="text-xl font-semibold text-gray-800">Infant Program</h3>
              <p className="mt-3 text-gray-500">
              Our infant program provides a nurturing environment for children aged 18 months to 2 years, fostering early development and exploration.
              </p>
            </div>
          </div>

          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
          <div 
              className="h-52 flex flex-col justify-center items-center rounded-t-xl bg-cover bg-center"
              style={{ backgroundImage: "url('preshool.jpg')" }}
            >
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-rose-600">
              2 to 5 years
              </span>
              <h3 className="text-xl font-semibold text-gray-800">Preschool</h3>
              <p className="mt-3 text-gray-500">
              Our preschool program focuses on foundational skills and social interaction for children aged 2 to 5 years, preparing them for a smooth transition to formal education.
              </p>
            </div>
          </div>

          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
          <div 
              className="h-52 flex flex-col justify-center items-center rounded-t-xl bg-cover bg-center"
              style={{ backgroundImage: "url('school.jpg')" }}
            >
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
              5 to 12 years
              </span>
              <h3 className="text-xl font-semibold text-gray-800">School Age</h3>
              <p className="mt-3 text-gray-500">
              Our school-age program offers a stimulating environment for children aged 5 to 12 years, combining education and recreation to support their ongoing development.
              </p>
            </div>
          </div>

          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
          <div 
              className="h-52 flex flex-col justify-center items-center rounded-t-xl bg-cover bg-center"
              style={{ backgroundImage: "url('image1.jpeg')" }}
            >
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
              5 to 12 years
              </span>
              <h3 className="text-xl font-semibold text-gray-800">Other Programs</h3>
              <p className="mt-3 text-gray-500">
              Explore our diverse range of programs tailored to different age groups and interests, ensuring a holistic and enriching experience for all participants.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
