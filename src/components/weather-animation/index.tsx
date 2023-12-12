import { TWeatherCondition } from "../../interrfaces";
import styles from "./WeatherAnimation.module.scss";
import SunnyAnimation from "./sunny";
import CloudyAnimation from "./cloudy";
import OvercastAnimation from "./overcast";
import ClearAnimation from "./clear";
import FogAnimation from "./fog";
import RainAnimation from "./rain";
import SnowAnimation from "./snow"

const getAnimation = ((t: string) => {
    const desc: string = t.toLowerCase()
    if (desc === "sunny") return <SunnyAnimation />;
    if (desc === "clear") return <ClearAnimation />;
    if (desc === "overcast") return <OvercastAnimation />;
    if (desc.indexOf("cloudy") > -1) return <CloudyAnimation />
    if (desc.indexOf("rain") > -1) return <RainAnimation />
    if (desc.indexOf("drizzle") > -1) return <RainAnimation />
    if (desc.indexOf("fog") > -1) return <FogAnimation />
    if (desc.indexOf("mist") > -1) return <FogAnimation />
    if (desc.indexOf("snow") > -1) return <SnowAnimation />
    //return <CloudyAnimation />
    // return <SunnyAnimation />
    // return <ClearAnimation />
    //return <OvercastAnimation />
    //return <RainAnimation />
    //return <FogAnimation />
    //return <SnowAnimation />
})
const WeatherAnimation = ({ text }: TWeatherCondition) => {
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