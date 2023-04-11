import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
  const [details, setDetails] = useState({});
  const {id} = useParams();
  const data = useLoaderData();

  const handleApplyNow = (id) =>{
    let data = []
    const storedData = localStorage.getItem("data");
    let newData = []
    if(storedData){
      data = JSON.parse(storedData)
    }
    
    if(data){
      if(!data.includes(id)){
        newData = [...data, id]
        localStorage.setItem("data", JSON.stringify(newData))
      }
      else{
        toast("you've already applied for this job")
      }
    }
    else{
      localStorage.setItem("data", JSON.stringify(newData))
    }
  }

  useEffect(() => {
    if (data) {
      const items = data.find((item) => item.id == id);
      setDetails(items);
    }
  }, []);

  const {
    description,
    responsibility,
    education,
    experience,
    salary,
    title,
    contact,
    location,
  } = details;

  return (
    <div className="container mx-auto my-32 px-2">
      <h2 className="text-center font-bold text-[#1A1919] text-3xl mb-28">Job Details</h2>
      <div className="grid lg:grid-cols-2 gap-10">
      <div className="flex flex-col gap-6">
        <p className="text-[#757575] text-lg">
          <span className="font-bold text-[#1A1919]">Job Description: </span>{" "}
          {description}
        </p>
        <p className="text-[#757575] text-lg">
          <span className="font-bold text-[#1A1919]">Job Responsibility: </span>{" "}
          {responsibility}
        </p>
        <p className="text-[#757575] text-lg">
          <span className="font-bold text-[#1A1919]">
            Educational Requirements:
          </span>{" "}
          <br /> {education}
        </p>
        <p className="text-[#757575] text-lg">
          <span className="font-bold text-[#1A1919]">Experiences:</span>
          <br /> {experience}
        </p>
      </div>
      <div className="mt-8 md:mt-0">
        <div className="bg-[#9873ff15] p-7 rounded-lg">
          <h4 className="text-xl font-bold ">Job Details</h4>
          <div className="border border-[#d0beff] my-6"></div>
          <p className="text-xl text-[#757575] flex items-center gap-2">
            <CurrencyDollarIcon className="w-6 h-6 text-[#9873FF]"></CurrencyDollarIcon>
            <span className="font-bold text-[#474747]">Salary : </span>
            {salary}
          </p>
          <p className="text-xl text-[#757575] flex items-center gap-2 mt-4">
            <CalendarDaysIcon className="w-6 h-6 text-[#9873FF]"></CalendarDaysIcon>
            <span className="font-bold text-[#474747]">Job Title : </span>
            {title}
          </p>

          <div className="mt-8">
            <h4 className="text-xl font-bold ">Contact Information</h4>
            <div className="border border-[#d0beff] my-6"></div>
            <p className="text-xl text-[#757575] flex items-center gap-2">
              <PhoneIcon className="w-6 h-6 text-[#9873FF]"></PhoneIcon>
              <span className="font-bold text-[#474747]">Phone : </span>
              {contact?.phone}
            </p>
            <p className="text-xl text-[#757575] flex items-center gap-2 mt-4">
              <EnvelopeIcon className="w-6 h-6 text-[#9873FF]"></EnvelopeIcon>
              <span className="font-bold text-[#474747]">Email : </span>
              {contact?.email}
            </p>
            <p className="text-xl text-[#757575] flex items-center gap-2 mt-4">
              <MapPinIcon className="w-6 h-6 text-[#9873FF]"></MapPinIcon>
              <span className="font-bold text-[#474747]">Address : </span>
              {location}
            </p>
          </div>
        </div>
        <button onClick={()=> handleApplyNow(id)} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold text-white py-4 text-xl w-full rounded-lg mt-6">
          Apply Now
        </button>
      </div>
      </div>
    </div>
  );
};

export default Details;
