import React from "react";
import { Container, Row } from "react-bootstrap";

const WhenWeStarted = () => {
  return (
    <div className="when_we_started_main">
      <Container fluid className="container-width-2">
        <div className="d-flex flex-col justify-content-center align-items-center">

        <h2 className="stroke3">
          14 years of building digital products and we are
        </h2>
        <h2 className="stroke3">just getting started!</h2>
        <button className="cta_btn">START A PROJECT</button>
        </div>
      </Container>
    </div>
  );
};

export default WhenWeStarted;
