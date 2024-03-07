import React from "react";
import logo from "../AirImages/logo1.jpg";
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="bar">
      <div className="logo">
        <img src={logo} width={70} height={30} alt="pic" />
      </div>
      <p>Product</p>
      <p>Pricing</p>
      <p>About Us</p>
      <p>Resources</p>

      <button type="button">Eng</button>
      <button type="">Book Now</button>
    </div>
  );
};

export default Navbar;
