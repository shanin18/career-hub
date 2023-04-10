import React from 'react';
import JobCategory from './JobCategory';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    
    return (
        <div>
          <JobCategory></JobCategory>
          <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;