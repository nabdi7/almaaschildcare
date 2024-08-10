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
                services to families in the Covington area. We are committed to
                creating a safe, nurturing environment where children can grow
                and thrive. We believe that every child deserves the best
                possible care, and we are dedicated to helping them feel secure
                and loved.
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
                  Our Values
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>
                    {" "}
                    <strong>Trust:</strong> We prioritize building trust with
                    families and children, ensuring a safe and reliable
                    environment.
                  </li>
                  <li>
                    {" "}
                    <strong>Care:</strong> Providing compassionate and attentive
                    care is our core commitment, where every child is valued.
                  </li>
                  <li>
                    {" "}
                    <strong>Community:</strong> We foster a sense of belonging
                    and community, creating a supportive network for children
                    and their families.
                  </li>
                  <li>
                    {" "}
                    <strong>Growth:</strong> We emphasize the social and
                    emotional development of each child, helping them thrive in
                    a nurturing environment.
                  </li>
                </ul>
              </div>

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
                  needs of each child, with a focus on social, emotional, and
                  physical development.
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
                  We provide resources to help families navigate the challenges
                  of parenting. Our offerings include access to parenting
                  resources, connections to community services, and a nurturing
                  environment where children can grow and thrive. Our goal is to
                  support families in creating a nurturing environment for their
                  children.
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
