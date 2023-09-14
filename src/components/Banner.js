import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col items-center md:items-start space-y-12  py-[7rem]  px-[2rem] md:px-[5rem]">
      <div className="flex flex-col  text-center md:text-left space-y-4 md:w-[400px]">
        <span className="text-[1.5rem]  md:text-4xl font-bold text-white">
          SpaceX Dragon Capsules! Revolutionizing Space Transportation
        </span>
        <span className="text-sm md:text-sm text-gray-400 font-semibold">
          Explore the possibilities of space travel with SpaceX Dragon capsules.
          These cutting-edge spacecrafts push the limits of innovation and take
          us on captivating adventures.
        </span>
      </div>
      <div>
        <button className="button px-6 py-3">
          <a href="#capsules">Explore SpaceX Capsules</a>
        </button>
      </div>
    </div>
  );
}
