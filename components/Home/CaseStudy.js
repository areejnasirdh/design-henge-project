"use client";
import React, { useRef } from "react";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function CaseStudy({ data, heading }) {
  const router = useRouter();

  return (
    <div className="home_case_study_main">
      <div className="flex flex-col justify-center items-center lg:pr-10 md:px-10 2xl:px-0 w-full pt-[60px]">
        {heading && (
          <>
            <h1 className="blueGrayHeading">
              {heading}
            </h1>

            <div className="flex space-x-3 items-center mt-3 mb-[12px]">
              <div className="border-t-4 border-red-primary w-7"></div>
              <p className="font-medium red-line-para">
                A variety of creative capabilities under one roof
              </p>
            </div>
          </>
        )}
      </div>
      <div id="case-study" className="projects pb-6">
        <div className="flex flex-col space-y-20 mx-auto max-w-[120rem] my-5">
          {/* first case study */}
          {data &&
            data.map((item, i) => {
              return (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: "0.7",
                  }}
                  key={i}
                  style={{
                    overflow: "hidden",
                  }}
                  className={`flex-col md:flex-row w-full flex justify-between items-center
                   ${i % 2 === 0 ? "" : "md:flex-row-reverse"}
                 `}
                >
                  <motion.img
                    src={item.image}
                    width={700}
                    height={700}
                    alt=""
                    className={`object-contain md:object-cover w-[100%] md:w-[50%] pr-3 overflow-hidden ${
                      i % 2 === 0 ? "lg:ml-[-10px]" : "lg:mr-[-20px]"
                    }`}
                  />

                  <motion.div
                    className={`flex flex-col space-y-4 pb-4 md:space-y-2 lg:space-y-4 overflow-hidden md:w-[50%] mx-5 mt-4 ${
                      i % 2 === 0
                        ? "px-3 md:pl-0 ml-10 w-full"
                        : "pr-3 md:pr-0 pl-[15px] md:pl-[60px] 2xl:pl-28 w-full"
                    }`}
                  >
                    <h1 className="text-blue-primary text-8xl md:text-4xl lg:text-6xl xl:text-9xl font-bebas stroke">
                      0{i + 1}
                    </h1>
                    <h2 className="font-semibold uppercase text-3xl md:text-2xl lg:text-[44px] 2xl:text-5xl font-bebas">
                      {item.heading}
                    </h2>
                    <p className="font-light xl:w-4/5 text-[15px]">
                      {item.description}
                    </p>
                    <div className="w-full flex md:block justify-center">
                      <ReusableButton
                        buttonText="SEE CASE STUDY"
                        additionalClasses="your-custom-classes"
                        type="button"
                        onClick={() => router.push(item.link)}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
