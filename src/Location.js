import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {
    
    const [Location, SetLocation] = useState({})
    const [Id, SetId] = useState("")

    useEffect( () => {
        const random = Math.floor(Math.random() * 126) +1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}/`)
        .then(res => SetLocation(res.data))
    },[]);
        console.log(Location);

        const searchType = () => {
            axios.get(`https://rickandmortyapi.com/api/location/${Id}/`)
            .then(res => SetLocation(res.data))
        }

    return (
        <div key={Location.residents} className='Location_random'>
            <div >
                <img className='fondo_img' src="https://fondosmil.com/fondo/27334.jpg" alt="Fondo"/>
            </div>
            <div className='title_rick'>
                <h1><b>Rick and Morty Wiki</b></h1>
            </div>

            <div>
                <input 
                type="text" 
                onChange={e => SetId(e.target.value)}
                value={Id}
                />
                <button onClick={searchType}>Search</button>
            </div>

            <div className='title_name'>
            <h2>{Location.name}</h2>
            </div>

            <div className='info_location'>
                <p>Type: {Location.type}</p>
                <p>Dimension: {Location.dimension}</p>
                <p>Population: {Location.residents?.length}</p>
            </div>

            <ul className='Namee'>
                {Location.residents?.map(resident => (
                    <li>
                        <ResidentInfo key={resident} url={resident}/>
                    </li>
                ))}

            </ul>
            
        </div>
    );
};

export default Location;