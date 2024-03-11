"use client";
import React, { useState } from "react";
import HomeSlider from "./HomeSlider";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

function Services() {
  const [currentSlide, setCurrentSlide] = useState("DESIGNING");

  const handleSlideChange = (title) => {
    setCurrentSlide(title);
  };

  return (
    <div className="home_services py-[50px]">
      <Container fluid className="container-width">
        <div className="home_services_main">
          <div className="flex flex-col justify-center items-center lg:pr-10 md:px-10 2xl:px-0 w-full md:pb-4">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: "0.7",
                delay: "0.2",
              }}
              className="blackGrayHeading text-center"
            >
              SERVICES WE PROVIDE
            </motion.h1>
            <p className="pt-4 font-light">
            We are your one-stop solution to all your business misery. Breath a new air into your dying business, let’s walk the talk.
            </p>
          </div>

          <Container fluid className="md:mt-4 lg:mt-4 ">
            <Row className="justify-content-center">
              <Col md={11} className="">
                <HomeSlider
                  currentSlide={currentSlide}
                  onSlideChange={handleSlideChange}
                />
              </Col>
            </Row>
            <div className="relative mx-auto w-full ">
              <Marquee autoFill>
                <div className="flex items-center gap-6 md:gap-16 py-4 px-3 md:px-10 md:py-12 services_marquee">
                  {currentSlide === "DESIGNING" && (
                    <>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Logo Designing</p>
                        <span>----</span>
                      </div>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Branding Collaterals</p>
                        <span>----</span>
                      </div>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>UI/UX</p>
                        <span>----</span>
                      </div>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Mobile App Design</p>
                        <span>----</span>
                      </div>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Video Animation</p>
                        <span>----</span>
                      </div>
                    </>
                  )}
                  {currentSlide === "Development" && (
                    <>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Website Development</p>
                        <span>----</span>
                      </div>

                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Ecommerce Store Development</p>
                        <span>----</span>
                      </div>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Web Application Development</p>
                        <span>----</span>
                      </div>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Website Hosting</p>
                        <span>----</span>
                      </div>
                    </>
                  )}
                  {currentSlide === "Marketing" && (
                    <>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Search Engine Optimization</p>
                        <span>----</span>
                      </div>

                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Pay-Per Click Campaign</p>
                        <span>----</span>
                      </div>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Social Media Management</p>
                        <span>----</span>
                      </div>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Social Media Marketing</p>
                        <span>----</span>
                      </div>
                    </>
                  )}
                  {currentSlide === "Mobile Apps" && (
                    <>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Mobile Application Development</p>
                        <span>----</span>
                      </div>

                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Flutter Application Development</p>
                        <span>----</span>
                      </div>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>On-Demand Application Development</p>
                        <span>----</span>
                      </div>
                      <div className="flex text-white items-center justify-between gap-5">
                        <p>Fintech Application Development</p>
                        <span>----</span>
                      </div>
                    </>
                  )}
                </div>
              </Marquee>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Services;
