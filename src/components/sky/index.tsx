import { SkyProps } from "../../interfaces";
import { getTimeDifference } from "../../utils";
import { TimeOfDay } from "../../interfaces";

const Sky = ({ sunrise, sunset, locationTime }: SkyProps) => {

    const str: TimeOfDay = getTimeDifference(locationTime, sunrise, sunset);
    console.log('time of day: ', str)
    const getFill = (): string => {

        let fillString = "";
        switch (str) {
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


            <defs>
                <linearGradient id="dayGradient" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#32A9FF" />
                    <stop offset="1" stop-color="#C0E4FE" />
                </linearGradient>
                <linearGradient id="sunriseGradient" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0071C3" />
                    <stop offset="1" stop-color="#FFB547" />
                </linearGradient>
                <linearGradient id="sunsetGradient" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#004475" />
                    <stop offset="1" stop-color="#FF7E47" />
                </linearGradient>
                <linearGradient id="nightGradient" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00080E" />
                    <stop offset="1" stop-color="#011C30" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default Sky;