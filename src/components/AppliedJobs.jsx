import React, { useEffect, useState } from 'react';
import AppliedJobCard from './AppliedJobCard';

const AppliedJobs = () => {
    const [allData, setAllData] = useState([]);
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch("featuredJob.json")
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])

    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem("data"))
        let savedData =[];
        if(items){
            for(const id of items){
                const findData = allData.find(data => data.id == id)
                if(findData){
                    savedData.push(findData)
                }
            }
            setJobs(savedData)
        }
        console.log(jobs)
        
    },[allData])

   

    return (
        <div className='flex flex-col gap-6'>
            {
                jobs?.map((job) => <AppliedJobCard key={job.id} job={job}></AppliedJobCard>)
            }
        </div>
    );
};

export default AppliedJobs;