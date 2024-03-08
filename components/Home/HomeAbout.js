"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HomeAbout = ({heading, subHeading, img, bluePara, para, mission, vision, navigate}) => {
  const btnRef = useRef(null);
  const router = useRouter();

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
        <h3>{heading}</h3>
        <h4>{subHeading}</h4>
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
        className="home_about_details pt-2 pb-5"
      >
        <Container fluid className="container-width">
          <Row>
            <Col xl={6} lg={12} className="flex justify-center">
              <Image src={img} />
            </Col>
            <Col xl={6} lg={12} className="mt-4 ">
              <h6>
               {bluePara}
              </h6>
              <p>
               {para}
              </p>
              <Row spacingx={3} className="about_vision_and_mission gap-y-[20px] mt-4 pt-3">
              {vision === true &&
                <Col xl={6} lg={12} className="pe-4">
                  <h5>VISION</h5>
                  <p>
                  We strive to become an integral part of every organizations
                    business promotion plan. We are committed to achieving our
                    vision through a three-pronged strategy: Deliver, Create,
                    Advance.
                  </p>
                </Col>
                }
                 <Col xl={6} lg={12}  className="pe-4">
                  <h5>MISSION</h5>
                  <p>
                    {mission}
                  </p>
                </Col>
                
              </Row>
              {navigate &&  <div className="flex xl:block justify-center w-full">
                <ReusableButton
                  buttonText="READ MORE"
                  onClick={() => router.push(navigate)}
                  btnRef={btnRef}
                  additionalClasses="your-custom-classes"
                />
              </div>}
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
