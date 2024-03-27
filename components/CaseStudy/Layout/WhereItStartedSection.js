import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhereItStartedSection = ({Img ,text, heading}) => {
  return (
    <div className="where_it_started_main">
      <Container fluid className="container-width-2">
        <Row className="justify-content-center">
          <Col md={10} className="d-flex flex-col items-center">
            <div className="where_it_started_img_container">
              <Image src={Img} className="absolute bottom-0 w-[90%]" width={500} height={500} />
            </div>
            <h1 className="stroke1">{heading}</h1>
            <p className="text-white text-center">
              {text}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};



export default WhereItStartedSection