import { TimeOfDay } from "../../interrfaces"

const Sky = ({ description }: TimeOfDay) => {



    const getFill = (): string => {

        let fillString = "";
        switch (description) {
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
            {description === "day" && <circle cx="250" cy="250" r="75" fill="url(#radial_gradient)" stroke="white" strokeWidth="5" strokeOpacity={.2} />
            }
            <defs>
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
                <radialGradient id="radial_gradient">
                    <stop offset="0%" stopColor="#FFDC5F" />
                    <stop offset="100%" stopColor="#FFA620" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export default Sky;