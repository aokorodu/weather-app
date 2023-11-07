import './App.css';
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/weather-display';
import { TCurrentWeather } from "./interfaces";
import { Button, TextField } from '@mui/material';

const url: string = "http://api.weatherapi.com/v1/current.json?key=7b006266b8fa412baec213059230411&q=10000&aqi=no";

function App() {
  let currentZip = 19128
  const [zip, setZip] = useState(currentZip)
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
  },)

  const fetchData = async () => {
    const result = await fetch(getAPIURLString());
    result.json().then((json) => {
      console.log('json:', json);
      setLocation(json.location.name);
      setCurrentWeather(json.current);
    })
  }

  useEffect(() => {
    console.log('useeffect')
    fetchData();
  }, [zip])

  const getAPIURLString = () => {
    return `http://api.weatherapi.com/v1/current.json?key=7b006266b8fa412baec213059230411&q=${zip}&aqi=no`
  }

  return (
    <>
      <div>{location}--</div>
      <form>
        <TextField defaultValue={zip} id="zip" label="zip code" variant="outlined" onChange={(e) => { currentZip = Number(e.target.value) }} />
        <Button variant="outlined" onClick={() => { setZip(currentZip) }}>SUBMIT</Button>
      </form>

      <div>{zip}</div>
      <WeatherDisplay {...currentWeather} />
    </>
  );
}

export default App;
