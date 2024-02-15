"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contactform = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-[95%] home_contact_form p-5 mb-3 flex flex-col md:w-[73%]">
        <h3 className="pl-[100px] contact-us-head">CONTACT US</h3>
        <form className="pl-[100px] pr-[125px] pt-[30px] pb-[30px] contact-us-form">
          <Row>
            <Col md={6} className="d-flex flex-col py-3">
              <label className="py-2">Name</label>
              <input placeholder="Name" />
            </Col>
            <Col md={6} className="d-flex flex-col py-3 md: sm:">
              <label className="py-2">Surname</label>
              <input placeholder="Name" />
            </Col>
            <Col md={6} className="d-flex flex-col py-3 md: sm:">
              <label className="py-2">Phone number</label>
              <input placeholder="Phone Number" />
            </Col>
            <Col md={6} className="d-flex flex-col py-3 md: sm:">
              <label className="py-2">Email</label>
              <input placeholder="Email" />
            </Col>
            <Col md={12} className="d-flex flex-col py-3 md: sm:">
              {/* <label className="py-2">Message</label>
              <input placeholder="Email" /> */}
              <div class="col-md-12 border-1 border-slate-950 pt-[6px] pl-[6px]">
                <textarea
                  rows="8"
                  placeholder="Message"
                  required=""
                  className="message-box"
                  style={{ width: "100%", outline: "none !important" }}
                ></textarea>
              </div>
            </Col>
            <Col>
              <button className="cta_btn px-3 py-2 my-3">GET IT TOUCH</button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
