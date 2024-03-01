"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Form,
  Dropdown,
  NavLink,
} from "react-bootstrap";
import Logo from "../../../public/images/logo.gif";
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";
import { useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MenuBtn from "../../../public/images/menu-btn.png";
import ReusableButton from "../Banner/hoverbuttonclass";
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation";
import animatedImage from "../../../public/images/2Design-Henge-UI-sircle.gif"

const Navbr = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    handleMouseLeave();
  }, [router?.pathname]);

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const navbarRef = useRef();
  //   const { pathname: path } = router();
  const path = "";
  useEffect(() => {
    if (
      path === "/" ||
      path === "/about-us" ||
      path === "/services" ||
      path === "/case-study"
    )
      navbarRef.current.style.width = "0%";
  }, [path]);

  const NavHandler = () => {
    if (navbarRef.current.style.width === "100%")
      navbarRef.current.style.width = "0%";
    else navbarRef.current.style.width = "100%";
  };


  return (
    <>
      <Sidebar navbarRef={navbarRef} NavHandler={NavHandler} />

      <div className="header_main">
        <section className="nav_section">
          <Navbar collapseOnSelect expand="lg" className="navbar_main hidden lg:block">
            <Container fluid className="container-width-2">
              <Navbar.Brand href="/" className="h-[90px]">
                <Image src={Logo} alt="logo" className="w-full h-full object-contain" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={NavHandler}
              />
              <Navbar.Collapse id="basic-navbar-nav" in={isMenuOpen}>
                <Nav
                  className="flex justify-end"
                  id="right_side_nav"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    href="/"
                    className={`nav-item relative ${pathname === "/" ? "nav-active" : ""}`}
                  // onMouseEnter={() => handleMouseLeave()}
                  >
                    Home
                    <Image src={animatedImage} className=" h-full absolute nav-hover-image"  resizeMode="contain" />
                  </Link>

                  <Link
                    href="/about-us"
                    className={`nav-item relative ${pathname === "/about-us" ? "nav-active" : ""}`}
                  // onMouseEnter={() => handleMouseLeave()}
                  >
                    About Us
                    <Image src={animatedImage} className="w-full h-full absolute  nav-hover-image " />
                  </Link>

                  <Link
                    href="/services"
                    className={`nav-item relative ${pathname === "/services" ? "nav-active" : ""}`}
                  // onMouseEnter={() => handleMouseLeave()}
                  >
                    Services
                    <Image src={animatedImage} className="w-full h-full absolute  nav-hover-image " />
                  </Link>

                  <Link
                    href="/case-study"
                    // onMouseEnter={() => handleMouseLeave()}
                    className={
                      (pathname === "/case-study" || pathname === "/case-study/Zego" || pathname === "/case-study/Victek" || pathname === "/case-study/yummegurlo" || pathname === "/case-study/BookLover" || pathname === "/case-study/DreamShot" || pathname === "/case-study/orange-county" || pathname === "/case-study/Power_atm" || pathname === "/case-study/Speakable") ? "nav-active relative nav-item" : "relative nav-item"
                    }
                  >
                    Case study
                    <Image src={animatedImage} className="w-full h-full absolute  nav-hover-image " />
                  </Link>
                  <Link
                    href="/contact-us"
                    // onMouseEnter={() => handleMouseLeave()}
                    className={`nav-item relative ${pathname === "/contact-us" ? "nav-active" : ""}`}
                  >
                    Contact Us
                     <Image src={animatedImage} className="w-full h-full absolute  nav-hover-image " />
                  </Link>
                  <Link
                    href="/contact-us"
                  // onMouseEnter={() => handleMouseLeave()}
                  // className={
                  //   router.pathname === "/contact-us" ? "nav-active" : ""
                  // }
                  >
                    +1 (917) 310-1802
                  </Link>
                  <ReusableButton
                    buttonText="GET IT TOUCH"
                    // handleMouseMove={handleMouseMove}
                    // btnRef={btnRef}
                    onClick={() => router.push("/contact-us")}
                    additionalClasses="mt-0 nav-btn p-[10px] "
                  />
                </Nav>
              </Navbar.Collapse>
              <Image className="hamburger"
                src={MenuBtn}
                width={50}
                height={30}
                style={{ cursor: "pointer" }}
                onClick={NavHandler}
              />
            </Container>
          </Navbar>
        </section>
      </div>
    </>
  );
};

const SVGimage = () => {
  return <div className="w-full h-full bg-transparent absolute top-[-8px] left-[-8px] box-content">
    {/* <div className="w-full h-full border-1 border-orange-400"></div> */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.38 52.35" className="w-[-webkit-fill-available] h-full">
      <defs>
        <style>{`
        .cls-1 { fill: none; stroke: #dfbe45; stroke-width: 4; stroke-dasharray: 266; stroke-dashoffset: 500; animation: draw 5s forwards; }
        @keyframes draw { to { stroke-dashoffset: 0; } }
      `}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="artwork">
          <path className="cls-1" d="M71,52.35c-13.62-.25-27.18-.79-40.21-5.26a30.7,30.7,0,0,1-7.29-3.7c-8.29-5.68-8.23-16.1.13-21.61C31.32,16.7,40.1,14.53,49,13.14c19.27-3,38.44-1.63,57.53,1.78,1.88.33,4.17.38,3.67,3.32s-2.08,3.78-5.09,3.55c-13.17-1-26.36-2.32-39.55-2.46a80.38,80.38,0,0,0-35.24,7.3,38.29,38.29,0,0,0-7.08,4.69c-2.42,1.89-2.22,4.29.5,5.36,5.46,2.16,11,4.62,16.74,5.48A214.73,214.73,0,0,0,110.66,41a52.26,52.26,0,0,0,13.76-4.91c5.35-2.66,5.91-7.58,2-12.16a28.79,28.79,0,0,0-15.08-9A235.17,235.17,0,0,0,83.55,9.36C68,7.36,52.38,7.49,36.94,11.08A99.38,99.38,0,0,0,6.63,23.34c-1.84,1.15-3.87,3.15-5.88.27-1.49-2.13-.72-4.88,2-6.73A87.79,87.79,0,0,1,30.39,4.47C57.27-2.52,84-.84,110.53,6.24A52.7,52.7,0,0,1,125,13c13.48,8.66,8.69,22.64-.50,29.56-6.37,4.78-14.11,6.23-21.82,7.41-3.38.52-6.77,1-10.18,1.26C85.35,51.7,78.18,52,71,52.35Z" />
        </g>
      </g>
    </svg>
  </div>
}

export default Navbr;
