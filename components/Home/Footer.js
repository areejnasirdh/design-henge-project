"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import ReviewWidget from "./ReviewWidget";

export default function Footer() {
  return (
    <footer className="footer">
      <Container fluid className="container-width">
        <div className="footer-main mx-auto max-w-[90rem] px-0 pb-6 pt-10 md:pt-5 sm:px-6 lg:px-0 flex flex-wrap justify-between">
          <div className="w-[280px] mr-4 mt-4 px-[20px]">
            <a href="/" className="text-xs font-medium text-white">
              <img src="/images/Footer-logo.png" />
            </a>
            <div className="w-full h-[40px] flex justify-between mt-4">
              <a
                href="https://www.facebook.com/DesignHenge?mibextid=ZbWKwL"
                className="text-xs font-medium text-white"
              >
                <img
                  src="/images/facebook-icon.png"
                  className="w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/designhengeco/"
                className="text-xs font-medium text-white"
              >
                <img src="/images/insta-icon.png" className="w-full h-full" />
              </a>
              <a
                href="https://www.linkedin.com/company/design-henge/"
                className="text-xs font-medium text-white"
              >
                <img src="/images/linked-icon.png" className="w-full h-full" />
              </a>
            </div>
            <ReviewWidget />
          </div>
          <div className="w-[200px] mr-4 mt-4 px-[20px]">
            <div className="mt-0">
              <p className="text-[30px] md:text-[38px] font-medium text-white font-bebas">
                Quick links
              </p>
            </div>
            <div className="mt-2">
              <a
                href="/"
                target="__blank"
                className="text-sm font-light text-gray-200"
              >
                HOME
              </a>
            </div>
            <div className="mt-3">
              <a
                href="/about-us"
                target="__blank"
                className="text-sm font-light text-gray-200"
              >
                ABOUT US
              </a>
            </div>
            <div className="mt-3">
              <a
                href="/services"
                target="__blank"
                className="text-sm font-light text-gray-200"
              >
                SERVICES
              </a>
            </div>
            <div className="mt-3">
              <a
                href="/case-study"
                target="__blank"
                className="text-sm font-light text-gray-200"
              >
                CASE STUDY
              </a>
            </div>
            <div className="mt-3">
              <a
                href="/contact-us"
                target="__blank"
                className="text-sm font-light text-gray-200"
              >
                CONTACT US
              </a>
            </div>
            <div className="mt-3">
              <a
                href="/blog"
                target="__blank"
                className="text-sm font-light text-gray-200"
              >
                BLOG
              </a>
            </div>
            {/* </div> */}
          </div>
          <div className="w-[220px] mr-4 mt-4 px-[20px]">
            <p className="text-[30px] md:text-[42px] font-medium text-white font-bebas">
              CONTACT US
            </p>
            <p
              style={{ fontSize: "15px" }}
              className="text-gray-200 text-sm leading-7 font-light"
            >
              Support@designhenge.com <br />
            
            </p>
            <p style={{ fontSize: "15px" }}
              className=" text-sm leading-7 font-light">
              <Link  href={`tel:19173101802`} className="text-gray-200"> +1 (917) 310-1802</Link>
            </p>
            <p className="text-[30px] md:text-[38px] font-medium text-white font-bebas mt-2">
              Email us
            </p>
            <p
              style={{ fontSize: "15px" }}
              className="text-gray-200 text-sm font-light leading-7"
            >
              info@designhenge.com
            </p>
          </div>
          <div className="w-[300px] mr-4 mt-4 px-[20px]">
            <div className="flex items-center">
              <Image
                src="/images/footer-America-flag.png"
                width={20}
                height={10}
                className="h-[30px] w-[40px] mt-[-5px]"
              />
              <p className="text-[30px] md:text-[38px] font-medium text-white font-bebas uppercase ml-2">
                Headquarters
              </p>
            </div>
            <Link
              href="https://maps.app.goo.gl/dsFesYtGXHp4iT3f8"
              className="text-gray-200 font-light leading-7 text-sm"
            >
              2259 W. Rosemont Ave. Apt. 1 <br />
              Chicago, IL 60659, USA
            </Link>

            <div className="flex items-center mt-3">
              <Image
                src="/images/footer-pakistan-flag.png"
                width={20}
                height={10}
                className="h-[30px] w-[40px] mt-[-5px]"
              />
              <p className="text-[30px] md:text-[38px] font-medium text-white font-bebas uppercase ml-2">
                production team
              </p>
            </div>
            <Link
              href="https://maps.app.goo.gl/gptisda4XykBm9Ks7"
              className="text-gray-200 font-light w-[250px]"
            >
              Saadabad Cooperative Housing Society, 4, Block 4 Gulistan-e-Johar,
              Karachi, Karachi City, Sindh 75290
            </Link>
          </div>
        </div>
      </Container>
      <Container fluid className="container-width">
        <div className="mx-auto">
          <div className="py-4">
            <p className="text-[20px] md:text-2xl mb-4 font-medium text-white font-bebas uppercase">
              AWARDS AND Acknowledgements
            </p>
            <div className="flex justify-between items-center">
              <Image
                src="/images/clutch.png"
                width={300}
                height={300}
                alt=""
                className="object-contain w-10 sm:w-16 md:w-20"
              />
              <Image
                src="/images/seo-blog.png"
                width={300}
                height={300}
                alt=""
                className="object-contain w-10 sm:w-16 md:w-24"
              />
              <Image
                src="/images/google-partner.png"
                width={300}
                height={300}
                alt=""
                className="object-contain w-10 sm:w-16 md:w-24"
              />
              <Image
                src="/images/expertise.png"
                width={300}
                height={300}
                alt=""
                className="object-contain w-10 sm:w-16 md:w-24"
              />
              <Image
                src="/images/inc-5000.png"
                width={300}
                height={300}
                alt=""
                className="object-contain w-24 sm:w-28 md:w-32"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="w-full py-4 tracking-widest text-lg border-t border-white font-medium text-white font-bebas uppercase text-center">
        &copy; 2024 design henge. all rights reserved.
      </div>
    </footer>
  );
}
