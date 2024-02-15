"use client";
import React from "react";
import Yummy from "../../../public/images/yummygurlo/yummy-girlo.png";
import OverviewSection from "../Layout/OverviewSection";
import { motion } from "framer-motion";

const Overview = () => {
  const services_list = [
    "Custom Graphics",
    "UX/UI Design",
    "Custom WordPress Development",
    "Career Form Module",
    "SEO Optimized",
    "Web Hosting",
    "SSL Certificate",
    "Website Optimization",
    "Event Integration",
    "Shop Module Integration",
    "Custom Calendar Module",
    "Lead Form Module",
    "Gallery Module",
  ];
  return (
    <OverviewSection logo={Yummy} services_list={services_list}>
      <motion.h5
        initial={{
          opacity: 0,
          scale: 1,
          y: 20,
        }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Speakable empowers people with disabilities and other barriers through
        job training and employment at Speakable and in the community.
      </motion.h5>
      <motion.p
        initial={{
          opacity: 0,
          scale: 1,
          y: 20,
        }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit diam
        ullamcorper urna sit quisque tincidunt hendrerit mattis. Dictum lectus
        magnis phasellus dictumst eu, enim, at id non. Metus diam quis interdum
        morbi mi velit commodo, malesuada. Velit lacinia donec aliquam nunc
        volutpat.
      </motion.p>
      <motion.p
        initial={{
          opacity: 0,
          scale: 1,
          y: 20,
        }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit diam
        ullamcorper urna sit quisque tincidunt hendrerit mattis. Dictum lectus
        magnis phasellus dictumst eu, enim, at id non. Metus diam quis interdum
        morbi mi velit commodo, malesuada. Velit lacinia donec aliquam nunc
        volutpat.
      </motion.p>
    </OverviewSection>
  );
};

export default Overview;
