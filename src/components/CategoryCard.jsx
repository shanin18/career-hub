import React from 'react';

const CategoryCard = ({category}) => {
    const {image, title, jobs_available} = category;

    return (
        <div className='bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] p-10 rounded-lg hover:shadow-lg duration-300 flex flex-col gap-8 justify-between'>
            <img src={image} alt="" className='w-16' />
           <div>
           <h4 className='text-[#474747] font-bold text-xl'>{title}</h4>
            <p className='text-[#A3A3A3] mt-3'>{jobs_available} Jobs Available</p>
           </div>
        </div>
    );
};

export default CategoryCard;