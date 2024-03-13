import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from "@/components/CaseStudy/Zego/Banner";
import Overview from "@/components/CaseStudy/Zego/OverviewSection";
import WhereItStarted from "@/components/CaseStudy/Zego/WhereItStarted";
import CaseStudyImgSection from "@/components/CaseStudy/YummyGirlo/CaseStudyImgSection";
import Zego from "@/components/CaseStudy/Zego/Zego";
import VisualWebsiteDesign from "@/components/CaseStudy/Zego/VisualWebsiteDesign";
import SocialMedia from "@/components/CaseStudy/Zego/SocialMedia";
import Home from "@/components/CaseStudy/Zego/Homepage";

const page = () => {
  return (
    <div>
        <Navbar />
      <div className="case_study_main Zego">
        <Banner />
      </div>
      <Overview />
      <WhereItStarted />
      <CaseStudyImgSection />
      <Zego />
      <VisualWebsiteDesign />
      <SocialMedia />
      <Home />
    </div>
  );
};

export default page;
