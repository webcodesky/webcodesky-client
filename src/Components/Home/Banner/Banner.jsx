import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="relative bg-[#E7E7E7]">
      <div className="container mx-auto min-h-screen">
        <p className="text-[18px] font-medium pt-[72px]">
          We Build Your Dream Website
        </p>
        <h1 className="font-bold text-[40px] md:text-[190px] tracking-[-4%]">
          Web <span className="text-[#FF6600]">Code</span> Sky
        </h1>
        <p className="ps-[72px] pt-[30px] leading-5 tracking-[0.2px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="flex justify-center">
          <button className="mt-[30px] border-[1px] rounded-[50px] px-6 py-[21px] hover:bg-[#FF6600] flex gap-5">
            <span className="text-[24px]">Get a Quote</span>
            <span className="text-white text-[40px] rotate-45">
              <FaCircleArrowUp />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
