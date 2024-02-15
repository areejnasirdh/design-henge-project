"use client";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import React from "react";
// import { useRouter } from "next/router";
import { useState } from "react";

function Sidebar({ navbarRef, NavHandler }) {
  const router = () => {};
  const [isDesignOpen, setIsDesignOpen] = useState(false);
  const [isMarketingOpen, setIsMarketingOpen] = useState(false);
  const [isDevelopmentOpen, setIsDevelopmentOpen] = useState(false);
  const [isPrintOpen, setIsPrintOpen] = useState(false);

  return (
    <div
      className="overlay"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      ref={navbarRef}
    >
      <span className="closebtn" onClick={NavHandler}>
        <MdClose />
      </span>
      <div className={"overlay-content"}>
        <Link
          href="/"
          className={router.pathname === "/" ? "nav-active " : "nav-link"}
        >
          <span className="overlay-content-number">01 - </span>Home
        </Link>
        <Link
          href="/about-us"
          className={
            router.pathname === "/about-us" ? "nav-active" : "nav-link"
          }
        >
          <span className="overlay-content-number">02 - </span> About Us
        </Link>

        <Link
          href="/services"
          className={
            router.pathname === "/services" ? "nav-active" : "nav-link"
          }
        >
          <span className="overlay-content-number">03 - </span> Services
        </Link>

        {/* Service dropdown started */}
        {/* <div className="overlay-dropdown-container">
          <div className="overlay-dropdown-item">
            <h5
              className="dropdown-arrow-container"
              onClick={() => {
                setIsDesignOpen((prev) => !prev);
                setIsPrintOpen(false);
                setIsDevelopmentOpen(false);
                setIsMarketingOpen(false);
              }}
            >
              Design {isDesignOpen ? "-" : "+"}
            </h5>
            {isDesignOpen && (
              <div className="links_container">
                <Link
                  href={"/services/logo-design"}
                  className={
                    router.pathname === "/services/logo-design"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Logo Design
                </Link>
                <Link
                  href={"/services/branding"}
                  className={
                    router.pathname === "/services/branding"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Brand & Visual Design{" "}
                </Link>
                <Link
                  href={"/services/website-ui-ux-design"}
                  className={
                    router.pathname === "/services/website-ui-ux-design"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  UI/UX Design
                </Link>
                <Link
                  href={"/services/video-animation"}
                  className={
                    router.pathname === "/services/video-animation"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Video Animation
                </Link>
                <Link
                  href={"/services/mobile-app-design"}
                  className={
                    router.pathname === "/services/mobile-app-design"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Mobile App Design
                </Link>
              </div>
            )}
          </div>
          <div className="overlay-dropdown-item">
            <h5
              className="dropdown-arrow-container"
              onClick={() => {
                setIsDevelopmentOpen((prev) => !prev);
                setIsDesignOpen(false);
                setIsPrintOpen(false);
                setIsMarketingOpen(false);
              }}
            >
              Development {isDevelopmentOpen ? "-" : "+"}
            </h5>
            {isDevelopmentOpen && (
              <div className="links_container">
                <Link
                  href={"/services/website-development"}
                  className={
                    router.pathname === "/services/website-development"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Website Development
                </Link>
                <Link
                  href={"/services/website-redesign-development"}
                  className={
                    router.pathname === "/services/website-redesign-development"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Website Redesign Service{" "}
                </Link>
                <Link
                  href={"/services/web-app-development"}
                  className={
                    router.pathname === "/services/web-app-development"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Web App Development
                </Link>
                <Link
                  href={"/services/web-hosting"}
                  className={
                    router.pathname === "/services/web-hosting"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Web Hosting
                </Link>
                <Link
                  href={"/services/ecommerce-solution"}
                  className={
                    router.pathname === "/services/ecommerce-solution"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Ecommerce Solutions
                </Link>
                <Link
                  href={"/services/mobile-application-development"}
                  className={
                    router.pathname ===
                    "/services/mobile-application-development"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Mobile App Development
                </Link>
              </div>
            )}
          </div>
          <div className="overlay-dropdown-item">
            <h5
              className="dropdown-arrow-container"
              onClick={() => {
                setIsMarketingOpen((prev) => !prev);
                setIsDevelopmentOpen(false);
                setIsDesignOpen(false);
                setIsPrintOpen(false);
              }}
            >
              Digital Marketing {isMarketingOpen ? "-" : "+"}
            </h5>
            {isMarketingOpen && (
              <div className="links_container">
                <Link
                  href={"/services/search-engine-optimization"}
                  className={
                    router.pathname === "/services/search-engine-optimization"
                      ? "dropdown-nav-active"
                      : ""
                  }
                  
                >
                  Search Engine Optimization
                </Link>
                <Link
                  href={"/services/social-media-marketing-services"}
                  className={
                    router.pathname ===
                    "/services/social-media-marketing-services"
                      ? "dropdown-nav-active"
                      : ""
                  }
                  onClick={(e) => {
                    handleDropdownNavigation(
                      e,
                      "social-media-marketing-services"
                    );
                  }}
                >
                  Social Media Marketing
                </Link>
                <Link
                  href={"/services/paid-campaigns"}
                  className={
                    router.pathname === "/services/paid-campaigns"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Paid Campaigns(PPC)
                </Link>
                <Link
                  href={"/services/email-marketing"}
                  className={
                    router.pathname === "/services/email-marketing"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Email Marketing Services
                </Link>
                <Link
                  href={"/services/ecommerce-marketing"}
                  className={
                    router.pathname === "/services/ecommerce-marketing"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Ecommerce Marketing
                </Link>
              </div>
            )}
          </div>
          <div className="overlay-dropdown-item">
            <h5
              className="dropdown-arrow-container"
              onClick={() => {
                setIsPrintOpen((prev) => !prev);
                setIsDesignOpen(false);
                setIsDevelopmentOpen(false);
                setIsMarketingOpen(false);
              }}
            >
              Print {isPrintOpen ? "-" : "+"}
            </h5>
            {isPrintOpen && (
              <div className="links_container">
                <Link
                  href={"/services/t-shirt-design"}
                  className={
                    router.pathname === "/services/t-shirt-design"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  T-Shirt Design
                </Link>
                <Link
                  href={"/services/invitation-design"}
                  className={
                    router.pathname === "/services/invitation-design"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Invitation Card Design
                </Link>
                <Link
                  href={"/services/flyer-design"}
                  className={
                    router.pathname === "/services/flyer-design"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Flyer Design
                </Link>
                <Link
                  href={"/services/brochure-design"}
                  className={
                    router.pathname === "/services/brochure-design"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Brochure Design
                </Link>
                <Link
                  href={"/services/catalogue-design"}
                  className={
                    router.pathname === "/services/catalogue-design"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Catalogue Design
                </Link>
                <Link
                  href={"/services/menu-design"}
                  className={
                    router.pathname === "/services/menu-design"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Menu Design
                </Link>
                <Link
                  href={"/services/poster-design"}
                  className={
                    router.pathname === "/services/poster-design"
                      ? "dropdown-nav-active"
                      : ""
                  }
                >
                  Poster Design
                </Link>
              </div>
            )}
          </div>
        </div> */}
        {/* Service dropdown ended */}
        <Link
          href="/case-study"
          className={
            router.pathname === "/case-study" ? "nav-active" : "nav-link"
          }
        >
          <span className="overlay-content-number">04 - </span>Case Study
        </Link>
        <Link
          href="/contact-us"
          className={
            router.pathname === "/contact-us" ? "nav-active" : "nav-link"
          }
        >
          <span className="overlay-content-number">06 - </span>Contact Us
        </Link>
        {/* <Link
          href="/get-a-quote"
          className={
            router.pathname === "/contact-us" ? "nav-active" : "nav-link"
          }
        >
          <button className="header_get_quote_btn">Get A Quote</button>
        </Link> */}
      </div>
    </div>
  );
}

export default Sidebar;
