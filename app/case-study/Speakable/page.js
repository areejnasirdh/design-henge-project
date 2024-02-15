import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from "@/components/CaseStudy/Speakable/Banner";
import Overview from "@/components/CaseStudy/Speakable/OverviewSection";
import WhereItStarted from "@/components/CaseStudy/Speakable/WhereItstarted";
import CaseStudyImgSection from "@/components/CaseStudy/YummyGirlo/CaseStudyImgSection";
import Speakable from "@/components/CaseStudy/Speakable/Speakable";
import VisualWebsiteDesign from "@/components/CaseStudy/Speakable/VisualWebsiteDesign";
import DasboardDesign from "@/components/CaseStudy/Speakable/DasboardDesign";
import SocialMedia from "@/components/CaseStudy/Speakable/SocialMediaDesign";
import Home from "@/components/CaseStudy/Speakable/Homepage";

const page = () => {
  return (
    <div>
      <div className="case_study_main speakable">
        <Navbar />
        <Banner />
      </div>
      <Overview />
      <WhereItStarted />
      <CaseStudyImgSection />
      <Speakable />
      <VisualWebsiteDesign />
      <DasboardDesign />
      <SocialMedia />
      <Home />
    </div>
  );
};

export default page;
