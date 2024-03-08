"use client";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { useState } from "react";
import link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import { useRouter } from "next/navigation";

function Product() {
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const router = useRouter();

  const handleMouseMove = (e) => {
    // for case study 1 button
    const x1 = e.pageX - btnRef1.current.offsetLeft;
    const y1 = e.pageY - btnRef1.current.offsetTop;

    btnRef1.current.style.setProperty("--x", `${x1}px`);
    btnRef1.current.style.setProperty("--y", `${y1}px`);

    // for case study 2 button
    const x2 = e.pageX - btnRef2.current.offsetLeft;
    const y2 = e.pageY - btnRef2.current.offsetTop;

    btnRef2.current.style.setProperty("--x", `${x2}px`);
    btnRef2.current.style.setProperty("--y", `${y2}px`);

    // for case study 3 button
    const x3 = e.pageX - btnRef3.current.offsetLeft;
    const y3 = e.pageY - btnRef3.current.offsetTop;

    btnRef3.current.style.setProperty("--x", `${x3}px`);
    btnRef3.current.style.setProperty("--y", `${y3}px`);
  };
  const btnRef = useRef(null);

  const handleMouseMovebutton = (e) => {
    const x = e.pageX - btnRef.current.offsetLeft;
    const y = e.pageY - btnRef.current.offsetTop;

    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div id="case-study-products" className="projects pt-14 pb-6">
      <div className="flex flex-col space-y-20 mx-auto max-w-[120rem] my-5">
        {/* first case study */}
        {cases &&
          cases.map((item, i) => {
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
               ${i % 2 === 0
                  ? ""
                  : "md:flex-row-reverse"}
             ` }
            >
              <motion.img
                src={item.image}
                width={700}
                height={700}
                alt=""
                className={`object-contain md:object-cover w-[100%] md:w-[50%] pr-3 overflow-hidden ${i % 2 === 0 ? "lg:ml-[-10px]" : "lg:mr-[-20px]"}`}
              // initial={{
              //   opacity: 0,
              //   scale: 1,
              //   x: i % 2 === 0 ? 400 : -400,
              // }}
              // whileInView={{ opacity: 1, scale: 1, x: 0 }}
              // transition={{ duration: 0.6 }}
              />

              <motion.div
                // initial={{
                //   opacity: 0,
                //   scale: 1,
                //   x: i % 2 === 0 ? -400 : 400,
                // }}
                // whileInView={{ opacity: 1, scale: 1, x: 0 }}
                // transition={{ duration: 0.6 }}
                className={`flex flex-col space-y-4 pb-4 md:space-y-2 lg:space-y-4 overflow-hidden md:w-[50%] mx-5 mt-4 ${i % 2 === 0
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
 
                <ReusableButton
                  buttonText="SEE CASE STUDY"
                  handleMouseMove={handleMouseMovebutton}
                  btnRef={btnRef}
                  additionalClasses="your-custom-classes"
                  type="button"
                  onClick={() => router.push(item.link)}
                />
              </motion.div>
            </motion.div>
            );
          })}
      </div>
    </div>
  );
}

export default Product;
