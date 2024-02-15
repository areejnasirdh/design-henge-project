import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from "@/components/CaseStudy/OrangeCounty/Banner";
import Overview from "@/components/CaseStudy/OrangeCounty/OverviewSection";
import WhereItStarted from "@/components/CaseStudy/OrangeCounty/WhereItStarted";
import CaseStudyImgSection from "@/components/CaseStudy/YummyGirlo/CaseStudyImgSection";
import OrangeCounty from "@/components/CaseStudy/OrangeCounty/OrangeCounty";
import VisualWebsiteDesign from "@/components/CaseStudy/OrangeCounty/VisualWebsiteDesign";
import LabelDesign from "@/components/CaseStudy/OrangeCounty/LabelDesign";
import SocialMedia from "@/components/CaseStudy/OrangeCounty/SocialMediaDesign";
import HomePageDesign from "@/components/CaseStudy/OrangeCounty/HomePage";

const page = () => {
  return (
    <div>
      <div className="case_study_main orange_county">
        <Navbar />
        <Banner />
      </div>
      <Overview />
      <WhereItStarted />
      <CaseStudyImgSection />
      <OrangeCounty />
      <VisualWebsiteDesign />
      <SocialMedia />
      <LabelDesign />
      <HomePageDesign />
    </div>
  );
};

export default page;
