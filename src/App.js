import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

class App extends React.Component {

  getWeather = async(e) => {
    try {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://www.metaweather.com/api/location/search/?query=${city}`;

    const api_call = await fetch(proxyUrl + url);
    const data = await api_call.json();
    const dataWoeId = data[0].woeid;

    console.log('success: ', dataWoeId);
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
