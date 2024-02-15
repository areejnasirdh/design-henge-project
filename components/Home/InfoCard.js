import Image from "next/image";
import React from "react";

function InfoCard({ number, information, img }) {
  return (
    <div className="text-white">
      <div className="flex space-x-1 items-center">
        <Image
          src={`/images/${img}.png`}
          width={500}
          height={500}
          alt=""
          className="w-5 md:w-7"
        />
        <h1 className="font-bebas text-5xl xl:text-6xl ">{number}</h1>
      </div>
      <h4 className="text-[10px] lg:text-[12px] xl:text-sm">{information}</h4>
    </div>
  );
}

export default InfoCard;
