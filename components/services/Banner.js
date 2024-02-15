"use client";
import React from "react";
import Banner from "@/components/Common/Banner/Banner";
import BannerImg from "../../public/images/service_banner.png";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";

const BannerSection = () => {
  return (
    <div className="services_banner_section_main">
      <Container fluid className="container-width-2">
        <Row>
          <Col md={6} className="pt-5 d-flex flex-col justify-center">
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.4",
              }}
            >
              WORLD CLASS
            </motion.h1>

            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.4",
              }}
            >
              SOLUTION
            </motion.h1>
            <motion.h2
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.4",
              }}
            >
              For Business Across The Globe
            </motion.h2>
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.5",
              }}
            >
              We strive to become an integral part of every organizations business promotion plan. We are committed to achieving our vision through a three-pronged strategy: Deliver, Create, Advance.
            </motion.p>
          </Col>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center pt-5"
          >
            {/* <div className="banner_img_box"> */}
            <Image src={BannerImg} className="banner-img"/>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerSection;
