"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ReusableButton from "../Common/Banner/hoverbuttonclass";
import { useRouter } from "next/navigation";

function BlogCard({ desc, img, id, date }) {
  const btnRef = useRef(null);
  const router = useRouter();

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
    <div className="blog_card w-[350px] mb-[40px] md:mr-4">
      <div className="w-full h-[200px] bg-[#edbf33] relative border-2 border-black">
        <div className="w-full h-[200px] bg-white absolute right-2 bottom-2 border-2 border-black">
          <Image
            src={`/images/${img}`}
            width={700}
            height={700}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex-flex-col space-y-4 lg:w-full mt-3">
        <h4 className="font-[400] hover:text-[#0097d9]">{desc}</h4>
        <p className="text-[12px] text-gray-500 mt-2 font-light">{date}</p>
      </div>

      <ReusableButton
        buttonText="READ FULL BLOG"
        handleMouseMove={handleMouseMovebutton}
        btnRef={btnRef}
        onClick={() => router.push(`/blog/${desc}`)}
        additionalClasses="your-custom-classes"
      />
    </div>
  );
}

export default BlogCard;
