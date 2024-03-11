"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

function Socials() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [mounted]);
  if (!mounted) return false;
  return (
    <div id="about-us" className="bg-white pt-[40px]">
      <div className="partners">
        <h1 className="text-center">We’re Partnered With</h1>
      </div>
      <div className="relative mx-auto w-full flex items-center section-2-slider">
        <div className="absolute bottom-0 z-10 md:bottom-[29px] left-0 bg-gradient-to-r from-white to-transparent  w-48 md:w-[10rem] h-[8rem] lg:w-[14rem] 2xl:w-[13rem] 2xl:h-[10rem]" />
        <Marquee direction="right" autoFill>
          <div className="flex items-center gap-6 md:gap-16 pt-10 px-10 -mt-10 h-[150px]">
            <Image
              src="/images/salesforce.png"
              width={70}
              height={70}
              alt=""
              className="mx-auto 2xl:w-16"
            />
            <Image
              src="/images/shopify.png"
              width={100}
              height={100}
              alt=""
              className="mx-auto 2xl:w-32"
            />
            <Image
              src="/images/google.png"
              width={100}
              height={100}
              alt=""
              className="mx-auto 2xl:w-32"
            />
            <Image
              src="/images/rivera.png"
              width={100}
              height={100}
              alt=""
              className="mx-auto 2xl:w-40"
            />
            <Image
              src="/images/amazon.png"
              width={100}
              height={100}
              alt=""
              className="mx-auto 2xl:w-32"
            />
            <Image
              src="/images/meta.png"
              width={100}
              height={100}
              alt=""
              className="mx-auto 2xl:w-32"
            />
          </div>
        </Marquee>
        <div className="absolute bottom-0 z-10  md:bottom-[29px] right-0 bg-gradient-to-l from-white to-transparent  w-36 md:w-[10rem] h-[8rem] lg:w-[14rem] 2xl:w-[18rem] 2xl:h-[10rem]" />
      </div>
    </div>
  );
}

export default Socials;
