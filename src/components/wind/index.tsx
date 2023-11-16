import { WindGraphic } from "../graphics";
import { TCurrentWeather } from "../../interfaces";
import styles from "./Wind.module.scss";

const Wind = ({ cloud, wind_mph, wind_dir, wind_degree }: TCurrentWeather) => {
    return (
        <>
            <div className={styles.container}>
                <div>CLOUD COVER: <strong>{cloud}%</strong></div>
                <div>WIND: <strong>{wind_mph}mph {wind_dir}</strong></div>
                {/* <div>WIND: <strong>{wind_degree}&deg;</strong></div> */}
            </div>
        </>)
}

export default Wind;