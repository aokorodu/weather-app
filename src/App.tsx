import styles from './App.module.scss';
import { useState, useEffect } from 'react';
import WeatherDisplay from './components/weather-display';
import { TWeather, TWeatherLocation, TWeatherCurrent } from "./interrfaces"
import { TextField } from '@mui/material';
import { postcodeValidator } from 'postcode-validator';
import WeatherAnimation from './components/weather-animation';
import Sky from './components/sky';
import { getTimeOfDay } from './utils';
import { TimeOfDay } from "./interrfaces"

function App() {
  const apiKey = '7b006266b8fa412baec213059230411'
  let date = new Date();
  let currentZip = "10001";
  const [validPostcode, setValidPostcode] = useState(true);
  const [zip, setZip] = useState(currentZip);
  const [TOD, setTOD] = useState<TimeOfDay>("day")
  const [location, setLocation] = useState<TWeatherLocation>({
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
      temp_c: 0,
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
      feelslike_c: 0,
    },
    forecast: {
      forecastday: [
        {
          astro: {
            is_moon_up: 0,
            is_sun_up: 0,
            moon_illumination: 0,
            moon_phase: "",
            moonrise: "",
            moonset: "",
            sunrise: "",
            sunset: "",
          },
          day: {
            avghumidity: 0,
            avgtemp_c: 0,
            avgtemp_f: 0,
            avgvis_km: 0,
            avgvis_miles: 0,
            condition: { code: 0, icon: "", text: "" },
            daily_chance_of_rain: 0,
            daily_chance_of_snow: 0,
            daily_will_it_rain: 0,
            daily_will_it_snow: 0,
            maxtemp_c: 0,
            maxtemp_f: 0,
            maxwind_kph: 0,
            maxwind_mph: 0,
            mintemp_c: 0,
            mintemp_f: 0,
            totalprecip_mm: 0,
            totalsnow_cm: 0,
            uv: 0,
          },
          date: "",
          hour: [{
            chance_of_rain: 0,
            chance_of_snow: 0,
            cloud: 0,
            condition: {
              code: 0,
              icon: "",
              text: ""
            },
            dewpoint_c: 0,
            dewpoint_f: 0,
            feelslike_c: 0,
            feelslike_f: 0,
            gust_kph: 0,
            gust_mph: 0,
            heatindex_c: 0,
            heatindex_f: 0,
            humidity: 0,
            is_day: 0,
            precip_in: 0,
            precip_mm: 0,
            pressure_in: 0,
            pressure_mb: 0,
            temp_c: 0,
            temp_f: 0,
            time: "",
            time_epoch: 0,
            uv: 0,
            vis_km: 0,
            vis_miles: 0,
            will_it_rain: 0,
            will_it_snow: 0,
            wind_degree: 0,
            wind_dir: "",
            wind_kph: 0,
            wind_mph: 0,
            windchill_c: 0,
            windchill_f: 0,
          }]
        }
      ]
    },
    location: {
      country: "",
      lat: 0,
      localtime: "",
      localtime_epoch: 0,
      lon: 0,
      name: "",
      region: "",
      tz_id: "",
    }
  },)

  const fetchData = async () => {
    console.log('fetch data')
    const result = await fetch(getAPIURLString());
    const data = result.json();
    data.then((json) => {
      console.log('json:', json);
      const errorCode = json.error?.code;
      //console.log('errorCode:', errorCode)
      if (errorCode !== undefined) return;
      setTheme();
      setLocation(json.location);
      setCurrentWeather(json);

    })
  }

  useEffect(() => {
    console.log('useEffect setTheme')
    setTheme();
  }, [TOD, location])

  useEffect(() => {
    console.log('useeffect')
    if (validPostcode) fetchData();

  }, [validPostcode])

  const getAPIURLString = () => {
    const apiString = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${zip}&days=1&aqi=no&alerts=no`;
    console.log('api string: ', apiString)
    return apiString;
  }

  const checkPostcode = (newCode: string) => {
    setZip(newCode);
    const val = postcodeValidator(newCode, 'US');
    //console.log('valid? ', val);
    setValidPostcode(val);
  }

  // put this in the fetch call after the setlocation and setcurrentweather
  const setTheme = () => {
    const themeString: TimeOfDay = getTimeOfDay(location.localtime, currentWeather.forecast.forecastday[0].astro.sunrise, currentWeather.forecast.forecastday[0].astro.sunset);
    console.log('setting theme: ', themeString);
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
      <div className={`${styles.container} ${styles[TOD]}`} >
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
