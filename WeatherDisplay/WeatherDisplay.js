import React, {Component} from 'react';

export default class WeatherDisplay extends Component {
  state = {
    weatherData: null
  };
  
  componentDidMount() {
    const name = this.props.name;
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
      name +
      "&lang=&units=metric&appid=a97e1c4f1a6a3452bf3d6b4645a051f0&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  
  
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>temp: {weatherData.main.temp}°С</p>

      </div>
    );
  }
}