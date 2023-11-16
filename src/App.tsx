import styles from './App.module.scss';
import { useState, useEffect } from 'react';
import WeatherDisplay from './components/weather-display';
import { TLocation, TWeather } from "./interfaces";
import { TextField } from '@mui/material';
import { postcodeValidator } from 'postcode-validator';
import WeatherAnimation from './components/weather-animation';
import Sky from './components/sky';
import { getTimeOfDay } from './utils';
import { TimeOfDay } from './interfaces';

function App() {
  const apiKey = '7b006266b8fa412baec213059230411'
  let date = new Date();
  let currentZip = 10001;
  const [validPostcode, setValidPostcode] = useState(true);
  const [zip, setZip] = useState(currentZip);
  const [TOD, setTOD] = useState<TimeOfDay>("day")
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
      setTheme();
      setLocation(json.location);
      setCurrentWeather(json);

    })
  }

  useEffect(() => {
    console.log('useeffect')
    if (validPostcode) fetchData();

  }, [location, zip, TOD])

  const getAPIURLString = () => {
    return `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${zip}&days=1&aqi=no&alerts=no`
  }

  const checkPostcode = (newCode: string) => {
    setZip(Number(newCode));
    const val = postcodeValidator(newCode, 'US');
    console.log('valid? ', val);
    setValidPostcode(val);
  }

  // put this in the fetch call after the setlocation and setcurrentweather
  const setTheme = () => {
    const themeString: TimeOfDay = getTimeOfDay(location.localtime, currentWeather.forecast.forecastday[0].astro.sunrise, currentWeather.forecast.forecastday[0].astro.sunset);
    console.log('themSring: ', themeString);
    setTOD(themeString);
  }

  const getTheme = () => {
    switch (TOD) {
      case "day":
        return styles.day;
        break;

      case "night":
        return styles.night;
        break;

      case "sunrise":
        return styles.sunrise;
        break;

      case "sunset":
        return styles.sunset;
        break;

      default:
        return styles.day;
    }
  }


  return (
    <>
      <div className={`${styles.container} ${getTheme()}`} >
        <div className={styles.main}>
          <div className={styles.background}>
            <Sky sunrise={currentWeather.forecast.forecastday[0].astro.sunrise} sunset={currentWeather.forecast.forecastday[0].astro.sunset} locationTime={location.localtime} />
          </div>
          <div className={styles.header}>
            <div>
              <div className={styles.location}>{location.name}</div>
              <div className={styles.date}>{`${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`}</div>
            </div>


          </div>
          <WeatherAnimation {...currentWeather.current.condition} />
          <div className={styles.footer}>
            <WeatherDisplay {...currentWeather} />
          </div>
          <div className={styles.zipInputHolder}>


          </div>

        </div>

        <div className={styles.zipSection}>
          <TextField sx={{ input: { color: 'black' } }} InputLabelProps={{ className: styles.mutextfield }} color="primary" error={!validPostcode} helperText={!validPostcode ? "improper zipcode" : ""} defaultValue={zip} id="zip" label="zip code" variant="outlined" onChange={(e) => { checkPostcode(e.target.value) }} />

        </div>
      </div>
    </>
  );
}

export default App;
