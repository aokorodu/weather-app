import React from "react";
import { TCurrentWeather, TWeather, TForcastWeather, TForcastDay } from "../../interfaces";
import styles from './WeatherDisplay.module.scss';
import { WindGraphic } from "../graphics";
import Wind from "../wind";

const WeatherDisplay = ({ current, forecast }: TWeather) => {
    const f: TForcastWeather = forecast;
    // const arr: TForcastDay[] = f.forcast;
    const max = Math.round(f.forecastday[0].day.maxtemp_f);
    const min = Math.round(f.forecastday[0].day.mintemp_f);
    console.log('f:', f.forecastday[0].day.maxtemp_f)
    return (<>
        <div className={styles.dataHolder}>
            <div className={styles.tempHolder}>
                <div className={styles.temp}>{Math.round(current.temp_f)}</div>
                <div className={styles.feelsLike}>FEELS LIKE: <strong>{Math.round(current.feelslike_f)}&deg;</strong></div>
                <div>{`HI:${max} LO:${min}`}</div>
                <div className={styles.conditions}>{current.condition.text.toUpperCase()}</div>
            </div>

            <div className={styles.windHolder}>
                <Wind {...current} />
            </div>
        </div>

    </>)
}

export default WeatherDisplay;