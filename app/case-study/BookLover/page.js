import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from "@/components/CaseStudy/BookLover/Banner";
import Overview from "@/components/CaseStudy/BookLover/OverviewSection";
import WhereItStarted from "@/components/CaseStudy/BookLover/WhereItStarted";
import CaseStudyImgSection from "@/components/CaseStudy/YummyGirlo/CaseStudyImgSection";
import BookLover from "@/components/CaseStudy/BookLover/BookLover";
import VisualWebsiteDesign from "@/components/CaseStudy/BookLover/VisualWebsiteDesign";
import SocialMedia from "@/components/CaseStudy/BookLover/SocialMedia";
import Home from "@/components/CaseStudy/BookLover/Homepage";

const page = () => {
  return (
    <div>
      <div className="case_study_main Booklover">
        <Navbar />
        <Banner />
      </div>
      <Overview />
      <WhereItStarted />
      <CaseStudyImgSection />
      <BookLover />
      <VisualWebsiteDesign />
      <SocialMedia />
      <Home />
    </div>
  );
};

export default page;
