import styles from './App.module.scss';
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/weather-display';
import { TLocation, TWeather } from "./interfaces";
import { TextField } from '@mui/material';
import { postcodeValidator } from 'postcode-validator';
import WeatherAnimation from './components/weather-animation';
import Sky from './components/sky';

function App() {
  const apiKey = '7b006266b8fa412baec213059230411'
  let date = new Date();
  console.log(date)
  let currentZip = 10001;
  const [validPostcode, setValidPostcode] = useState(true);
  const [zip, setZip] = useState(currentZip)
  const [location, setLocation] = useState<TLocation>({
    country: "",
    lat: 0,
    localtime: "",
    localtime_epoch: 0,
    lon: 0,
    name: "",
    region: "",
    tz_id: "",
  });
  const [currentWeather, setCurrentWeather] = useState<TWeather>({
    current: {
      temp_f: 0,
      condition: {
        text: "",
        icon: "",
        code: 0
      },
      wind_mph: 0,
      wind_degree: 0,
      wind_dir: "",
      humidity: 0,
      cloud: 0,
      feelslike_f: 0,
    },
    forecast: {
      forecastday: [
        {
          astro: {
            sunrise: "",
            sunset: "",
            is_moon_up: 0,
            is_sun_up: 0,
            moon_phase: "",
          },
          day: {
            maxtemp_c: 0,
            maxtemp_f: 0,
            maxwind_kph: 0,
            maxwind_mph: 0,
            mintemp_c: 0,
            mintemp_f: 0,
          }
        }
      ]
    }
  },)

  const fetchData = async () => {
    const result = await fetch(getAPIURLString());
    const data = result.json();
    data.then((json) => {
      console.log('json:', json);
      const errorCode = json.error?.code;
      console.log('errorCode:', errorCode)
      if (errorCode !== undefined) return;
      setLocation(json.location);
      setCurrentWeather(json);
    })
  }

  useEffect(() => {
    console.log('useeffect')
    if (validPostcode) fetchData();
  }, [zip])

  const getAPIURLString = () => {
    return `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${zip}&days=1&aqi=no&alerts=no`
  }

  const checkPostcode = (newCode: string) => {
    setZip(Number(newCode));
    const val = postcodeValidator(newCode, 'US');
    console.log('valid? ', val);
    setValidPostcode(val);
  }

  return (
    <>
      <div className={styles.background}>
        <Sky sunrise={currentWeather.forecast.forecastday[0].astro.sunrise} sunset={currentWeather.forecast.forecastday[0].astro.sunset} locationTime={location.localtime} />
      </div>
      <div className={styles.header}>
        <div>
          <div className={styles.location}>{location.name}</div>
          <div className={styles.date}>{`${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`}</div>
        </div>
        <div className={styles.zipInputHolder}><TextField error={!validPostcode} helperText={!validPostcode ? "improper zipcode" : ""} defaultValue={zip} id="zip" label="zip code" variant="outlined" onChange={(e) => { checkPostcode(e.target.value) }} /></div>

      </div>
      <WeatherAnimation {...currentWeather.current.condition} />
      <div className={styles.footer}>
        <WeatherDisplay {...currentWeather} />
      </div>


    </>
  );
}

export default App;
