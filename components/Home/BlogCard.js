"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ReusableButton from "../Common/Banner/hoverbuttonclass";

function BlogCard({ title, desc, img }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const x = e.pageX - btnRef.current.offsetLeft;
    const y = e.pageY - btnRef.current.offsetTop;

    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseMovebutton = (e) => {
    const x = e.pageX - btnRef.current.offsetLeft;
    const y = e.pageY - btnRef.current.offsetTop;

    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className="flex-flex-col space-y-8 blog_card">
      <Image
        src={`/images/${img}.png`}
        width={700}
        height={700}
        alt=""
        className="object-contain w-full"
      />

      <div className="flex-flex-col space-y-4">
        <h1 className="font-bebas uppercase">
          {title}
        </h1>
        <p className="text-sm md:text-xs lg:text-sm font-light">{desc}</p>
      </div>

      <ReusableButton
        buttonText="READ MORE"
        handleMouseMove={handleMouseMovebutton}
        btnRef={btnRef}
        additionalClasses="your-custom-classes"
      />
    </div>
  );
}

export default BlogCard;
