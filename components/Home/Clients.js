"use client"
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CLient1 from "../../public/images/client.png"
import Marquee from "react-fast-marquee";


const Clients = () => {
  return (
    <div className="clients_main">
      <Container fluid className="pe-0 ps-0 overflow-hidden">
        <Row>
          <Col md={5}>
            <div className="d-flex flex-column justify-content-center h-full pl-3 md:pl-[60px]">
              <h3>CLIENTS</h3>
              <h4>OUR VALUABLE PARTNERS</h4>
              <div className="d-flex align-items-center mt-1 bott0m-line">
                <div className="w-8 h-[3px] bg-red-500 mr-2 "></div>
                <p className="font-medium">Brands We Worked For</p>
              </div>
            </div>
          </Col>
          <Col md={7} className="mt-4 mt-md-0">
            <Row className="relative" >
              <Col >
                {/* <div className="absolute bottom-0 z-10 md:bottom-[29px] left-0 bg-gradient-to-r from-white to-transparent  w-48 md:w-[10rem] h-[8rem] lg:w-[14rem] 2xl:w-[13rem] 2xl:h-[10rem]" /> */}
                <Marquee direction="right" autoFill>
                  <div className="flex items-center gap-6 md:gap-16 pt-10 px-10 -mt-10 h-[150px]">
                    <Image
                      src="/images/client-img1.png"
                      width={70}
                      height={70}
                      alt=""
                      className="mx-auto 2xl:w-16"
                    />
                    <Image
                      src="/images/client-img2.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                    <Image
                      src="/images/client-img3.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                    <Image
                      src="/images/client-img4.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-40"
                    />
                    <Image
                      src="/images/client-img5.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                    <Image
                      src="/images/client-img6.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                    <Image
                      src="/images/client-img7.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                    <Image
                      src="/images/client-img8.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                     <Image
                      src="/images/client-img9.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                     <Image
                      src="/images/client-img10.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                  </div>
                </Marquee>
                {/* <div className="absolute bottom-0 z-10  md:bottom-[29px] right-0 bg-gradient-to-l from-white to-transparent  w-36 md:w-[10rem] h-[8rem] lg:w-[14rem] 2xl:w-[18rem] 2xl:h-[10rem]" /> */}
              </Col>
            </Row>
            <Row className="relative" >
              <Col >
                {/* <div className="absolute bottom-0 z-10 md:bottom-[29px] left-0 bg-gradient-to-r from-white to-transparent  w-48 md:w-[10rem] h-[8rem] lg:w-[14rem] 2xl:w-[13rem] 2xl:h-[10rem]" /> */}
                <Marquee direction="left" autoFill>
                  <div className="flex items-center gap-6 md:gap-16 pt-10 px-10 -mt-10 h-[150px]">
                  <Image
                      src="/images/client-img11.png"
                      width={70}
                      height={70}
                      alt=""
                      className="mx-auto 2xl:w-16"
                    />
                    <Image
                      src="/images/client-img12.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                    <Image
                      src="/images/client-img13.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                    <Image
                      src="/images/client-img14.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-40"
                    />
                    <Image
                      src="/images/client-img15.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                    <Image
                      src="/images/client-img16.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                    <Image
                      src="/images/client-img17.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                    <Image
                      src="/images/client-img18.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                     <Image
                      src="/images/client-img19.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                     <Image
                      src="/images/client-img20.png"
                      width={100}
                      height={100}
                      alt=""
                      className="mx-auto 2xl:w-32"
                    />
                  </div>
                </Marquee>
                {/* <div className="absolute bottom-0 z-10  md:bottom-[29px] right-0 bg-gradient-to-l from-white to-transparent  w-36 md:w-[10rem] h-[8rem] lg:w-[14rem] 2xl:w-[18rem] 2xl:h-[10rem]" /> */}
              </Col>
            </Row>
            {/* <Row className="gx-0">
              <Col md={4}>
                <Image src={CLient3}/>

              </Col>
              <Col md={4}>
                <Image src={CLient6}/>

              </Col>
              <Col md={4}>
                <Image src={CLient4}/>

              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Clients;
