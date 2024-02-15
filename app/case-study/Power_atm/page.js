import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from "@/components/CaseStudy/Power_atm/Banner";
import Overview from "@/components/CaseStudy/Power_atm/OverviewSection";
import WhereItStarted from "@/components/CaseStudy/Power_atm/WhereItStarted";
import CaseStudyImgSection from "@/components/CaseStudy/YummyGirlo/CaseStudyImgSection";
import PowerAtm from "@/components/CaseStudy/Power_atm/PowerAtm";
import VisualWebsiteDesign from "@/components/CaseStudy/Power_atm/VisualWebsiteDesign";
import BusinessCard from "@/components/CaseStudy/Power_atm/BuinessCard";
import Home from "@/components/CaseStudy/Power_atm/Homepage";

const page = () => {
  return (
    <div>
      <div className="case_study_main powerAtm">
        <Navbar />
        <Banner />
      </div>
      <Overview />
      <WhereItStarted />
      <CaseStudyImgSection />
      <PowerAtm />
      <VisualWebsiteDesign />
      <BusinessCard />
      <Home />
    </div>
  );
};

export default page;
