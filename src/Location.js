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
        <div key={Location.residents}>
            
            <div >
                <img className='fondo_img' src="https://i.blogs.es/77a359/rick-y-morty-trailer-temporada-5-1619898958/1366_2000.jpeg" alt="Fondo"/>
            </div>
            <section className='Location_random'>
            <div className='title_rick'>
                <h1><b>Rick and Morty Wiki</b></h1>
            </div>

            <div>
                <input className='input'
                type="text" 
                onChange={e => SetId(e.target.value)}
                value={Id}
                />
                <button className='buton' onClick={searchType}>Search</button>
            </div>
            </section>
            <div className='title_name'>
            <h2>{Location.name}</h2>
            </div>

            <div className='info_location'>
                <p className='info_style'>Type: {Location.type}</p>
                <p className='info_style'>Dimension: {Location.dimension}</p>
                <p className='info_style'>Population: {Location.residents?.length}</p>
            </div>

            <div className='Namee'>
                {Location.residents?.map(resident => (
                    <div className='cardtotal'>
                        <ResidentInfo key={resident} url={resident}/>
                    </div>
                ))}

            </div>
            
        </div>
    );
};

export default Location;