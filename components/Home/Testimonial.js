import Image from "next/image";
import React, { useState } from "react";

function Testimonial({ testimonial, name, position, img, logo }) {
  const [stars] = useState(Array(4).fill(""));

  return (
    <div className="relative border-4 border-black testimonial-container bg-white h-full flex items-center justify-center py-[50px]">
      <blockquote className="w-[80%] m-0">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center space-x-3">
              <div className="flex justify-center gap-0.5 text-red-primary">
                {stars.map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 italic font-light font-gray-600 text-[15px] md:text-[25px]">
          &quot;{testimonial}&quot;
        </p>
        <div className="flex mt-5 w-full justify-between items-center">
          <div className="flex items-center">
            <div className="w-[80px] h-full rounded-full">
              {/* <div className="bg-white w-[98%] h-[98%] rounded-full overflow-hidden absolute left-[-4px] top-[-3px]"> */}
              <Image
                src={`/images/${img}`}
                width={100}
                height={100}
                alt=""
                className="object-cover w-full h-full"
              />
              {/* </div> */}
            </div>
            <div className="ml-4">
              <p className="mt-1 text-lg md:text-4xl font-bebas font-medium flex items-center">
                {name}
              </p>
              <div className="flex space-x-2 items-center">
                <div className="border-t-2 border-red-primary w-6"></div>
                <p className="text-black text-xs md:text-sm font-light">
                  {position}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-[100px] h-[50px]">
            <Image src={`/images/${logo}`} alt="logo" width={100} height={100} className="w-full h-full object-contain" />
          </div>
        </div>
      </blockquote>
    </div>
  );
}

export default Testimonial;
