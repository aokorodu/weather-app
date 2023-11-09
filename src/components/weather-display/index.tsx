import React from "react";
import { TCurrentWeather } from "../../interfaces";
import styles from './WeatherDisplay.module.scss';
import { WindGraphic } from "../graphics";

const WeatherDisplay = ({ cloud, condition, temp_f, feelslike_f, wind_mph, wind_dir, wind_degree }: TCurrentWeather) => {
    console.log('condition: ', condition)
    return (<>
        <div className={styles.dataHolder}>
            <div className={styles.tempHolder}> <div className={styles.temp}>{Math.round(temp_f)}</div>
                <div className={styles.feelsLike}>FEELS LIKE: <strong>{Math.round(feelslike_f)}&deg;</strong></div>
            </div>

            <div className={styles.windHolder}>
                <WindGraphic />
                <div>cloud cover: <strong>{cloud}%</strong></div>
                <div>wind: <strong>{wind_mph}mph {wind_dir}</strong></div>
                <div>wind degree: <strong>{wind_degree}&deg;</strong></div>
            </div>
        </div>

    </>)
}

export default WeatherDisplay;