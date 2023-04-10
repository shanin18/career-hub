import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams()
    const data = useLoaderData()
    console.log(id)


    return (
        <div>
            
        </div>
    );
};

export default Details;