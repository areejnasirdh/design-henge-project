import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TopRated from "../../public/images/seo-blog.png";
import Clutch from "../../public/images/clutch.png";
import Image from "next/image";
import Acheivement from "../../public/images/acheivement-1.png";

const Acheivements = () => {
  return (
    <div className="acheivements_main">
      <Container fluid className="container-width">
        <Row className="justify-content-center">
          <Col className="d-flex flex-col items-center text-center mb-3">
            <h1 className="blackGrayHeading">OUR ACHIEVEMENTS</h1>
            <p className="text-white md:w-[590px] mt-3 font-light">
              We are your one-stop solution to all your business misery. Breath
              a new air into your dying business, let's walk the talk.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={10}>
            <div className="acheivement_box">
              <Row>
                <Col md={6}>
                  <h5>A Digital Agency with a Commitment to Excellence</h5>
                  <p className="pt-3">
                    Design Henge has consistently earned recognition as a
                    reputed agency. We continuously refine our processes to
                    maintain our position as the preferred full-service agency
                    that does it all for our clients.
                  </p>
                  <p>
                    Our commitment to excellence drives us to continually
                    deliver exceptional results.
                  </p>
                </Col>
                <Col md={6}>
                  <div className="d-flex justify-content-center align-items-center gap-4 mb-2">
                    <Image src={Clutch} />
                    <Image src={TopRated} />
                  </div>
                  <div>
                    <Image src={Acheivement} />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Acheivements;
