"use client";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import React, { useRef } from "react";
import InfoCard from "./InfoCard";
import { Col, Container, Row } from "react-bootstrap";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import NumberCounter from "@/app/utils/numbercounter";
import { usePathname } from "next/navigation";

const InformationDH = [
  { img: "done", number: "10+", information: "Projects Done", symbol: "+" },
  {
    img: "thumbs-up",
    number: "12K+",
    information: "Feedback Done",
    symbol: "K+",
  },
  { img: "user", number: "10K+", information: "Total Users", symbol: "K+" },
];

function ContactUs() {

  const btnRef = useRef(null);
  const pathname = usePathname();
  const route = pathname.split("/");

  // const handleMouseMove = (e) => {
  //   const x = e.pageX - btnRef.current.offsetLeft;
  //   const y = e.pageY - btnRef.current.offsetTop;

  //   btnRef.current.style.setProperty("--x", `${x}px`);
  //   btnRef.current.style.setProperty("--y", `${y}px`);
  // };

  // const handleMouseMovebutton = (e) => {
  //   const x = e.pageX - btnRef.current.offsetLeft;
  //   const y = e.pageY - btnRef.current.offsetTop;

  //   btnRef.current.style.setProperty("--x", `${x}px`);
  //   btnRef.current.style.setProperty("--y", `${y}px`);
  // };

  return (
    <>
      {!route.includes("contact-us") ? (
        <div id="contact-us" className="contact py-[50px] ">
          <Container fluid className="container-width">
            <div className="flex flex-col md:flex-row justify-between mx-auto max-w-[90rem]">
              {/* title and four cards */}
              <div className="d-flex flex-col justify-content-between lg:w-[60%] md:w-[40%]">
                <h1 className="sm:text-center stroke2 font-outline-2 text-shadow-left-6 md:text-left font-bebas text-[45px] md:text-[50px] lg:text-[65px] xl:text-[6rem] 2xl:text-[80px] text-[#ededed] pt-2">
                  let’s build your next digital product
                </h1>
                <div className=" bg-[#171719] relative md:bg-inherit">
                  <div className="infocards flex justify-center md:justify-start space-x-6 md:space-x-6 lg:space-x-16 2xl:bottom-16">
                    {InformationDH.map(
                      ({ img, number, information, symbol }, idx) => (
                        <NumberCounter
                          startNumber={0}
                          img={img}
                          endNumber={parseInt(number)}
                          information={information}
                          duration={0.042}
                          symbol={symbol}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
              {/* form */}
              <div className="d-flex justify-end lg:w-[40%] md:w-[50%]">
                <div className="home_contact_form w-full md:w-[29rem] px-6 py-6 lg:pl-10 lg:pr-10 lg:py-10 flex justify-center">
                  <div >
                    <h3>LET'S GET STARTED WITH YOUR BRAND!</h3>
                    <form className="pt-4 pb-3">
                      <Row className="gx-5 gy-3">
                        <Col md={6} className="d-flex flex-col">
                          {/* <label>Name</label> */}
                          <input placeholder="Name" />
                        </Col>
                        <Col md={6} className="d-flex flex-col">
                          {/* <label>Surname</label> */}
                          <input placeholder="Sir Name" />
                        </Col>
                        <Col md={12} className="d-flex flex-col py-2">
                          <input placeholder="Phone Number" />
                        </Col>
                        <Col md={12} className="d-flex flex-col">
                          <input placeholder="Email" />
                        </Col>
                        <Col>
                          <ReusableButton
                            buttonText="GET IT TOUCH"
                            // handleMouseMove={handleMouseMovebutton}
                            // btnRef={btnRef}
                            onClick={()=> {}}
                            additionalClasses="your-custom-classes"
                          />
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <>
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="infocards flex justify-center md:justify-start space-x-6 md:space-x-6 lg:space-x-16 2xl:bottom-16">
              {InformationDH.map(
                ({ img, number, information, symbol }, idx) => (
                  <NumberCounter
                    startNumber={0}
                    img={img}
                    endNumber={parseInt(number)}
                    information={information}
                    duration={0.042}
                    symbol={symbol}
                  />
                )
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ContactUs;
