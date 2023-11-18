import { TWeatherCurrent } from "../../interrfaces";
import styles from "./Wind.module.scss";

const Wind = ({ cloud, wind_mph, wind_dir, wind_degree }: TWeatherCurrent) => {
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