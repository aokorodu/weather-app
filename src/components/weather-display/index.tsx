import React from "react";
import { TCurrentWeather } from "../../interfaces";

const WeatherDisplay = ({ cloud, condition, temp_f, wind_mph }: TCurrentWeather) => {
    return (<>
        <div>current temperature: {temp_f}</div>
        <div>cloud cover: {cloud}</div>
        <div>conditions: {condition.text}</div>
    </>)
}

export default WeatherDisplay;