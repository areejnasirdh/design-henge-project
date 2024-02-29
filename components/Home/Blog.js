import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";
import { Container } from "react-bootstrap";
import FirstBlog from "../../public/images/first-blog.png";

const blogData = [
  {
    id: 0,
    desc: "The Ultimate Guide to Scaling Your Small Business: Tips from Top Entrepreneurs",
    img: "first-blog.png",
    date: "18 Jan 2022",
  },
  {
    id: 1,
    desc: "Breaking the Mold: Innovative Strategies for Startup Success",
    img: "second-blog.png",
    date: "18 Jan 2022",
  },
  {
    id: 2,
    desc: "The Branding Blueprint: Secrets to Unlocking Explosive Growth",
    img: "third-blog.png",
    date: "18 Jan 2022",
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
              <h3>BLOG</h3>
              <h4>LATEST ARTICLES</h4>
            </div>
          </div>
        </Container>
      </div>
      <Container fluid className="container-width">
        <div className="grid gap-20 md:grid-cols-3 md:gap-6 lg:gap-10 xl:gap-20 pb-[60px]">
          {blogData.map(({ desc, img, id, date }, idx) => (
            <BlogCard key={idx} desc={desc} img={img} id={id} date={date} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default Blog;
