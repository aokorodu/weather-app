import { TWeather, TForcastWeather } from "../../interfaces";
import styles from './WeatherDisplay.module.scss';
import Wind from "../wind";
import Temp from "../temp";
import WeatherAnimation from "../weather-animation";

const WeatherDisplay = ({ current, forecast }: TWeather) => {
    console.log('code: ', current.condition.code)
    const f: TForcastWeather = forecast;
    const max = Math.round(f.forecastday[0].day.maxtemp_f);
    const min = Math.round(f.forecastday[0].day.mintemp_f);
    console.log('f:', f.forecastday[0].day.maxtemp_f)
    return (<>
        <WeatherAnimation {...current.condition} />
        <div className={styles.dataHolder}>
            <Temp max={max} min={min} current={current} />
            <Wind {...current} />
        </div>

    </>)
}

export default WeatherDisplay;