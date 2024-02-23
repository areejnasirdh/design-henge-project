import React, { Component } from "react";
import Slider from "react-slick";
// import './HomeSlider.css';

const SliderContent = [
  {
    icon: "/images/service-logo-designing.png",
    title: "LOGO DESIGNING",
    subtext: "We fuse creativity with strategic insight to craft distinctive visual identities that reflect your brand's essence."
  },
  {
    icon: "/images/service-branding.png",
    title: "Development",
    subtext: "We offer tailored solutions across website development, ecommerce store development, web application and more."
  },
  {
    icon: "/images/service-branding.png",
    title: "Mobile Apps",
    subtext: "Programming futuristic mobile apps that are compatible & optimized for usability."
  },
  {
    icon: "/images/service-designing.png",
    title: "Marketing",
    subtext: "We elicit the insight necessary to have significant effect, based on a thorough grasp of the business."
  }
];

function Card({icon, title, subtext}) {
  return (
    <div className="d-flex justify-center items-center">
    <div className="SliderCard">
      {/* <div className="Icon"> */}
        <img src={icon} alt="icon"/>
      {/* </div> */}
      <div >
        <h4>{title}</h4>
        <p>{subtext}</p>
      </div>
    </div>
    </div>
  );
}

export default class HomeSlider extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.currentSlide !== prevProps.currentSlide) {
      const currentSlideIndex = SliderContent.findIndex(slide => slide.title === this.props.currentSlide);
      if (currentSlideIndex !== -1) {
        this.slider.slickGoTo(currentSlideIndex, true);
      }
    }
  }

  handleSlideChange = (currentSlide) => {
    const { title } = SliderContent[currentSlide];
    this.props.onSlideChange(title);
  };

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            dots: false
          }
        }
      ]
    };
    return (
      <div
        className="HomeSlider"
      >

      <Slider
        {...settings}
        afterChange={this.handleSlideChange}
        ref={(slider) => (this.slider = slider)}
        >
        {SliderContent.map((slider) => (
          <Card key={slider.title} icon={slider.icon} title={slider.title} subtext={slider.subtext} />
        ))}
      </Slider>
          </div>
    );
  }
}