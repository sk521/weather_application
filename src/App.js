import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import axios from 'axios';

class App extends React.Component {

  componentDidMount() {
    axios.get(`https://www.metaweather.com/api/location/search/?query=london`)
      .then(res => {
        const data = res.data;
        console.log('success ', data);
      })
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
