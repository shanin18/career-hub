import React from "react";
import logo from "../assets/logo1.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-20" />
            <h2 className="text-3xl font-bold">CareerBanao</h2>
          </div>
        </Link>
        <div className="flex gap-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "animation-text" : "text-[#757575] font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "animation-text" : "text-[#757575] font-semibold"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="appliedJobs"
            className={({ isActive }) =>
              isActive ? "animation-text" : "text-[#757575] font-semibold"
            }
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "animation-text" : "text-[#757575] font-semibold"
            }
          >
            Blog
          </NavLink>
        </div>
        <div>
          <button className="px-7 py-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-lg font-semibold text-white rounded-lg">
            Start Applying
          </button>
        </div>
      </div>
    </nav>
    
    </div>
    
  );
};

export default Header;
