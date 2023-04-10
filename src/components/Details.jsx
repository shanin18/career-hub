import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const [details, setDetails] = useState({});
    const id = useParams()
    const data = useLoaderData();

    useEffect(() =>{
        if(data){
            const items = data?.find( item => item.id == id.id)
            setDetails(items)
        }

    },[])

    return (
        <div>
            
        </div>
    );
};

export default Details;