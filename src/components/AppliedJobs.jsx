import React, { useEffect, useState } from "react";
import AppliedJobCard from "./AppliedJobCard";

const AppliedJobs = () => {
  const [allData, setAllData] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filteredValue, setFilteredValue] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // fetching all Data
  useEffect(() => {
    fetch("featuredJob.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    let savedData = [];
    if (items) {
      for (const id of items) {
        const findData = allData.find((data) => data.id == id);
        if (findData) {
          savedData.push(findData);
        }
      }
      setJobs(savedData);
    }
  }, [allData]);

  // filtering data by job type
  useEffect(() => {
    if (filteredValue === "") {
      setFilteredJobs(jobs);
    }
    else if (filteredValue === "onsite") {
      const filtered = jobs.filter((job) => job.type[0] === "Onsite");
      setFilteredJobs(filtered);
    } else if (filteredValue === "remote") {
      const filtered = jobs.filter((job) => job.type[0] === "Remote");
      setFilteredJobs(filtered);
    }
  }, [filteredValue]);

  return (
    <div className="px-2 container mx-auto my-32">
      <h2 className="text-center font-bold text-[#1A1919] text-3xl mb-28">
        Applied Jobs
      </h2>
      <div className="text-end mb-8">
        <select
          onChange={(e) => setFilteredValue(e.target.value)}
          className="border outline-none px-5 py-4 text-semibold text-xl rounded-md bg-[#F4F4F4]"
        >
          <option value="">All</option>
          <option value="onsite">Onsite</option>
          <option value="remote">Remote</option>
        </select>
      </div>
      <div className="flex flex-col gap-6">
        {filteredJobs.length === 0
          ? jobs.map((job) => (
              <AppliedJobCard key={job.id} job={job}></AppliedJobCard>
            ))
          : filteredJobs.map((job) => (
              <AppliedJobCard key={job.id} job={job}></AppliedJobCard>
            ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
