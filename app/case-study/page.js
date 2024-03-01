import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import AboutBanner from "@/components/CaseStudy/Aboutbanner";
import Socials from "@/components/Home/Socials";
import Product from "@/components/CaseStudy/Product";
import Head from "next/head";

const page = () => {
  return (
    <div>
      <Head>
        <title>Case Studies: Tangible results, driven with strategy</title>
        <meta
          name="description"
          content="Meta descrip: See our professional work. Check our portfolio and read the case studies for some of our custom solutions for startups and enterprise clients."
        />
      </Head>
      <div className="home_main">
        <Navbar />
        <AboutBanner />
      </div>
      <Socials />
      <Product />
    </div>
  );
};

export default page;
