import { SkyProps } from "../../interrfaces"
import { getTimeOfDay } from "../../utils";
import { TimeOfDay } from "../../interrfaces"

const Sky = ({ sunrise, sunset, locationTime }: SkyProps) => {

    const todString: TimeOfDay = getTimeOfDay(locationTime, sunrise, sunset);
    console.log('time of day: ', todString)
    const getSun = () => {

    }

    const getFill = (): string => {

        let fillString = "";
        switch (todString) {
            case "day":
                fillString = "url(#dayGradient)"
                break;
            case "night":
                fillString = "url(#nightGradient)"
                break;

            case "sunrise":
                fillString = "url(#sunriseGradient)"
                break;

            case "sunset":
                fillString = "url(#sunsetGradient)"
                break;

            default:
                fillString = "url(#dayGradient)"

        }


        return fillString;
    }

    return (
        <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">
            <rect width="500" height="500" fill={getFill()} />
            {todString === "day" &&
                <>
                    <circle cx="250" cy="225" r="75" fill="none" stroke="white" strokeWidth="15" strokeOpacity={.1} />
                    <circle cx="250" cy="225" r="75" fill="url(#radial_gradient)" />
                </>

            }
            {(todString !== "day") && (todString !== "sunrise") && <g fill="white">
                <circle cx="119.5" cy="201.5" r=".5" />
                <circle cx="62.5" cy="253.5" r=".5" />
                <circle cx="70.3818" cy="45.5" r=".5" />
                <circle cx="414.421" cy="179.212" r=".5" />
                <circle cx="10.7568" cy="120.447" r=".5" />
                <circle cx="376.138" cy="110.78" r=".5" />
                <circle cx="282.027" cy="190.88" r=".5" />
                <circle cx="288.88" cy="248.869" r=".5" />
                <circle cx="272.137" cy="228.298" r=".5" />
                <circle cx="473.566" cy="9.271" r=".5" />
                <circle cx="322.506" cy="188.986" r=".5" />
                <circle cx="266.777" cy="66.5605" r=".5" />
                <circle cx="66.0029" cy="205.838" r=".5" />
                <circle cx="293.371" cy="94.5" r=".5" />
                <circle cx="134.351" cy="89.9966" r=".5" />
                <circle cx="283.241" cy="112.518" r=".5" />
                <circle cx="394.567" cy="231.708" r=".5" />
                <circle cx="149.291" cy="234.898" r=".5" />
                <circle cx="423.246" cy="3.19141" r=".5" />
                <circle cx="489.888" cy="118.565" r=".5" />
                <circle cx="191.196" cy="151.113" r=".5" />
                <circle cx="469.17" cy="54.4932" r=".5" />
                <circle cx="216.357" cy="220.34" r=".5" />
                <circle cx="378.582" cy="175.51" r=".5" />
                <circle cx="410.387" cy="68.5" r=".5" />
                <circle cx="447.396" cy="230.5" r=".5" />
                <circle cx="153.062" cy="32.2837" r=".5" />
                <circle cx="241.618" cy="98.7563" r=".5" />
                <circle cx="226.5" cy="123.771" r=".5" />
                <circle cx="334.811" cy="92.0938" r=".5" />
                <circle cx="12.5996" cy="49.0952" r=".5" />
                <circle cx="98.5" cy="245.5" r=".5" />
                <circle cx="38.5" cy="178.616" r=".5" />
                <circle cx="112.237" cy="86.0195" r=".5" />
                <circle cx="60.9102" cy="177.766" r=".5" />
                <circle cx="127.236" cy="79.2178" r=".5" />
                <circle cx="69.5" cy="93.479" r=".5" />
                <circle cx="314.146" cy="23.2773" r=".5" />
            </g>
            }

            <defs>
                <radialGradient id="radial_gradient">
                    <stop offset="0%" stopColor="#FFDC5F" />
                    <stop offset="100%" stopColor="#FFA620" />
                </radialGradient>
                <linearGradient id="dayGradient" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#32A9FF" />
                    <stop offset="1" stopColor="#C0E4FE" />
                </linearGradient>
                <linearGradient id="sunriseGradient" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0071C3" />
                    <stop offset="1" stopColor="#FFB547" />
                </linearGradient>
                <linearGradient id="sunsetGradient" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#004475" />
                    <stop offset="1" stopColor="#FF7E47" />
                </linearGradient>
                <linearGradient id="nightGradient" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00080E" />
                    <stop offset="1" stopColor="#011C30" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default Sky;