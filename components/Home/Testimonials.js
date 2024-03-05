"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import { CustomNextArrow, CustomPrevArrow } from "./CustomSliderArrows";
import { Container } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Testi1Logo from "../../public/images/testi-logo-1.png"

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // lazyLoad: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        arrows: false,
        dots: false,
      },
    },
  ],
};

const testimonials = [
  {
    testimonial:
      "The team at Design Henge completely transformed our online presence! Their creativity and attention to detail really help put our brand out there. We couldn't be happier.",
    name: "- Sarah M.",
    position: "CEO",
    img: "testimonial-1.png",
    logo: "testi-logo-1.png"
  },
  {
    testimonial:
      "Design Henge are experts at what they do. Their digital marketing helped us 5x our initial investment. They are highly professional and always exceed expectations.",
    name: "- John D",
    position: "Marketing Manager",
    img: "testimonial-2.png",
    logo: "testi-logo-2.png"
  },
  {
    testimonial:
      "I can't recommend Design Henge enough for their Social Media Marketing! From start to finish of our project, they were communicative, responsive, and dedicated.",
    name: "- Gorgio K.",
    position: "Social Media Manager",
    img: "testimonial-3.png",
    logo: "testi-logo-3.png"
  },
  {
    testimonial:
      "Our website has been given a new life, Their innovative designs and strategic approach helped us go live with our website so much quicker. We're grateful for their partnership.",
    name: "- Michael L.",
    position: "Brand Manager",
    img: "testimonial-4.png",
    logo: "testi-logo-4.png"
  },
  {
    testimonial:
      "Thank you Design Henge for boosting our traffic in such a short span of time. Love their approach and work ethic! Highly recommended for everything related to digital marketing.",
    name: "- Jessica W.",
    position: "Co-Founder",
    img: "testimonial-5.png",
    logo: "testi-logo-5.png"
  },
];

function Testimonials() {
  const pathname = usePathname();
  const route = pathname.split("/");
  return <>
    {!route.includes("contact-us") && (
      <div className="testimonials py-[100px]">
        <Container fluid className="max-w-[1200px]">

          <div className="relative overflow-hidden flex flex-col justify-center  mx-auto max-w-[90rem] space-y-3 ">
            <div className="testimonial_slider mt-7 ">
              <Slider {...settings}>
                {testimonials.map(({ testimonial, name, position, img, logo }, idx) => (
                  <div key={idx}>
                    <Testimonial
                      key={idx}
                      testimonial={testimonial}
                      name={name}
                      position={position}
                      img={img}
                      logo={logo}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </div>)}
  </>
}

export default Testimonials;
