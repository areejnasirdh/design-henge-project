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
        <div className="footer-main mx-auto max-w-[90rem] px-0 pb-6 pt-10 md:pt-5 sm:px-6 lg:px-0 flex flex-wrap xl:justify-between justify-center">
          <div className="mt-4 w-[250px]">
            <a href="/" className="text-xs font-medium text-white">
              <img src="https://res.cloudinary.com/diha3kofd/image/upload/v1711447359/design-henge/images/home/Footer-logo_zqo8rw.png" />
            </a>
            <div className="h-[40px] flex mt-4 w-fit mx-auto">
              <a
                href="https://www.facebook.com/DesignHenge?mibextid=ZbWKwL"
                className="text-xs font-medium text-white mr-4"
              >
                <img
                  src="/images/facebook-icon.png"
                  className="w-full h-full"
                />
              </a>
              <a
                href="https://www.instagram.com/designhengeco/"
                className="text-xs font-medium text-white mr-4"
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
          <div className="flex flex-wrap justify-between w-full xl:w-[70%] ml-4">
            <div className="mt-4 mr-4 w-[100%] sm:w-fit">
              <div className="mt-0">
                <p className="text-[30px] md:text-[38px] font-medium text-white font-bebas textalign">
                  Quick links
                </p>
              </div>
              <div className="mt-2">
                <a
                  href="/"
                  target="__blank"
                  className="text-sm font-light text-gray-200 flex items-center justify-center sm:justify-start"
                >
                  HOME
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="/about-us"
                  target="__blank"
                  className="text-sm font-light text-gray-200 flex items-center justify-center sm:justify-start"
                >
                  ABOUT US
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="/services"
                  target="__blank"
                  className="text-sm font-light text-gray-200 flex items-center justify-center sm:justify-start"
                >
                  SERVICES
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="/case-study"
                  target="__blank"
                  className="text-sm font-light text-gray-200 flex items-center justify-center sm:justify-start"
                >
                  CASE STUDY
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="/contact-us"
                  target="__blank"
                  className="text-sm font-light text-gray-200 flex items-center justify-center sm:justify-start"
                >
                  CONTACT US
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="/blog"
                  target="__blank"
                  className="text-sm font-light text-gray-200 flex items-center justify-center sm:justify-start"
                >
                  BLOG
                </a>
              </div>
              {/* </div> */}
            </div>
            <div className="mt-4 mr-4 w-[100%] sm:w-fit">
              <p className="text-[30px] md:text-[42px] font-medium text-white font-bebas textalign">
                CONTACT US
              </p>
              <p
                style={{ fontSize: "15px" }}
                className="text-gray-200 text-sm leading-7 font-light textalign"
              >
                Support@designhenge.com <br />
              </p>
              <p
                style={{ fontSize: "15px" }}
                className=" text-sm leading-7 font-light textalign"
              >
                <Link href={`tel:19173101802`} className="text-gray-200">
                  {" "}
                  +1 (917) 310-1802
                </Link>
              </p>
              <p className="text-[30px] md:text-[38px] font-medium text-white font-bebas mt-2 textalign">
                Email us
              </p>
              <p
                style={{ fontSize: "15px" }}
                className="text-gray-200 text-sm font-light leading-7 textalign"
              >
                info@designhenge.com
              </p>
            </div>
            <div className="w-[100%] sm:w-fit sm:max-w-[300px] mt-4">
              <div className="flex items-center justify-center sm:justify-start">
                <Image
                  src="https://res.cloudinary.com/diha3kofd/image/upload/v1711447364/design-henge/images/home/footer-America-flag_ddotli.png"
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
                className="text-gray-200 font-light leading-7 text-sm flex items-center justify-center sm:justify-start textalign"
              >
                2259 W. Rosemont Ave. Apt. 1 <br />
                Chicago, IL 60659, USA
              </Link>

              <div className="flex items-center mt-3 justify-center sm:justify-start">
                <Image
                  src="https://res.cloudinary.com/diha3kofd/image/upload/v1711447350/design-henge/images/home/footer-pakistan-flag_jftnxl.png"
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
                className="text-gray-200 font-light sm:w-[250px] flex items-center justify-center sm:justify-start textalign"
              >
                Saadabad Cooperative Housing Society, 4, Block 4
                Gulistan-e-Johar, Karachi, Karachi City, Sindh 75290
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Container fluid className="container-width">
        <div className="mx-auto">
          <div className="py-4">
            <p className="text-[20px] md:text-2xl mb-4 font-medium text-white font-bebas uppercase">
              AWARDS AND Acknowledgements
            </p>
            <div className="flex justify-around items-center flex-wrap">
              <div className="w-[50%] p-[10px] flex justify-center items-center min-h-[130px] md:w-auto">
                <Image
                  src="https://res.cloudinary.com/diha3kofd/image/upload/v1711447425/design-henge/images/home/clutch_vuzrqu.png"
                  width={300}
                  height={300}
                  alt=""
                  className="object-contain w-[119px]"
                />
              </div>
              <div className="w-[50%] p-[10px] flex justify-center items-center min-h-[130px] md:w-auto">
                <Image
                  src="https://res.cloudinary.com/diha3kofd/image/upload/v1711447469/design-henge/images/home/google-partner_nqkojz.png"
                  width={300}
                  height={300}
                  alt=""
                  className="object-contain w-[119px]"
                />
              </div>
              <div className="w-[50%] p-[10px] flex justify-center items-center min-h-[130px] md:w-auto">
                <Image
                  src="https://res.cloudinary.com/diha3kofd/image/upload/v1711447432/design-henge/images/home/seo-blog_nmiamq.png"
                  width={300}
                  height={300}
                  alt=""
                  className="object-contain w-[119px]"
                />
              </div>
              <div className="w-[50%] p-[10px] flex justify-center items-center min-h-[130px] md:w-auto">
                <Image
                  src="https://res.cloudinary.com/diha3kofd/image/upload/v1711447485/design-henge/images/home/expertise_cgfnxv.png"
                  width={300}
                  height={300}
                  alt=""
                  className="object-contain w-[119px]"
                />
              </div>
              <div className="w-[50%] p-[10px] flex justify-center items-center min-h-[130px] md:w-auto">
                <Image
                  src="https://res.cloudinary.com/diha3kofd/image/upload/v1711447513/design-henge/images/home/inc-5000_vfpp88.png"
                  width={300}
                  height={300}
                  alt=""
                  className="object-contain w-[119px]"
                />
              </div>
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
