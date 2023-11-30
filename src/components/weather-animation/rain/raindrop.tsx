const RainDrop = () => {
    const dx = 100;
    const x1 = Math.round(Math.random() * 500);
    const x2 = x1 - dx;
    const y1 = 0;
    const y2 = 500;
    return (
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={"white"} />
    )
}