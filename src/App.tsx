import './App.css';
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/weather-display';

const url: string = "http://api.weatherapi.com/v1/current.json?key=7b006266b8fa412baec213059230411&q=19128&aqi=no";

function App() {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      result.json().then((json) => {
        console.log('json:', json.current.temp_f);
        setTemp(json.current.temp_f);
      })
    }
    fetchData();
  }, [])

  return (
    <>
      <div>{temp}</div>
      <WeatherDisplay />
    </>
  );
}

export default App;
