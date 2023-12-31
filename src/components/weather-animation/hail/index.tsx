import { useEffect, useRef } from "react";

const HailAnimation = () => {
    const defaultSpeed = 10;
    const defaultSize = 1;
    const minSize = defaultSize / 5;
    const num = 5;
    const snowFlakes = useRef<SVGCircleElement[]>([]);
    let animationID = 0;

    const addToRefs = (el: SVGCircleElement) => {
        snowFlakes.current.push(el);
    }

    const getHail = () => {
        let arr = [];
        for (let i = 0; i < num; i++) {
            const x = Math.round(Math.random() * 500);
            const y = Math.round(Math.random() * 500);
            const r = 1 + Math.round(Math.random() * (defaultSize - minSize));
            const speed = r / defaultSize * defaultSpeed;
            arr.push(<circle ref={addToRefs} cx={x} cy={y} r={r} fill={"#FFFFFF"} fillOpacity={.5} data-speed={speed} data-x={x} />);
        }

        return arr;
    }

    const startHailing = () => {
        animateSnow();
    }

    const stopHailing = () => {
        cancelAnimationFrame(animationID)
    }

    const animateSnow = () => {
        for (let i = 0; i < num; i++) {
            const flake = snowFlakes.current[i];
            let x = Number(flake.getAttribute("cx"));
            let y = Number(flake.getAttribute("cy"));
            const speed = Number(flake.getAttribute("data-speed"));
            x += speed / 3;
            if (x > 500) x = -defaultSize;
            y += speed;
            if (y > 500) y = -defaultSize;
            flake.setAttribute("cx", String(x));
            flake.setAttribute("cy", String(y));

        }
        animationID = window.requestAnimationFrame(animateSnow)
    }

    useEffect(() => {
        startHailing();
        return () => {
            stopHailing()
        }


    }, [])

    return (<>
        {getHail()}
    </>)
}

export default HailAnimation