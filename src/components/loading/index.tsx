import styles from "./LoadingIndicator.module.scss";

const LoadingIndicator = () => {
    return (
        <div className={styles.container}>
            <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">
                <text x="250" y="250" fontSize={100} fill={"white"} opacity={.75} textAnchor={"middle"} dominantBaseline={"middle"}>LOADING...</text>
            </svg>
        </div>)
}

export default LoadingIndicator;