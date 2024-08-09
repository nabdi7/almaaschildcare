import React from "react";
import { programs } from "./index";
import { Program } from "../types/Programs";

const Programs: React.FC = () => {
  return (
    <section className="relative pb-14">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover z-0"
        style={{
          backgroundImage: "url('/program-bg.jpeg')",
          opacity: 0.8,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white py-5 mb-10">
          Our Programs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program: Program, index: number) => (
            <div key={index} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
              <div
                className="h-52 flex flex-col justify-center items-center rounded-t-xl bg-cover bg-center"
                style={{ backgroundImage: `url('${program.image}')` }}
              ></div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                  {program.ageRange}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {program.title}
                </h3>
                <p className="mt-3 text-gray-500">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
