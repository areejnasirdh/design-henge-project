"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

function CaseStudy() {
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const router = useRouter();
  const [cases, setcases] = useState([
    // {
    //   image: "/images/caseStudy/Case-study-section-1.webp",
    //   heading: "YUMME GIRL O SKIN",
    //   description:"Design Henge collaborated with Yumme Girl Skin O to craft a cohesive and engaging brand identity cross logo design, product labeling, website design, and social media presence.",
    //   link: "/case-study/yummegurlo",
    // },
    {
      image: "/images/caseStudy/Case-study-section-2.webp",
      heading: "Speakable",
      description:
        "Design Henge, collaborated with Speakable, a language learning platform, to overhaul its user interface (UI) design for their dashboards. By combining our expertise in visual communication with Speakable's innovative language learning approach, the partnership aimed to create an intuitive and engaging user experience.",
      link: "/case-study/Speakable",
    },
    {
      image: "/images/caseStudy/Case-study-section-3.webp",
      heading: "Orange County Eating Disorder",
      description:
        "A successful collaboration between Orange County Eating Disorder & Design Henge, to develop website, logo design, and create engaging blog content to enhance the providers online presence. The key was to address the challenge of raising awareness about eating disorders while providing valuable resources to those in need, the client sought our expertise.",
      link: "/case-study/orange-county",
    },
    {
      image: "/images/caseStudy/case-study-section-6.webp",
      heading: "Zego",
      description:
        "ZEGO is an emerging AI company focused on empowering clients to identify opportunities for increased efficiencies through automation, AI integration, and leveraging outsourced teams. With a commitment to innovation and optimization, ZEGO aims to revolutionize business operations across various industries.",
      link: "/case-study/Zego",
    },
  ]);

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
    <div className="home_case_study_main">
      <div className="flex flex-col justify-center items-center lg:pr-10 md:px-10 2xl:px-0 w-full pt-[60px]">
        <h1 className="process-heading font-bebas text-7xl sm:text-8xl md:text-7xl xl:text-[90px] 2xl:text-[110px] font-outline-white-1 text-white text-shadow-blue stroke">
          CASE STUDY
        </h1>

        <div className="flex space-x-3 items-center mt-3">
          <div className="border-t-4 border-red-primary w-7"></div>
          <p className="font-medium text-[13px]">
            A variety of creative capabilities under one roof
          </p>
        </div>
      </div>
      <div id="case-study" className="projects pt-14 pb-6">
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
                    <div className="w-full flex md:block justify-center">
                    <ReusableButton
                      buttonText="SEE CASE STUDY"
                      handleMouseMove={handleMouseMovebutton}
                      btnRef={btnRef}
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
