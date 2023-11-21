import styles from './CloudyAnimation.module.scss';

const CloudyAnimation = () => {
    return (
        <>
            <g>
                <g className={styles.cloud_1}>
                    <use href="#cloud" x="100" y="120" filter="url(#f1)" ></use>
                </g>
                <g className={styles.cloud_2}>
                    <use href="#cloud" x="100" y="250" filter="url(#f1)" ></use>
                </g>
                <g className={styles.cloud_3}>
                    <use href="#cloud" x="100" y="200" filter="url(#f1)" ></use>
                </g>
                <g className={styles.cloud_4}>
                    <use href="#cloud" x="100" y="150" filter="url(#f1)" ></use>
                </g>
            </g>
            <defs>
                <filter id="f1" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                </filter>
                <g id="cloud" >
                    <path fillRule="evenodd" clipRule="evenodd" d="M184.788 47.6002C186.898 43.3382 188.074 38.5965 188.074 33.6C188.074 15.0432 171.849 0 151.835 0C141.56 0 132.283 3.96534 125.688 10.3356C119.093 3.96534 109.817 0 99.5413 0C84.8606 0 72.2188 8.09411 66.5238 19.7318C49.7294 22.5518 36.9423 36.2519 36.7007 52.8027C36.5469 52.8009 36.3928 52.8 36.2385 52.8C16.2245 52.8 0 67.8432 0 86.4C0 104.957 16.2245 120 36.2385 120C47.2505 120 57.1152 115.446 63.7615 108.258C70.4078 115.446 80.2725 120 91.2844 120C97.8382 120 103.986 118.387 109.29 115.566C114.662 118.387 120.887 120 127.523 120C138.56 120 148.458 115.54 155.185 108.48C157.935 109.107 160.806 109.44 163.761 109.44C183.775 109.44 200 94.1819 200 75.36C200 63.9106 193.996 53.7799 184.788 47.6002Z" fill="white" fillOpacity={.85} />
                </g>
                <filter id="filter0_f_355_78" x="12" y="121" width="226" height="133" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_355_78" />
                </filter>
                <filter id="filter1_f_355_78" x="262" y="235" width="226" height="133" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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