import React from "react";
import { testimonials } from "./index";
import { Testimonials } from "../types/Testimonial";
import Image from "next/image";

const Testimonial: React.FC = () => {
  return (
    <section>
      <div className="overflow-hidden bg-gray-800 py-14 lg:py-28">
        <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 sm:mb-10 md:mb-16">
            See what parents say about us
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial: Testimonials, index: number) => (
              <div key={index} className="flex h-auto">
                <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                  <div className="flex-auto p-4 md:p-6">
                    <p className="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                    <div className="flex items-center gap-x-3">
                      <div className="shrink-0">
                        <img
                          className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                          src={testimonial.avatar}
                          alt="Testimonial profile"
                        />
                      </div>

                      <div className="grow">
                        <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                          {testimonial.name}
                        </p>
                        <a
                          className="text-xs text-gray-500 dark:text-neutral-400"
                          href={testimonial.reviewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          See on google review
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
