import React from "react";
import Lottie from "lottie-react";
import men from "../assets/worker.json";

const Banner = () => {
  return (
    
   <div className="bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]">
     <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:gap-10 lg:gap-20 px-2">
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold ">
          One Step <br /> Closer To Your <br />
          <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">
            Dream Job
          </span>
        </h1>
        <p className="text-[#757575] text-lg my-6">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="gradient-button mb-4">Get Started</button>
      </div>
      <div>
        <Lottie animationData={men} loop={true} />
      </div>
    </div>
   </div>
  );
};

export default Banner;
