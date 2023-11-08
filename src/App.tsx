import styles from './App.module.scss';
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/weather-display';
import { TCurrentWeather } from "./interfaces";
import { TextField } from '@mui/material';
import { postcodeValidator } from 'postcode-validator';

function App() {
  let date = new Date();
  console.log(date)
  let currentZip = 10001;
  const [validPostcode, setValidPostcode] = useState(true);
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
    feelslike_f: 0,
    humidity: 0,
    wind_mph: 0,
    wind_dir: '',
    wind_degree: 0
  },)

  const fetchData = async () => {
    const result = await fetch(getAPIURLString());
    const data = result.json();
    data.then((json) => {
      console.log('json:', json);
      const errorCode = json.error?.code;
      console.log('errorCode:', errorCode)
      if (errorCode !== undefined) return;
      setLocation(json.location.name);
      setCurrentWeather(json.current);
    })
  }

  useEffect(() => {
    console.log('useeffect')
    if (validPostcode) fetchData();
  }, [zip])

  const getAPIURLString = () => {
    return `http://api.weatherapi.com/v1/current.json?key=7b006266b8fa412baec213059230411&q=${zip}&aqi=no`
  }

  const checkPostcode = (newCode: string) => {
    setZip(Number(newCode));
    const val = postcodeValidator(newCode, 'US');
    console.log('valid? ', val);
    setValidPostcode(val);
  }

  return (
    <>
      <div className={styles.location}>{location}</div>
      <div className={styles.date}>{`${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`}</div>


      <WeatherDisplay {...currentWeather} />
      <TextField error={!validPostcode} helperText={!validPostcode ? "improper zipcode" : ""} defaultValue={zip} id="zip" label="zip code" variant="outlined" onChange={(e) => { checkPostcode(e.target.value) }} />
    </>
  );
}

export default App;
