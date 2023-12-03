import styles from './App.module.scss';
import { useState, useEffect } from 'react';
import WeatherDisplay from './components/weather-display';
import { TWeather, TWeatherLocation, TWeatherCurrent } from "./interrfaces"
import { TextField } from '@mui/material';
import { postcodeValidator } from 'postcode-validator';
import WeatherAnimation from './components/weather-animation';
import Sky from './components/sky';
import { BlankWeatherObject, getTimeOfDay } from './utils';
import { TimeOfDay } from "./interrfaces";
import LoadingIndicator from './components/loading';

function App() {
  const apiKey = '7b006266b8fa412baec213059230411'
  let date = new Date();
  let currentZip = "";
  const [toggle, setToggle] = useState(false);
  const [validPostcode, setValidPostcode] = useState(false);
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
  const [currentWeather, setCurrentWeather] = useState<TWeather>(BlankWeatherObject)

  const fetchDataFromGeo = () => {
    navigator.geolocation.getCurrentPosition((p: GeolocationPosition) => {
      getData(`${p.coords.latitude},${p.coords.longitude}`);

    });
  }

  const getData = async (str: string) => {
    const result = await fetch(getAPIURLString(str));
    const data = result.json();
    data.then((json) => {
      console.log('json:', json);
      const errorCode = json.error?.code;
      if (errorCode !== undefined) {
        setToggle(true);
        return;
      }
      setToggle(false);
      setTheme();
      setLocation(json.location);
      setCurrentWeather(json);

    })
  }

  const fetchData = async () => {

    console.log('fetch data')
    getData(zip);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      fetchDataFromGeo();
    } else {
      fetchData();
    }
  }, [])

  useEffect(() => {
    console.log('useEffect setTheme')
    setTheme();
  }, [TOD, location])

  useEffect(() => {
    console.log('useeffect')
    if (validPostcode) fetchData();

  }, [validPostcode])

  const getAPIURLString = (q: string) => {
    const apiString = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=1&aqi=no&alerts=no`;
    console.log('api string: ', apiString)
    return apiString;
  }

  const checkPostcode = (newCode: string) => {
    const val = postcodeValidator(newCode, 'US');
    if (val === true) setZip(newCode);
    if (val !== validPostcode) setValidPostcode(val);
  }

  const setTheme = () => {
    const themeString: TimeOfDay = getTimeOfDay(location.localtime, currentWeather.forecast.forecastday[0].astro.sunrise, currentWeather.forecast.forecastday[0].astro.sunset);
    console.log('setting theme: ', themeString);
    setTOD(themeString);
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
          {location.name === "" && <LoadingIndicator />}
          {location.name !== "" && <div className={styles.footer}>
            <WeatherDisplay {...currentWeather} />
          </div>}
          <div className={styles.zipInputHolder}>


          </div>

        </div>

        <div className={styles.zipSection}>
          <TextField sx={{ input: { color: 'black' } }} InputLabelProps={{ className: styles.mutextfield }} color="primary" error={!validPostcode} helperText={!validPostcode ? "enter zipcode" : ""} defaultValue={zip} id="zip" label="zip code" variant="outlined" onChange={(e) => { checkPostcode(e.target.value) }} />{toggle && <div>can't find location</div>}

        </div>
      </div>
    </>
  );
}

export default App;
