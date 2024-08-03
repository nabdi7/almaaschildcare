import React from "react";

const ProgramsPage = () => {
  return (
    <section>
      <div
        className="py-14 lg:py-16 text-center"
        style={{
          backgroundImage: `url('/image1.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 sm:text-3xl mb-10">
          Programs
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-5 mt-2"></div>
        </h2>
      </div>
    </section>
  );
};

export default ProgramsPage;
