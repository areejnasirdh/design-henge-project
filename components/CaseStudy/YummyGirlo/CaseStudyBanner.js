"use client";
import React from "react";
import BannerSection from "../Layout/BannerSection";
import { motion } from "framer-motion";

const CaseStudyBanner = () => {
  return (
    // <BannerSection bannerClass="yummy_banner">
    //   <motion.h1
    //     initial={{ y: 200, opacity: 0 }}
    //     animate={{ y: 0, opacity: 1 }}
    //     transition={{
    //       duration: "0.5",
    //       delay: "0.3",
    //     }}
    //   >
    //     CASE STUDY
    //   </motion.h1>
    //   {/* <motion.h1
    //     initial={{ y: 200, opacity: 0 }}
    //     animate={{ y: 0, opacity: 1 }}
    //     transition={{
    //       duration: "0.5",
    //       delay: "0.3",
    //     }}
    //   >

    //   </motion.h1> */}
    //   <motion.p
    //     initial={{ y: 200, opacity: 0 }}
    //     animate={{ y: 0, opacity: 1 }}
    //     transition={{
    //       duration: "0.5",
    //       delay: "0.3",
    //     }}
    //   >
    //     Yummy O Girl changes lives every day by empowering people with
    //     disabilities and disadvantaging conditions to increase their
    //     independence and reach their potential through job training and
    //     employment at Speakable and in the community.
    //   </motion.p>
    // </BannerSection>
    <BannerSection bannerClass="yummy_banner">
      <motion.h1
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: "0.5",
          delay: "0.3",
        }}
      >
        YUMME GIRL O SKIN
      </motion.h1>
      <motion.h1
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: "0.5",
          delay: "0.4",
        }}
      >
        CASE STUDY
      </motion.h1>
      <motion.p
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: "0.5",
          delay: "0.5",
        }}
      >
       Drawing inspiration from the founder's childhood memories, we evoked a sense of nostalgia while modernizing the brand. The partnership exemplifies the transformative power of branding in capturing consumer interest and fostering brand loyalty.
      </motion.p>
    </BannerSection>
  );
};

export default CaseStudyBanner;

