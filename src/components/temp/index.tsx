import styles from "./Temp.module.scss";
import { TWeatherCurrent } from "../../interrfaces";
type TempProps = {
    max: number,
    min: number,
    current: TWeatherCurrent
}
const Temp = ({ max, min, current }: TempProps) => {
    return (
        <><div className={styles.tempHolder}>
            <div className={styles.temp}>{Math.round(current.temp_f)}</div>
            <div className={styles.feelsLike}>FEELS LIKE: <strong>{Math.round(current.feelslike_f)}&deg;</strong></div>
            <div>{`HI:${max} LO:${min}`}</div>
            <div className={styles.conditions}>{current.condition.text.toUpperCase()}</div>
        </div></>
    )
}

export default Temp;