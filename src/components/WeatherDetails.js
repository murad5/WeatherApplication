import React from 'react'

export default function WeatherDetails({info}) {
  return (
    <div className="weather-status text-white text-center  pb-5">
    <img id="weather-icon" src={`https://openweathermap.org/img/wn/${info?.weather[0].icon}@2x.png`} alt="" />
    <h1 id="city">{info?.name}</h1>
    <h3><span id="temperature">{info?.main.temp }</span>&deg;C</h3>
    <h1 id="condition" className="lead">{info?.weather[0].main}</h1>
    

        <div className="row  text-white d-flex">
          <div className="col-md-6">
            <hr />
            <h6>Wind : {info?.wind.speed} m/h</h6>
            <hr />
            <h6>Pressure :  {info?.main.pressure } hPa </h6>
            <hr />
            
          </div>
          <div className="col-md-6">
            <hr />
            <h6>Humidity : {info?.main.humidity} %</h6>
            <hr />
            <h6>Visibility : {info?.visibility}</h6>
            <hr />

          </div>
</div>
</div>
  )
}
