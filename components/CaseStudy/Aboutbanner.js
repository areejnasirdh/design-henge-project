"use client";
import React from "react";
import Banner from "@/components/Common/Banner/Banner";
import BannerImg from "../../public/images/caseStudy/caseStudyBanner.png";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AboutBanner  = () => {
  const router = useRouter();
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
              READ OUR
            </motion.h1>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.4",
              }}
            >
              CASE STUDIES
            </motion.h1>
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.5",
              }}
            >
              Discover the impact of our multidisciplinary experts' fusion,
              driving meaningful engagement through their combined expertise.
              Experience the synergy that transforms ideas into impactful
              realities.
            </motion.p>
            {/* <Link href={"#case-study-products"}>
              <ReusableButton
                buttonText="READ MORE"
              // additionalClasses="your-custom-classes"
              // onClick={() => router.push("#case-study-products")}
              />
            </Link> */}
            {/* <div className="contact_banner_heading_line">
              <motion.hr
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: "0.5",
                  delay: "0.4",
                }}
                className="horizontal-line"
              ></motion.hr>
              <motion.p
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: "0.5",
                  delay: "0.4",
                }}
              >
                A variety of creative capabilities under one roof
              </motion.p>
            </div> */}
          </Col>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center mt-4"
          >
            {/* <div className="banner_img_box"> */}
            <Image src={BannerImg} className="banner-img" />
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutBanner;
