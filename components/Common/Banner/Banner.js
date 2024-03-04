"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRef } from "react";
import ReusableButton from "./hoverbuttonclass";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Banner = ({ heading, subHeading, text, img, navigate }) => {
  const pathname = usePathname();
  let route = pathname.split("/");
  const router = useRouter()

  // console.log(route);
  if (route[route.length - 1] == "") {
    route = false;
  }
  const btnRef = useRef(null);

  // const handleMouseMove = (e) => {
  //   const x = e.pageX - btnRef.current.offsetLeft;
  //   const y = e.pageY - btnRef.current.offsetTop;

  //   btnRef.current.style.setProperty("--x", `${x}px`);
  //   btnRef.current.style.setProperty("--y", `${y}px`);
  // };
  return (

    <div className="banner_section_main">
      <Container fluid className="container-width-2">
        <Row className="items-center py-[10px] px-0">
          <Col md={7}>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.3",
              }}
            >
              {!route ? <img className="agent-image" src="/images/header-description.png" /> : null}
            </motion.h1>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.3",
              }}
            >
              {heading}
            </motion.h1>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.4",
              }}
            >
              {subHeading}
            </motion.h1>
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.5",
              }}
              dangerouslySetInnerHTML={{ __html: text }}
            >
              {/* {text} */}
            </motion.p>
            {/* <motion.button
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.6",
              }}
              onMouseMove={handleMouseMove}
              ref={btnRef}
              className="btn hover:text-black bg-red-primary md:text-[14px]  lg:text-[16px] xl:text-[18px] text-white border border-black w-max px-6 py-[0.6rem] lg:px-5 lg:py-[16px] shadow-[10px_9px_0px_1px_#111]"
            >
              <span>READ MORE</span>
            </motion.button> */}
            <Link href={navigate}>
              <ReusableButton
                buttonText="START A PROJECT"
              // onClick={(e) => { e.preventDefault(); router.push(navigate) }}
              // btnRef={{}}
              // onMouseMove={() => { }}
              // additionalClasses="your-custom-classes"
              />
            </Link>
          </Col>
          <Col md={5} className="d-flex justify-content-center">
            {/* <div className="banner_img_box"> */}
            <Image src={img} className="banner-img" />
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
