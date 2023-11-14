const SunnyAnimation = () => {
    return (
        <>
            <circle cx="250" cy="250" r="75" fill="url(#radial_gradient)" stroke="white" strokeWidth="5" strokeOpacity={.2} />
            <defs>
                <radialGradient id="radial_gradient">
                    <stop offset="0%" stopColor="#FFDC5F" />
                    <stop offset="100%" stopColor="#FFA620" />
                </radialGradient>
            </defs>
        </>
    )
}

export default SunnyAnimation