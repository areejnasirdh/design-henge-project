"use client";
import React, { useEffect, useState } from "react";
import BannerSection from "../CaseStudy/Layout/BannerSection";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import axios from "axios";

const ContactBanner = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [toast, setToast] = useState(false);

  const handleEmail = async (e, data) => {
    e.preventDefault();
    await axios.post("/api/send-email", data).then(()=>{
      setToast(true);
    }).catch((error)=>{
      console.log(error, "error")
    });
  };

  const handleChange = (name) => (e) => {
    // console.log(name, e.target.value);
    setContactDetails((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmail(e, contactDetails);

    setContactDetails({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setToast(false);
    }, 2000);
  }, [toast]);

  return (
    <div className="contact_banner_section_main">
      <Container fluid className="container-width-2">
        <Row className="justify-between">
          <Col
            xl={6}
            lg={5}
            className="pt-5 pt-md-0 d-flex flex-col justify-content-center"
          >
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.3",
              }}
            >
              LET’S START A PROJECT
            </motion.h1>
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.3",
              }}
              className="mt-3"
            >
              TOGETHER
            </motion.h1>
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: "0.5",
                delay: "0.4",
              }}
            >
              We'll contact you within a couple of hours to schedule a meeting
              to discuss your goals. Sit back and one of our representative will call to discuss your project.
            </motion.p>
          </Col>
          <Col
            xl={5}
            lg={6}
            className="d-flex justify-content-center align-items-center mt-4"
          >
            <div className="d-flex justify-end py-3 w-full">
              <div className="home_contact_form w-full md:w-[29rem] px-6 py-6 lg:pl-10 lg:pr-10 lg:py-10 flex justify-center">
                <div>
                  <h3>Book a Free Consultation</h3>
                  <form className="pt-4 pb-3" onSubmit={handleSubmit}>
                    <Row className="gx-5 gy-3">
                      <Col md={12} className="d-flex flex-col">
                        <div className="input">
                          <input
                            placeholder="Full Name"
                            required
                            value={contactDetails.name}
                            onChange={handleChange("name")}
                          />
                        </div>
                      </Col>
                      <Col md={12} className="d-flex flex-col">
                        <div className="input">
                          <input
                            type="email"
                            placeholder="Email"
                            required
                            value={contactDetails.email}
                            onChange={handleChange("email")}
                          />
                        </div>
                      </Col>
                      <Col md={12} className="d-flex flex-col py-2">
                        <div className="input">
                          <input
                            type="number"
                            placeholder="Phone Number"
                            required
                            value={contactDetails.phone}
                            onChange={handleChange("phone")}
                          />
                        </div>
                      </Col>
                      <Col md={12} className="d-flex flex-col py-2">
                        <label>Message</label>
                        <div className="input">
                          <textarea
                            className="relative h-[50px] px-2 box-border w-full outline-none"
                            required
                            value={contactDetails.message}
                            onChange={handleChange("message")}
                          />
                        </div>
                        {toast && (
                          <h2
                            className={`transition-all ${
                              toast ? "opacity-100" : "opacity-0"
                            } text-white mt-2 text-xs bg-green-500 py-2 text-center`}
                          >
                            Form Submitted
                          </h2>
                        )}
                      </Col>
                      <div className="flex justify-center">
                        <ReusableButton
                          type="submit"
                          buttonText="GET IN TOUCH"
                          additionalClasses="your-custom-classes"
                        />
                      </div>
                      {/* <ToastContainer /> */}
                    </Row>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactBanner;
