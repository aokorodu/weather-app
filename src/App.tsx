import './App.css';
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/weather-display';
import { TCurrentWeather } from "./interfaces";

const url: string = "http://api.weatherapi.com/v1/current.json?key=7b006266b8fa412baec213059230411&q=19128&aqi=no";

function App() {
  const [location, setLocation] = useState("");
  const [currentWeather, setCurrentWeather] = useState<TCurrentWeather>({
    cloud: 0,
    condition: {
      code: 0,
      icon: "",
      text: ""
    },
    temp_f: 0,
    wind_mph: 0
  })

  const fetchData = async () => {
    const result = await fetch(url);
    result.json().then((json) => {
      console.log('json:', json);
      setLocation(json.location.name);
      setCurrentWeather(json.current);
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div>{location}--</div>
      <div>{currentWeather.temp_f}</div>
      <div>{currentWeather.condition.text}</div>
      <WeatherDisplay />
    </>
  );
}

export default App;
