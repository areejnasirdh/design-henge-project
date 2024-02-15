import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import CaseStudyBanner from "@/components/CaseStudy/YummyGirlo/CaseStudyBanner";
import Overview from "@/components/CaseStudy/YummyGirlo/Overview";
import WhereItStarted from "@/components/CaseStudy/YummyGirlo/WhereItStarted";
import CaseStudyImgSection from "@/components/CaseStudy/YummyGirlo/CaseStudyImgSection";
import VisualWebsiteDesign from "@/components/CaseStudy/YummyGirlo/VisualWebsiteDesign";
import CaseStudyImgSection2 from "@/components/CaseStudy/YummyGirlo/CaseStudyIngSection2";
import YummyGirlo from "@/components/CaseStudy/YummyGirlo/YummyGirlo";
import Label from "@/components/CaseStudy/YummyGirlo/Label";
import SocialMedia from "@/components/CaseStudy/YummyGirlo/SocialMedia";

const page = () => {
  return (
    <div>
      <div className="case_study_main yummy_gurlo">
        <Navbar />
        <CaseStudyBanner />
      </div>
      <Overview />
      <WhereItStarted />
      <YummyGirlo />
      <CaseStudyImgSection />
      <VisualWebsiteDesign />
      <Label />
      <SocialMedia />
      <CaseStudyImgSection2 />
    </div>
  );
};

export default page;
