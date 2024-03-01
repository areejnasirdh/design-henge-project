"use client";
import React from "react";
import Yummy from "../../../public/images/yummygurlo/yummy-girlo.webp";
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
        Yumme Girl Skin O x Design Henge: Using Emotion, Personality and a
        Vision for Branding, Elevating Product Appeal and Recognition
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
        Design Henge embarked on an immersive branding journey with Yumme Girl
        Skin O, crafting a narrative that intertwined nostalgia and hygiene.
        From logo design to website development, each element was meticulously
        curated to enhance storytelling and drive consumer engagement.
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
        Through strategic social media initiatives, Design Henge amplified Yumme
        Girl Skin O's narrative, fostering increased visibility and unwavering
        brand loyalty. As a result of this collaborative effort, Yumme Girl Skin
        O achieved remarkable market success, solidifying its position as a
        beloved brand.
      </motion.p>
    </OverviewSection>
  );
};

export default Overview;
