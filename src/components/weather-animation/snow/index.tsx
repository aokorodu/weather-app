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
            arr.push(<circle ref={addToRefs} cx={x} cy={y} r={r} fill={"#FFFFFF"} fillOpacity={.5} data-speed={speed} />);
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
            const x = flake.getAttribute("cx");
            let y = Number(flake.getAttribute("cy"));
            console.log('y:', y)
            const speed = Number(flake.getAttribute("data-speed"));

            y += speed;
            if (y > 500) y = -defaultSize;
            flake.setAttribute("cy", String(y));

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