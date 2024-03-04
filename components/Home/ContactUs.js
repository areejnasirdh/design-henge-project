"use client";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import InfoCard from "./InfoCard";
import { Col, Container, Row } from "react-bootstrap";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import NumberCounter from "@/app/utils/numbercounter";
import { usePathname } from "next/navigation";
import axios from "axios";

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
  const pathname = usePathname();
  const route = pathname.split("/");

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
    });;
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
                  <div>
                    <h3>LET'S GET STARTED WITH YOUR BRAND!</h3>
                    <form className="pt-4 pb-3" onSubmit={handleSubmit}>
                      <Row className="gx-5 gy-3">
                        <Col md={12} className="d-flex flex-col">
                          {/* <label>Name</label> */}
                          <input
                            placeholder="Name"
                            value={contactDetails.name}
                            onChange={handleChange("name")}
                            required
                          />
                        </Col>

                        <Col md={12} className="d-flex flex-col py-2">
                          <input
                            placeholder="Phone Number"
                            value={contactDetails.phone}
                            type="number"
                            onChange={handleChange("phone")}
                            required
                          />
                        </Col>
                        <Col md={12} className="d-flex flex-col">
                          <input
                            placeholder="Email"
                            value={contactDetails.email}
                            onChange={handleChange("email")}
                            required
                            type="email"
                          />
                        </Col>

                        <Col md={12} className="d-flex flex-col py-2">
                          <label className="text-[#525151]">Message</label>
                          <div className="input border-b border-b-gray-500">
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
                        <Col>
                          <ReusableButton
                            buttonText="GET IN TOUCH"
                            // handleMouseMove={handleMouseMovebutton}
                            // btnRef={btnRef}
                            type="submit"
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
        <></>
      )}
    </>
  );
}

export default ContactUs;
