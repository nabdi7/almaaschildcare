import React from "react";
import Cta from "../cta/Cta";

const Aboutpage = () => {
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
          About Us
          <div className="w-20 h-1 bg-white mx-auto mb-5 mt-2"></div>
        </h2>
      </div>
      <section className="py-8 lg:py-16">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <h2 className="text-3xl font-bold text-center sm:text-4xl md:leading-tight mb-4">
            Almaas Family Home Childcare
          </h2>
          <p className="text-gray-600 text-center pb-5 mb-12 max-w-3xl mx-auto">
            Almaas Family Home Childcare is a licensed family home childcare
            located in Covington, WA. We provide a safe, nurturing environment
            for children to learn, grow, and thrive. Our program is designed to
            meet the unique needs of each child, with a focus on social,
            emotional, physical, and cognitive development. We believe that
            every child is a unique individual, and we are committed to helping
            them reach their full potential. Our goal is to create a warm and
            welcoming environment where children feel safe, loved, and supported
          </p>

          <div className="flex flex-col md:flex-col lg:flex-row gap-8">
            <div className="bg-gray-800 text-white rounded-lg p-8 md:w-full lg:w-1/2 h-[26rem] flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="max-w-md md:max-w-2xl lg:max-w-md">
                Our mission is to provide high-quality, affordable childcare
                services to families in the Seattle area. We are committed to
                creating a safe, nurturing environment where children can learn,
                grow, and thrive. We believe that every child deserves the best
                possible start in life, and we are dedicated to helping them
                reach their full potential.
              </p>
            </div>

            <div className="md:w-full lg:w-1/2">
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
                  We offer a range of childcare services, including full-time
                  and part-time care, before and after-school programs, and
                  summer camps. Our programs are designed to meet the unique
                  needs of each child, with a focus on social, emotional,
                  physical, and cognitive development
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold flex items-center mb-2">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Education Programs
                </h4>
                <p className="text-gray-600">
                  We offer a variety of education programs to help children
                  develop the skills they need to succeed in school and in life.
                  Our programs include early literacy, math, science, art,
                  music, and more. We also provide homework help and tutoring
                  for school-age children.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold flex items-center mb-2">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Support Services
                </h4>
                <p className="text-gray-600">
                  We offer a range of support services to help families navigate
                  the challenges of parenting. Our services include parenting
                  classes, counseling, and referrals to community resources. We
                  are here to help families thrive and succeed.
                </p>
              </div>
              {/* hours of operations */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold flex items-center mb-2">
                  Hours of Operation
                </h4>
                <p className="text-gray-600">
                  Monday - Friday: 5:00 am - 9:00 pm
                  <br />
                  Saturday - Sunday: 5:00 am - 9:00 pm
                </p>
              </div>
              {/* Application and Parent Handbook */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold flex items-center mb-2">
                  Application and Parent Handbook
                </h4>
                <p className="max-w-xl text-gray-600">
                  For information on enrollment, our parent handbook, and
                  policies, please check below.
                </p>
                <div className="flex flex-col mt-2">
                  <a
                    href="/application.pdf"
                    target="_blank"
                    className="mt-4 text-blue-600 hover:underline  "
                  >
                    Enrollment Application (PDF)
                  </a>
                  <br />
                  <a
                    href="/childcareAgreement.pdf"
                    target="_blank"
                    className="mt-0 text-blue-600 hover:underline "
                  >
                    Childcare Agreement (PDF)
                  </a>
                  <br />
                  <a
                    href="/immunization.pdf"
                    target="_blank"
                    className=" text-blue-600 hover:underline "
                  >
                    Immunization (PDF)
                  </a>
                  <br />
                  <a
                    href="/handbook.pdf"
                    target="_blank"
                    className=" text-blue-600 hover:underline "
                  >
                    Parent Handbook (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default Aboutpage;
