"use client";
import React from "react";
import BannerSection from "../CaseStudy/Layout/BannerSection";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import ReusableButton from "../Common/Banner/hoverbuttonclass";

const ContactBanner = () => {
  return (

    <div className="contact_banner_section_main">
      <Container fluid className="container-width-2">
        <Row>
          <Col
            md={7}
            className="pt-5 pt-md-0 d-flex flex-col justify-content-center"
          >
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.3",
              }}
            >
              LET’S START A PROJECT
            </motion.h1>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.3",
              }}
            >
              TOGETHER
            </motion.h1>
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.4",
              }}
            >
              We'll contact you within a couple of hours to schedule a meeting to discuss your goals. We'll contact you within a couple of hours to schedule a meeting to discuss your goals.
            </motion.p>
          </Col>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center mt-4"
          >
            <div className="d-flex justify-end py-3">
              <div className="home_contact_form w-full md:w-[29rem] px-6 py-6 lg:pl-10 lg:pr-10 lg:py-10 flex justify-center">
                <div>
                  <h3>Book a Free Consultation</h3>
                  <form className="pt-4 pb-3">
                    <Row className="gx-5 gy-3">
                      <Col md={12} className="d-flex flex-col">
                        <div className="input">
                          <input placeholder="Full Name" />
                        </div>
                      </Col>
                      <Col md={12} className="d-flex flex-col">
                        <div className="input">
                          <input placeholder="Email" />
                        </div>
                      </Col>
                      <Col md={12} className="d-flex flex-col py-2">
                        <div className="input">
                          <input placeholder="Phone Number" />
                        </div>
                      </Col>
                      <Col md={12} className="d-flex flex-col py-2">
                        <label>Message</label>
                        <div className="input">
                          <textarea className="relative h-[50px] px-2 box-border w-full" />
                        </div>
                      </Col>
                      <div className="flex justify-center">
                        <ReusableButton
                          buttonText="G
                            ET IT TOUCH"
                          onClick={() => { }}
                          additionalClasses="your-custom-classes"
                        />
                      </div>
                    </Row>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactBanner;
