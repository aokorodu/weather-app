import { WindGraphic } from "../graphics";
import { TCurrentWeather } from "../../interfaces";
import styles from "./Wind.module.scss";

const Wind = ({ cloud, wind_mph, wind_dir, wind_degree }: TCurrentWeather) => {
    return (
        <>
            <div className={styles.container}>
                <div>cloud cover: <strong>{cloud}%</strong></div>
                <div>wind: <strong>{wind_mph}mph {wind_dir}</strong></div>
                <div>wind degree: <strong>{wind_degree}&deg;</strong></div>
            </div>
        </>)
}

export default Wind;