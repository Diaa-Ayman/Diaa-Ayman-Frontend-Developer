import React from "react";
export default function Navbar() {
  return (
    <div className=" flex items-center space-x-2 text-xl font-semibold font-script border-b border-b-gray-700 py-4 text-white px-[2rem] md:px-[5rem]">
      <span className="text-[2rem]">X</span>{" "}
      <span className="text-[1.5rem]">Capsules</span>
    </div>
  );
}
