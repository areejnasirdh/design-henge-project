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
        The Book Lover empowers people with disabilities and other barriers
        through job training and employment at Speakable and in the
        community.
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
        Design Henge Interactive worked with Goodwill’s team to help them in their mission of continuing to amplify the voice of individuals with disabilities, providing independence and access for all. Speakable is known for being an advocate and defender of those who are going through difficult times.
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
        To further their objectives, Speakable hired Design Henge Interactive to support their business with web design expertise and occasional consulting related to digital marketing services. As the web design agency of Speakable’s choice, ongoing web support and maintenance, as well as on-page SEO and management of their $10,000 monthly Google Ads Grant, was managed by the Design henge team.
      </motion.p>
    </OverviewSection>
  );
};

export default Overview;
