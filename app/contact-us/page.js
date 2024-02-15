import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import ContactBanner from "@/components/ContactUs/Banner";
import ContactDemand from "@/components/ContactUs/InfoSection";
import Contactform from "@/components/ContactUs/form";

const page = () => {
  return (
    <div>
      <div className="case_study_main yummy_gurlo home_main">
        <Navbar />
        <ContactBanner />
      </div>
      <ContactDemand />
      <Contactform />
    </div>
  );
};

export default page;
