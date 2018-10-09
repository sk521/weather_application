import React from 'react';
import { WiHumidity, WiCelsius } from 'weather-icons-react';

const Weather = (props) => {
  return (
    <div>
      {props.city && <p className="weather-info">Location: {props.city}</p>}
      {props.temperature && <p className="weather-info">Temperature: {Math.round(props.temperature)}<WiCelsius size={25}/></p>}
      {props.humidity && <p className="weather-info">Humidity: {props.humidity}
        <WiHumidity size={25} />
      </p>}
      {props.weatherState && <p className="weather-info">Weather State: {props.weatherState}</p>}
      {props.weatherStateAbbr && <img src={`https://www.metaweather.com/static/img/weather/${props.weatherStateAbbr}.svg`} alt='/' className="weatherImg" />}
      {props.error && <p>Error: {props.error}</p>}
    </div>
  )
}


export default Weather;
