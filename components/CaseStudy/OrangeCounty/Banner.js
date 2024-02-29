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
        ORANGE COUNTY EATING DISORDER
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
        Orange county eating disorder is a therapist group who aim to address
        eating disorder issues of individuals. They faced challenges in
        expanding their audience reach and wanted to establish their online
        presence. They sought assistance in refining their entire digital
        footprint.
      </motion.p>
    </BannerSection>
  );
};

export default Banner;
