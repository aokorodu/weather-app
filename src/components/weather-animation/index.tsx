import { TCondition } from "../../interfaces";
import styles from "./WeatherAnimation.module.scss";
import SunnyAnimation from "./sunny";
import CloudyAnimation from "./cloudy";

const getAnimation = ((t: string) => {
    console.log("text:", t, " index of cloudy", t.indexOf("cloudy"))
    if (t === "Sunny") return <SunnyAnimation />;
    if (t.indexOf("cloudy") > -1) return <CloudyAnimation />
})
const WeatherAnimation = ({ code, icon, text }: TCondition) => {
    return (
        <>
            <div className={styles.container}>
                <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" preserveAspectRatio="xMidYMin slice">
                    {getAnimation(text)}
                </svg>
            </div>

        </>
    )
}

export default WeatherAnimation;