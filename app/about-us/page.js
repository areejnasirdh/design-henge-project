import React from 'react';
import Navbar from "@/components/Common/Navbar/Navbar";
import AboutBanner from '@/components/About/AboutBanner';
import WhoWeAre from '@/components/About/WhoWeAre';
import Acheivements from '@/components/About/Acheivements';
import Projects from '@/components/About/Projects';
import Socials from '@/components/Home/Socials';

const page = () => {
  return (
    <div>
      <div className="home_main">
        <Navbar />
        <AboutBanner />
      </div>
      <Socials />
      <WhoWeAre />
      <Acheivements />
      <Projects />
    </div>
  )
}

export default page