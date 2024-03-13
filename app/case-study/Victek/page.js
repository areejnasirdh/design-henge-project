import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from "@/components/CaseStudy/Victek/Banner";
import Overview from "@/components/CaseStudy/Victek/OverviewSection";
import WhereItStarted from "@/components/CaseStudy/Victek/WhereItStarted";
import CaseStudyImgSection from "@/components/CaseStudy/YummyGirlo/CaseStudyImgSection";
import Vicket from "@/components/CaseStudy/Victek/victek";
import VisualWebsiteDesign from "@/components/CaseStudy/Victek/VisualWebsiteDesign";
import BusinessCard from "@/components/CaseStudy/Victek/BuinessCard";
import Home from "@/components/CaseStudy/Victek/Homepage";

const page = () => {
  return (
    <div>
        <Navbar />
      <div className="case_study_main vicket">
        <Banner />
      </div>
      <Overview />
      <WhereItStarted />
      <CaseStudyImgSection />
      <Vicket />
      <VisualWebsiteDesign />
      <BusinessCard />
      <Home />
    </div>
  );
};

export default page;
