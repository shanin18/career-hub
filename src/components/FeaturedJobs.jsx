import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";

const FeaturedJobs = () => {
  const jobs = useLoaderData();

  return (
    <div className="mt-32">
      <div className="text-center">
        <h2 className="font-bold text-5xl">Featured Jobs</h2>
        <p className="mt-6 text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {jobs.map((job) => (
          <FeaturedCard key={job.id} job={job}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
