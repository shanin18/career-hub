import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const FeaturedCard = ({ job }) => {
  const { logo, title, company, type, location, salary } = job;
  console.log(type)
  return (
    <div className="border p-10 flex flex-col justify-between">
      <img src={logo} alt="company logo" className="w-32 mb-6" />
      <div>
      <h3 className="text-[#474747] font-bold text-2xl">{title}</h3>
      <p className="text-[#757575] text-xl mt-2 mb-4">{company}</p>
      <div>
      {
        type.map(jobType => <button className="px-5 py-2 border mr-4 rounded font-bold mb-4 animation-text border-[#a180fc]">{jobType}</button>)
      }
      </div>
      
      <div className="flex items-center gap-5">
        <p className="text-[#757575] flex gap-1">
          <MapPinIcon className="h-5 w-5 " />
          {location}
        </p>
        <p className="text-[#757575] flex gap-1">
          <CurrencyDollarIcon className="h-5 w-5 " />
          {salary}
        </p>
      </div>
      <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-bold text-white px-5 py-3 rounded mt-6">View Details</button>
      </div>
    </div>
  );
};

export default FeaturedCard;
