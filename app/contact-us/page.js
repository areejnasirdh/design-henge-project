import React from "react";
import Navbar from "@/components/Common/Navbar/Navbar";
import ContactBanner from "@/components/ContactUs/Banner";
import Socials from "@/components/Home/Socials";
import Location from "@/components/ContactUs/Location";


const page = () => {
  return (
    <div>
      <div className="contact-us-page">
        <Navbar />
        <ContactBanner />
      </div>
      <Socials />
      <Location />
    </div>
  );
};

export default page;
