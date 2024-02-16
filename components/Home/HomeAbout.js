"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../public/images/home-about-1.png";
import Image from "next/image";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HomeAbout = () => {
  const btnRef = useRef(null);
  const router = useRouter()

  // const handleMouseMove = (e) => {
  //   const x = e.pageX - btnRef.current.offsetLeft;
  //   const y = e.pageY - btnRef.current.offsetTop;

  //   btnRef.current.style.setProperty("--x", `${x}px`);
  //   btnRef.current.style.setProperty("--y", `${y}px`);
  // };
  return (
    <div className="home_about_main">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: "0.7",
        }}
        className="d-flex flex-column align-items-center py-[70px]"
      >
        <h3>ABOUT</h3>
        <h4>FUTURE ORIENTED AGENCY</h4>
        {/* <div className="d-flex align-items-center mt-1">
          <div className="w-10 h-1 bg-red-500 mr-2 "></div>
          <p>The best team</p>
        </div> */}
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: "0.7",
          delay: "0.2",
        }}
        className="home_about_details mt-4 pt-2 pb-5"
      >
        <Container fluid className="container-width">
          <Row>
            <Col md={6}>
              <Image src={AboutImg} />
            </Col>
            <Col md={6} className="mt-4 ">
              <h6>
                We At Qreate Are A Team Of Enthusiasts Who Love To Ideate And
                Create For You.
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
                diam ullamcorper urna sit quisque tincidunt hendrerit mattis.
                Dictum lectus magnis phasellus dictumst eu, enim, at id non.
                Metus diam quis interdum morbi mi velit commodo, malesuada.
                Velit lacinia donec aliquam nunc volutpat.
              </p>
              <Row spacingX={3} className="about_vision_and_mission mt-4 pt-3">
                <Col md={6} className=" pe-4">
                  <h5>VISION</h5>
                  <p>
                    We strive to become an integral part of every organizations
                    business promotion plan. We are committed to achieving our
                    vision through a three-pronged strategy: Deliver, Create,
                    Advance.
                  </p>
                </Col>
                <Col md={6} className=" pe-4">
                  <h5>MISSION</h5>
                  <p>
                    Design Henge's mission is to provide the endless
                    opportunities with a pinch of innovation, a twist of
                    creativity and a dash of passion.{" "}
                  </p>
                </Col>
              </Row>
              <ReusableButton
                buttonText="READ MORE"
                handleMouseMove={()=> router.push("/about-us")}
                btnRef={btnRef}
                additionalClasses="your-custom-classes"
              />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
