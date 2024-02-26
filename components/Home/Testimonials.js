"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import { CustomNextArrow, CustomPrevArrow } from "./CustomSliderArrows";
import { Container } from "react-bootstrap";
import { usePathname } from "next/navigation";

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
      "Working with Design Henge was an absolute pleasure. Their team's web design and development expertise resulted in a stunning website that perfectly represents our brand. Highly recommended!",
    name: "Emily Johnson",
    position: "CEO of Stellar Solutions",
  },
  {
    testimonial:
      "Working with Design Henge was an absolute pleasure. Their team's web design and development expertise resulted in a stunning website that perfectly represents our brand. Highly recommended!",
    name: "David Miller",
    position: "Marketing Manager at Fusion Tech",
  },
  {
    testimonial:
      "Design Henge's SEO services have been a game-changer for our online presence. They helped us rank higher in search results and attract more organic traffic. Thanks, Design Henge!",
    name: "Samantha Collins",
    position: "Director of Marketing at BrightSpark Co.",
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
                {testimonials.map(({ testimonial, name, position }, idx) => (
                  <>
                    <Testimonial
                      key={idx}
                      testimonial={testimonial}
                      name={name}
                      position={position}
                    />
                  </>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </div>)}
  </>
}

export default Testimonials;
