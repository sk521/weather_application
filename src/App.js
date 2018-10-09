import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    weatherState: undefined,
    weatherStateAbbr: undefined,
    error: "",
  }

  getWeather = async(e) => {
    // user input of city
    const city = e.target.elements.city.value;

    e.preventDefault();

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

    if (city) {
      this.setState({
        temperature: currentWeather.the_temp,
        city: locationData.title,
        humidity: currentWeather.humidity,
        weatherState: currentWeather.weather_state_name,
        weatherStateAbbr: currentWeather.weather_state_abbr,
      });
    } else {
      this.setState({
        error: "Could not find location..."
      });
    }
  }



  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature = {this.state.temperature}
          city = {this.state.city}
          humidity = {this.state.humidity}
          weatherState = {this.state.weatherState}
          weatherStateAbbr = {this.state.weatherStateAbbr}
          error = {this.state.error}
          />
      </div>
    )
  }
}

export default App;
