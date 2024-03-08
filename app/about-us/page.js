import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import AboutBanner from "@/components/About/AboutBanner";
import WhoWeAre from "@/components/About/WhoWeAre";
import Acheivements from "@/components/About/Acheivements";
import Projects from "@/components/About/Projects";
import Socials from "@/components/Home/Socials";
import Head from "next/head";
import Banner from "@/components/Common/Banner/Banner";

const page = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Meta descrip: Design Henge aims to help startups and organizations recognize their potential and leverage optimum, highly customized solutions for business growth and ROI."
        />
      </Head>
      <div className="home_main about-us">
        <Navbar />
        <AboutBanner />
      </div>
      <Socials />
      <WhoWeAre />
      <Acheivements />
      <Projects />
    </div>
  );
};

export default page;
