"use client"
import React from "react";
import { Container, Row } from "react-bootstrap";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import { useRouter } from "next/navigation";

const WhenWeStarted = () => {
  const router = useRouter();
  return (
    <div className="when_we_started_main">
      <Container fluid className="container-width-2">
        <div className="d-flex flex-col justify-content-center align-items-center">

          <h2 className="stroke3">
            14 years of building digital products and we are
          </h2>
          <h2 className="stroke3">just getting started!</h2>
          <ReusableButton
            buttonText="START A PROJECT"
            handleMouseMove={() => router.push("/contact-us")}
            // btnRef={btnRef}
            additionalClasses="your-custom-classes"
          />
          {/* <button className="cta_btn" >START A PROJECT</button> */}
        </div>
      </Container>
    </div>
  );
};

export default WhenWeStarted;
