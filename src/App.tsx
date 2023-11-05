import './App.css';
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/weather-display';

const url: string = "http://api.weatherapi.com/v1/current.json?key=7b006266b8fa412baec213059230411&q=19128&aqi=no";

type Condition = {
  code: number,
  icon: string,
  text: string
}

type CurrentWeather = {
  cloud: number,
  condition: Condition,
  temp_f: number,
  wind_mph: number
}

function App() {
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [currentCondition, setCurrentCondition] = useState<Condition>({
    code: 0,
    icon: "",
    text: ""
  })

  const fetchData = async () => {
    const result = await fetch(url);
    result.json().then((json) => {
      console.log('json:', json);
      setLocation(json.location.name);
      setTemp(json.current.temp_f);
      setCurrentCondition(json.current.condition);
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div>{location}--</div>
      <div>{temp}</div>
      <div>{currentCondition.text}</div>
      <WeatherDisplay />
    </>
  );
}

export default App;
