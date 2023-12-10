const FogAnimation = () => {
    return (<>
        <rect width="500" height="500" fill="url(#fog_gradient)" />

        <defs>
            <linearGradient id="fog_gradient" x1="250" y1="0" x2="250" y2="500" gradientUnits="userSpaceOnUse">
                <stop offset="0.1" stopColor="#CDCDCD" stopOpacity="1" />
                <stop offset="1" stopColor="#CDCDCD" stopOpacity="0.3" />
            </linearGradient>
        </defs>

    </>)
}

export default FogAnimation