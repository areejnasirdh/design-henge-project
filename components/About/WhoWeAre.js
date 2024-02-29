import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutImg2 from "../../public/images/about-img-2.png";


const WhoWeAre = () => {
  return (
    <div className="who_we_are_main" id='who_we_are_main'>
      <div className="d-flex flex-column align-items-center pt-4">
        <h4>WHO WE ARE</h4>
        
      </div>
      <div className="who_we_are_details mt-2 pb-5">
        <Container fluid className="container-width">
          <Row className='justify-around'>
            <Col md={6} lg={7}>
              <Image src={AboutImg2} />
            </Col>
            <Col md={6} lg={4} className="lg:pt-md-5 lg:px-4 md:px-2 px-0 content">
              <h6>
              The Team at Design Henge Prides Itself As The Frontrunners Of Innovation, Creativity And Growth!
              </h6>
              <p className='mt-3'>
              From our humble beginnings our agency has grown to serve thousands of global companies. With active clients spanning Canada, UK, Australia, New Zealand and the United States, we've become a trusted partner for businesses of all sizes and industries.
              </p>
              <div className='mt-[50px]'>
                <h5>MISSION</h5>
                <p className='mt-3'>Our mission is to prioritize a strategy-first approach to deliver tangible results. Our team is dedicated to not only generating new business but also long-term success.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default WhoWeAre