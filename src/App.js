import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

class App extends React.Component {

  getWeather = async(e) => {
    try {
    e.preventDefault();

    // user input of city
    const city = e.target.elements.city.value;

    // list of urls we need to get data from meta-weather API
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const woeIdUrl = `https://www.metaweather.com/api/location/search/?query=${city}`;

    // json response from our city to get the woeid
    const apiCall = await fetch(proxyUrl + woeIdUrl);
    const data = await apiCall.json();
    const dataWoeId = data[0].woeid;

    // json response of weather data of city
    const locationUrl = `https://www.metaweather.com/api/location/${dataWoeId}`;
    const apiCallLocation = await fetch(proxyUrl + locationUrl);
    const locationData = await apiCallLocation.json();

    console.log('success: ', locationData);
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    )
  }
}

export default App;
