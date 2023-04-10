import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const FeaturedCard = ({ job }) => {
  const {id, logo, title, company, type, location, salary } = job;

  return (
    <div className="border p-10 flex flex-col justify-between rounded-md">
      <img src={logo} alt="company logo" className="w-32 mb-6" />
      <div>
        <h3 className="text-[#474747] font-bold text-2xl">{title}</h3>
        <p className="text-[#757575] text-xl mt-2 mb-4">{company}</p>
        <div>
          {type.map((jobType, index) => (
            <button
              key={index}
              className="px-5 py-2 border mr-4 rounded font-bold mb-4 animation-text border-[#a180fc]"
            >
              {jobType}
            </button>
          ))}
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
        <Link to={`/details/${id}`}>
          <button className="gradient-button">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
