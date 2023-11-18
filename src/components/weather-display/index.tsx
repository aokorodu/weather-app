import { TWeather, TWeatherForecast } from "../../interrfaces";
import styles from './WeatherDisplay.module.scss';
import Wind from "../wind";
import Temp from "../temp";

const WeatherDisplay = ({ current, forecast }: TWeather) => {
    console.log('code: ', current.condition.code)
    console.log('astro: ', forecast.forecastday[0].astro)
    const f: TWeatherForecast = forecast;
    const max = Math.round(f.forecastday[0].day.maxtemp_f);
    const min = Math.round(f.forecastday[0].day.mintemp_f);
    console.log('f:', f.forecastday[0].day.maxtemp_f)
    return (<>
        <div className={styles.dataHolder}>
            <Temp max={max} min={min} current={current} />
            <Wind {...current} />
        </div>

    </>)
}

export default WeatherDisplay;