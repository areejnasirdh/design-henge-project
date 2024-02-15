import React from 'react'
import Navbar from "@/components/Common/Navbar/Navbar";
import Banner from '@/components/services/Banner';
import Socials from '@/components/Home/Socials';
import DigitalDemand from '@/components/services/DigitalDemand';
import OurServices from '@/components/services/OurServices';
import WhenWeStarted from '@/components/services/WhenWeStarted';


const page = () => {
  return (
    <div>
         <div className="home_main">
        <Navbar />
        <Banner />
      </div>
      <Socials />
      <DigitalDemand />
      <OurServices />
      <WhenWeStarted />
    </div>
  )
}

export default page