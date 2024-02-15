import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from "@/components/CaseStudy/DreamShot/Banner";
import Overview from "@/components/CaseStudy/DreamShot/OverviewSection";
import WhereItStarted from "@/components/CaseStudy/DreamShot/WhereItStarted";
import CaseStudyImgSection from "@/components/CaseStudy/DreamShot/CaseStudyImgSection";
import Dreamshot from "@/components/CaseStudy/DreamShot/Dreamshot";
import VisualWebsiteDesign from "@/components/CaseStudy/DreamShot/VisualWebsiteDesign";
import SocialMedia from "@/components/CaseStudy/DreamShot/SocialMedia";
import Home from "@/components/CaseStudy/DreamShot/Homepage";

const page = () => {
  return (
    <div>
      <div className="case_study_main dreamshot">
        <Navbar />
        <Banner />
      </div>
      <Overview />
      <WhereItStarted />
      <CaseStudyImgSection />
      <Dreamshot />
      <VisualWebsiteDesign />
      <SocialMedia />
      <Home />
    </div>
  );
};

export default page;
