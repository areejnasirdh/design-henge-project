import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import AboutBanner from "@/components/CaseStudy/Aboutbanner";
import Socials from "@/components/Home/Socials";
import Product from "@/components/CaseStudy/Product";

const page = () => {
  return (
    <div>
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
