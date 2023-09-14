import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import backgroundImage from "../assets/bg-image.png";
export default function Header() {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <Banner />
    </div>
  );
}
