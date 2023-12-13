import { useEffect, useRef } from "react";

const SnowAnimation = () => {
    const defaultSpeed = .2;
    const defaultSize = 1;
    const minSize = defaultSize / 5;
    const num = 100;
    const snowFlakes = useRef<SVGCircleElement[]>([]);
    let animationID = 0;

    const addToRefs = (el: SVGCircleElement) => {
        snowFlakes.current.push(el);
    }

    const getSnowFlakes = () => {
        let arr = [];
        for (let i = 0; i < num; i++) {
            const x = Math.round(Math.random() * 500);
            const y = Math.round(Math.random() * 500);
            const r = 1 + Math.round(Math.random() * (defaultSize - minSize));
            const speed = r / defaultSize * defaultSpeed;
            const angle = Math.random() * 2 * Math.PI;
            arr.push(<circle ref={addToRefs} cx={x} cy={y} r={r} fill={"#FFFFFF"} fillOpacity={.5} data-speed={speed} data-angle={angle} data-x={x} />);
        }

        return arr;
    }

    const startSnowing = () => {
        animateSnow();
    }

    const stopSnowing = () => {
        cancelAnimationFrame(animationID)
    }

    const animateSnow = () => {
        for (let i = 0; i < num; i++) {
            const flake = snowFlakes.current[i];
            const x = Number(flake.getAttribute("data-x"));
            let y = Number(flake.getAttribute("cy"));
            let angle = Number(flake.getAttribute("data-angle"));
            const speed = Number(flake.getAttribute("data-speed"));
            angle += .01;
            if (angle > Math.PI * 2) angle = angle - (Math.PI * 2);
            const dx = Math.sin(angle) * 10;
            y += speed;
            if (y > 500) y = -defaultSize;
            flake.setAttribute("cy", String(y));
            flake.setAttribute("cx", String(x + dx));
            flake.setAttribute("data-angle", String(angle));

        }
        animationID = window.requestAnimationFrame(animateSnow)
    }

    useEffect(() => {
        startSnowing();
        return () => {
            stopSnowing()
        }


    }, [])

    return (<>
        {getSnowFlakes()}
    </>)
}

export default SnowAnimation