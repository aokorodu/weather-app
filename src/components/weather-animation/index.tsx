import { TCondition } from "../../interfaces";
import styles from "./WeatherAnimation.module.scss";
import SunnyAnimation from "./sunny";
import CloudyAnimation from "./cloudy";
import OvercastAnimation from "./overcast";

const getAnimation = ((t: string) => {
    console.log("text:", t.toLowerCase())
    if (t === "Sunny") return <SunnyAnimation />;
    if (t.toLowerCase() === "overcast") return <OvercastAnimation />;
    if (t.indexOf("cloudy") > -1) return <CloudyAnimation />
})
const WeatherAnimation = ({ code, icon, text }: TCondition) => {
    return (
        <>
            <div className={styles.container}>
                <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" preserveAspectRatio="xMidYMid slice">
                    {getAnimation(text)}
                </svg>
            </div>

        </>
    )
}

export default WeatherAnimation;