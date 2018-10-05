import React from 'react';

const Weather = (props) => {
  return (
    <div>
      {/* {props.country && props.city && <p>Location: {props.city}, {props.country}}</p>} */}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {/* {props.humidity && <p>Humidity: {props.humidity}</p>} */}
    </div>
  )
}

export default Weather;
