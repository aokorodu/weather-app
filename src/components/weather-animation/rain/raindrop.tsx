import { useRef } from "react";

const RainDrop = () => {
    const dx = 100;
    const x1 = Math.round(Math.random() * 500);
    const x2 = x1 - dx;
    const y1 = 0;
    const y2 = 500;
    const color = "#FFFFFF"
    const dropLength = 50 + Math.round(Math.random() * 10);
    const el = useRef(null);
    return (
        <line ref={el} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeOpacity={.2} strokeWidth={1} strokeDasharray={`${dropLength} ${(100 - dropLength)}`} pathLength={100} />
    )
}

export default RainDrop;