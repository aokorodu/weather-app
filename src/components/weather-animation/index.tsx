import { TCondition } from "../../interfaces";
import styles from "./WeatherAnimation.module.scss";
import SunnyAnimation from "./sunny";
import CloudyAnimation from "./cloudy";
import OvercastAnimation from "./overcast";
import ClearAnimation from "./clear";
import RainAnimation from "./rain";

const getAnimation = ((t: string) => {
    const desc: string = t.toLowerCase()
    if (desc === "sunny") return <SunnyAnimation />;
    if (desc === "clear") return <ClearAnimation />;
    if (desc === "overcast") return <OvercastAnimation />;
    if (desc.indexOf("cloudy") > -1) return <CloudyAnimation />
    if (desc.indexOf("rain") > -1) return <RainAnimation />

    // return <CloudyAnimation />
    // return <SunnyAnimation />
    // return <ClearAnimation />
    // return <OvercastAnimation />
    // return <RainAnimation />
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