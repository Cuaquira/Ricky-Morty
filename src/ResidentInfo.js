import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ( {url} ) => {
        
    const [list, SetList] = useState ({})
    useEffect ( () => {
        axios.get(url)
        .then( res => SetList(res.data))
    }, [url]);

    console.log(list);

    return (
        <div className='card'>
            <h1>{list.name}</h1>
            <img  src={list.image} alt="Img"/>
            <p className='left_info'>Status: {list.status}</p>
            <p className='left_info'>Birthplace: {list.origin?.name}</p>
            <p className='left_info'>Episode: {list.episode?.length}</p>
        </div>
     
    )
};

export default ResidentInfo;