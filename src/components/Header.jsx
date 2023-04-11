import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] py-3">
      <div className="container mx-auto lg:flex items-center justify-between">
        <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="w-20" />
              <h2 className="text-2xl md:text-3xl font-bold">CareerBanao</h2>
            </div>
          </Link>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? (
            <Bars3BottomRightIcon className="w-6 h-6"></Bars3BottomRightIcon>
          ) : (
            <XMarkIcon className="w-6 h-6"></XMarkIcon>
          )}
        </div>
        </div>

        <div>
          {
            isOpen ? <div className="hidden lg:block">
            <div className="md:flex items-center justify-between">
              <div className="flex flex-col md:flex-row gap-7">
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
  
              <div className="lg:ml-24">
                <Link to="/">
                  <button className="px-7 py-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-lg font-semibold text-white rounded-lg">
                    Start Applying
                  </button>
                </Link>
              </div>
            </div>
          </div> : <div className="mx-2">
            <div className="lg:flex items-center justify-between">
              <div className="flex flex-col lg:flex-row gap-7">
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
  
              <div className="mt-5 lg:mt-0 lg:ml-24">
                <Link to="/">
                  <button className="px-7 py-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-lg font-semibold text-white rounded-lg">
                    Start Applying
                  </button>
                </Link>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Header;
