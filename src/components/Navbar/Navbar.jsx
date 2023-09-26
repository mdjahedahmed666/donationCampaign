import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png"

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
        <div className="container mx-auto flex items-center justify-between sm:px-10 md:px-32">
      <div className="">
        <Link to="/">
            <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <div className="menu menu-horizontal px-1">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/donation">
            Donation
          </NavLink>
          <NavLink to="/statistics">
            Statistics
          </NavLink>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
