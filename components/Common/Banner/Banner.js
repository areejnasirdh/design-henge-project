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

const Banner = ({ heading, second, third, text, img, navigate, stempt, h2 }) => {
  const pathname = usePathname();
  let route = pathname.split("/");
  const router = useRouter();

  if (route[route.length - 1] == "") {
    route = false;
  }
  const btnRef = useRef(null);
  return (
    <>
      <div className="page-banner w-full">
        <Container fluid className="container-width-2">
          <Row className="items-center">
            <Col xl={7}>
              {stempt === true && (
                <motion.img
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: "0.5",
                    delay: "0.3",
                  }}
                  src="/images/header-description.png"
                  width={290}
                  height={50}
                  alt=""
                />
              )}
              <motion.h1
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: "0.5",
                  delay: "0.3",
                }}
                className="mt-4"
              >
                {heading}
              </motion.h1>
              {second != "" && (
                <motion.h1
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: "0.5",
                    delay: "0.4",
                  }}
                >
                  {second}
                </motion.h1>
              )}
              {third != "" && (
                <motion.h1
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: "0.5",
                    delay: "0.4",
                  }}
                >
                  {third}
                </motion.h1>
              )}
              {h2 && (
                <motion.h2
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: "0.5",
                    delay: "0.4",
                  }}
                >
                  {h2}
                </motion.h2>
              )}

              <motion.p
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: "0.5",
                  delay: "0.5",
                }}
              >
                {text}
              </motion.p>
              {navigate != "" && (
                <Link href={navigate} className="btn-container">
                  <ReusableButton buttonText="START A PROJECT" />
                </Link>
              )}
            </Col>
            <Col
              xl={5}
              lg={4}
              className="hidden xl:flex justify-content-center"
            >
              <Image src={img} className="banner-img" width={500} height={100} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
