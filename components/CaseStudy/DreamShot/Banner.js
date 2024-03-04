"use client";
import React from "react";
import BannerSection from "../Layout/BannerSection";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <BannerSection bannerClass="yummy_banner">
      <motion.h1
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: "0.5",
          delay: "0.3",
        }}
      >
        DREAM SHOT
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
        Dreamshot reached out to Design Henge, a leading agency known for its
        cutting-edge UI/UX design and website development services. We created a
        website for them that would resonate with the target audience.
      </motion.p>
    </BannerSection>
  );
};

export default Banner;
