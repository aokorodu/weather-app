const CloudyAnimation = () => {
    return (
        <>
            <circle cx="250" cy="250" r="75" fill="url(#radial_gradient)" stroke="white" strokeWidth="5" strokeOpacity={.2} />
            <g filter="url(#filter0_f_355_78)">
                <ellipse cx="124.5" cy="160" rx="39.5" ry="35" fill="white" />
                <ellipse cx="155" cy="180.5" rx="40" ry="35.5" fill="white" />
                <ellipse cx="95.5" cy="180.5" rx="39.5" ry="35.5" fill="white" />
                <ellipse cx="55.5" cy="215" rx="39.5" ry="35" fill="white" />
                <ellipse cx="115.5" cy="215" rx="39.5" ry="35" fill="white" />
                <ellipse cx="155" cy="215" rx="40" ry="35" fill="white" />
                <ellipse cx="194.5" cy="203.5" rx="39.5" ry="35.5" fill="white" />
                <ellipse cx="181.5" cy="160" rx="39.5" ry="35" fill="white" />
            </g>
            <g filter="url(#filter1_f_355_78)">
                <ellipse cx="374.5" cy="274" rx="39.5" ry="35" fill="white" />
                <ellipse cx="405" cy="294.5" rx="40" ry="35.5" fill="white" />
                <ellipse cx="345.5" cy="294.5" rx="39.5" ry="35.5" fill="white" />
                <ellipse cx="305.5" cy="329" rx="39.5" ry="35" fill="white" />
                <ellipse cx="365.5" cy="329" rx="39.5" ry="35" fill="white" />
                <ellipse cx="405" cy="329" rx="40" ry="35" fill="white" />
                <ellipse cx="444.5" cy="317.5" rx="39.5" ry="35.5" fill="white" />
                <ellipse cx="431.5" cy="274" rx="39.5" ry="35" fill="white" />
            </g>
            <defs>
                <filter id="filter0_f_355_78" x="12" y="121" width="226" height="133" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_355_78" />
                </filter>
                <filter id="filter1_f_355_78" x="262" y="235" width="226" height="133" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_355_78" />
                </filter>
                <radialGradient id="radial_gradient">
                    <stop offset="0%" stopColor="#FFDC5F" />
                    <stop offset="100%" stopColor="#FFA620" />
                </radialGradient>
            </defs>
        </>

    )
}

export default CloudyAnimation