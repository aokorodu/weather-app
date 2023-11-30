import styles from "./LoadingIndicator.module.scss";

const LoadingIndicator = () => {
    return (
        <div className={styles.container}>
            <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">
                <rect id="day" width="500" height="500" fill="url(#sky_radial)" />

                <g id="Loading Animation" transform="translate(0, -25)">
                    <circle id="Ellipse 50" cx="250.5" cy="250" r="45" fill="white" fillOpacity={.5} />
                    <path className={styles.tri1} id="tri8" d="M198.382 198.381L212.602 202.192L202.192 212.602L198.382 198.381Z" fill="white" />
                    <path className={styles.tri2} id="tri7" d="M177 250L189.75 257.361L189.75 242.639L177 250Z" fill="white" />
                    <path className={styles.tri3} id="tri6" d="M198.382 301.619L212.602 297.808L202.192 287.398L198.382 301.619Z" fill="white" />
                    <path className={styles.tri4} id="tri5" d="M250 323L257.361 310.25H242.639L250 323Z" fill="white" />
                    <path className={styles.tri5} id="tri4" d="M301.619 301.619L297.808 287.398L287.398 297.809L301.619 301.619Z" fill="white" />
                    <path className={styles.tri6} id="tri3" d="M323 250L310.25 257.361L310.25 242.639L323 250Z" fill="white" />
                    <path className={styles.tri7} id="tri2" d="M301.619 198.381L297.808 212.602L287.398 202.191L301.619 198.381Z" fill="white" />
                    <path className={styles.tri8} id="tri1" d="M250 177L257.361 189.75H242.639L250 177Z" fill="white" />
                </g>
                <defs>
                    <radialGradient id="sky_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(297.5)">
                        <stop stopColor="#84D3FF" />
                        <stop offset="1" stopColor="#008EDE" />
                    </radialGradient>
                    <clipPath id="clip0_0_1">
                        <rect width="500" height="500" fill="white" />
                    </clipPath>
                </defs>


            </svg>
        </div >)
}

export default LoadingIndicator;