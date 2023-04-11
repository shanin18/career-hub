import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("jobCategoryList.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='container mx-auto my-32 px-2'>
            <div className='text-center'>
            <h2 className='font-bold text-4xl md:text-5xl'>Job Category List</h2>
            <p className='mt-6 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                {
                    categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default JobCategory;