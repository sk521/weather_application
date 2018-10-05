import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

class App extends React.Component {
  state = {
    temperature: undefined,
    // city: undefined,
    // country: undefined,
    // humidity: undefined,
    // weatherState: undefined,
    // weatherStateAbbr: undefined
  }

  getWeather = async(e) => {
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

    let currentWeather = locationData.consolidated_weather[0];

    // console.log('current temp: ', currentWeather.the_temp);

    // console.log(locationData);
    // console.log('temp: ', currentWeather.the_temp);
    // console.log('locationData: ', locationData.parent.title);

    this.setState({
      temperature: currentWeather.the_temp,
      // city: locationData.title,
      // country: locationData.parent.title,
      // humidity: currentWeather.humidity,
      // weatherState: currentWeather.weather_state_name,
      // weatherStateAbbr: currentWeather.weather_state_abbr
    });
    console.log('stateTemp: ', this.state.temperature);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature = {this.state.temperature}
          // city = {this.state.city}
          // country = {this.state.country}
          // humidity = {this.state.humidity}
          // weatherState = {this.state.weatherState}
          // weatherStateAbbr = {this.state.weatherStateAbbr}
          />
      </div>
    )
  }
}

export default App;
