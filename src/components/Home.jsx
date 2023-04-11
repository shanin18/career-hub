import React from "react";
import JobCategory from "./JobCategory";
import FeaturedJobs from "./FeaturedJobs";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
