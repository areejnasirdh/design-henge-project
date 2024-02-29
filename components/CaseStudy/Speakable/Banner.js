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
        SPEAKABLE
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
        Speakable recognized the need to enhance its dashboards' UI to better
        align with its mission of improving language learning outcomes. The
        existing interface lacked intuitive navigation and visual appeal,
        hindering users' engagement and usability.
      </motion.p>
    </BannerSection>
  );
};

export default Banner;
