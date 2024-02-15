import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DashboardDesign = ({ Label1, Label2 }) => {
  return (
    <div className="label_design">
      <Container fluid className="overflow-hidden px-0">
        <h2 className="stroke1 text-start ml-[120px]">Dashboard Designs</h2>
        <Row className="justify-content-center gx-5">
          {Label2 ? (
            <>
              <Col md={6}>
                <Image src={Label1} />
              </Col>
              <Col md={6}>
                <Image src={Label2} className="h-full" />
              </Col>
            </>
          ) : (
            <Col md={12}>
              <Image src={Label1} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default DashboardDesign;
