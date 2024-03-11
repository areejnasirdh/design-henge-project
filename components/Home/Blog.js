import React from "react";
import BlogCard from "./BlogCard";
import { Container } from "react-bootstrap";

const blogData = [
  {
    id: 0,
    desc: "The Ultimate Guide to Scaling Your Small Business: Tips from Top Entrepreneurs",
    img: "first-blog.jpg",
    date: "18 Jan 2023",
  },
  {
    id: 1,
    desc: "Breaking the Mold: Innovative Strategies for Startup Success",
    img: "second-blog.jpg",
    date: "20 Sep 2023",
  },
  {
    id: 2,
    desc: "The Branding Blueprint: Secrets to Unlocking Explosive Growth",
    img: "third-blog.jpg",
    date: "4 Mar 2023",
  },
];

function Blog() {
  return (
    <>
      <div className="home_blog_main py-[60px]">
        <Container fluid className="container-width">
          <div
            id="case-study"
            className="pt-0 flex flex-col space-y-7 mx-auto max-w-[90rem] "
          >
            <div className="d-flex flex-column align-items-center">
              <h3 className="text-cenetr blueGrayHeading">TECH INSIGHTS</h3>
            </div>
          </div>
        </Container>
      </div>
      <Container fluid className="container-width mb-5">
        <div className="flex justify-around flex-wrap">
          {blogData.map(({ desc, img, id, date }, idx) => (
            <BlogCard key={idx} desc={desc} img={img} id={id} date={date} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Blog;
