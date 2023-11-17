const RainAnimation = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" fill="none">
            <rect x="0" y="0" width="500" height="500" fill="url(#darkSky)" />
            <g clip-path="url(#a)">
                <path stroke="#fff" stroke-opacity=".3" d="m242 346-19 31M152 63l-33 55M65 198l-47 77M85 115l-3 5M441 390l-36 59M58 21l-9 15M100 389l-32 54M109 274l-1 1M81 23l-54 92M118 100l-24 39M107 317l-44 73M387 139l-23 39M171 157l-45 75M285 283l-4 6M368 102l-5 9M364 342l-26 43M387 319l-31 54M254 465l-13 22M24 83 3 118M373 255l-15 24M303 33l-26 43M234 139l-46 77M250 74l-2 4M229 0l-7 12M263 289l-25 42M270 198l-1 1M248 2l-43 72M276 62l-18 31M267 232l-34 57M487 93l-18 30M386 25l-35 59M407 205l-3 5M472 64l-4 6M469 252l-20 33M487 234l-25 42M383 348l-10 17M203 49l-17 28" />
                <path fill="url(#b)" opacity=".8" fill-rule="evenodd" d="M164-26c3-5 4-10 4-15 0-19-18-35-39-35-12 0-22 4-29 11-7-7-17-11-28-11-17 0-30 8-36 21C17-53 3-38 3-21c-22 0-40 16-40 35s18 35 40 35c12 0 22-5 30-12 7 7 17 12 30 12 7 0 13-2 19-5a44 44 0 0 0 50-7 44 44 0 0 0 30-4 36 36 0 0 0 60 8 36 36 0 0 0 46 8 36 36 0 0 0 45-7 35 35 0 0 0 36-12 33 33 0 0 0 35 12 34 34 0 0 0 42 7 33 33 0 0 0 43-7c6 7 15 12 25 12 19 0 34-16 34-35a34 34 0 0 0-34-35c0-17-12-32-28-34-5-13-17-21-31-21-9 0-18 4-24 11-6-7-15-11-24-11-19 0-34 16-34 35l3 15-5 5c-2-4-5-6-8-8a37 37 0 0 0-33-52c-10 0-19 4-26 11a36 36 0 0 0-59 10c-17 3-29 18-29 36a37 37 0 0 0-19 5c-3-5-7-9-13-12Z" clip-rule="evenodd" />
            </g>
            <defs>
                <linearGradient id="b" x1="432" x2="432.6" y1="54" y2="-60.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#777777" />
                    <stop offset="1" stop-color="#fff" />
                </linearGradient>
                <linearGradient id="darkSky" x1="0" x2="0" y1="0" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#000000" stopOpacity={.5} />
                    <stop offset="1" stop-color="#000000" stopOpacity={0} />
                </linearGradient>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h500v500H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default RainAnimation;