import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";
import { Container } from "react-bootstrap";

const blogData = [
  {
    title: "01 Article Name Here",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    img: "blog-1",
  },
  {
    title: "02 Article Name Here",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    img: "blog-2",
  },
  {
    title: "03 Article Name Here",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    img: "blog-3",
  },
];

function Blog() {
  return (
    <div className="home_blog_main py-[60px]">
      <Container fluid className="container-width">

    <div
      id="case-study"
      className="pt-0 flex flex-col space-y-7 mx-auto max-w-[90rem] "
    >
      <div className="d-flex flex-column align-items-center">
        <h3>BLOG</h3>
        <h4>LATEST ARTICLES</h4>
        {/* <div className="d-flex align-items-center mt-1">
          <div className="w-10 h-1 bg-red-500 mr-2 "></div>
          <p>Blogs and Inspiration</p>
        </div> */}
      </div>

      <div className="grid gap-20 md:grid-cols-3 md:gap-6 lg:gap-10 xl:gap-20">
        {blogData.map(({ title, desc, img }, idx) => (
          <BlogCard key={idx} title={title} desc={desc} img={img} />
        ))}
      </div>
    </div>
    </Container>

    </div>

  );
}

export default Blog;
