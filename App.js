import React, {Component} from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';

const PLACES = ["Samara", "Tolyatti", "Saratov", "Kazan", "Krasnodar"];

export default class App extends Component {
  state = {
    activePlace: 0,
  };
  
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="card">        
      
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }} >
              {place}
          </button>
        ))}

        <WeatherDisplay 
          key={activePlace}
          name={PLACES[activePlace]} />
      </div>
    );
  }
}