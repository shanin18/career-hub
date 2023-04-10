import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";

const FeaturedJobs = () => {
  const [seeAll, setSeeAll] = useState(false);
  const [jobs, setJobs] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <div className="mt-32 mx-2">
      <div className="text-center">
        <h2 className="font-bold text-5xl">Featured Jobs</h2>
        <p className="mt-6 text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {!seeAll
          ? jobs?.slice(0, 4)?.map((job) => (
                <FeaturedCard key={job.id} job={job}></FeaturedCard>
              ))
          : jobs?.map((job) => (
              <FeaturedCard key={job.id} job={job}></FeaturedCard>
            ))}
      </div>
      <div className="flex justify-center mt-5">
        {
            !seeAll ?  <button onClick={() => setSeeAll(!seeAll)} className="gradient-button">
            See all Jobs
          </button> : <button onClick={() => setSeeAll(!seeAll)} className="gradient-button">
            See less Jobs
          </button> 
        }
       
      </div>
    </div>
  );
};

export default FeaturedJobs;
