import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import WeatherDetails from './WeatherDetails';




export default function Home() {
    const [city, setCity] = useState()
    const [info, setInfo] = useState();
    const [loading, setLoading] = useState(false);
    const API_KEY = '41f2a168bdbc621b2e6bb7f774a33b62';
    let content


    useEffect(()=>{    
       const url = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${API_KEY}&units=metric`;
       
        fetch(url)
            .then(res => res.json())
            .then(data => {      
              
                setInfo(data)
                setLoading(true)
           
              
            });
          
    },[])
  
   

    const searchTemperature = () =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
               setInfo(data)
             
              
            }) 

      
    }
     console.log(info)
   
    if(info?.cod !== 200) content = <h1 className="weather-status text-white text-center">{info?.message}</h1>
    else {
      content= <WeatherDetails info={info} key={info.id}/>
             
    }
    

  return (
    <div className="container" >
        <form className="col-md-6 m-auto py-5">
            <div className="input-group mb-3">
                <input onBlur={(e) => setCity(e.target.value)} type="text" className="form-control" placeholder="Enter a location for Weather ..." />
                <div className="input-group-append m-auto">
                    <button onClick={searchTemperature} type="button" className="btn btn-secondary">Search</button>
                </div>
            </div>
        </form>

     
        {   
           loading && content
            
        }
        
    </div>
  )
}

