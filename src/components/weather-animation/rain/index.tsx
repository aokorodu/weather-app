import { useEffect, useRef } from "react";

const RainAnimation = () => {

    const dropSpeed = 4;
    const numberOfDrops = 50;
    const dx = 150;
    const rainRefs = useRef<SVGLineElement[]>([]);
    let animationID = 0;

    const addToRefs = (el: SVGLineElement) => {
        if (el) rainRefs.current.push(el);
    };

    useEffect(() => {
        animateDrops();
        return () => {
            stopAnimatingDrops();
        }
    }, [])


    const animateDrops = () => {
        rainRefs.current.map((drop) => {
            let offset = Number(drop.getAttribute("stroke-dashoffset"));
            let speed = Number(drop.getAttribute("data-speed"));
            // console.log('offset: ', offset);
            offset -= speed;
            if (offset < -100) {
                offset = 0;
                const xpos = Math.round(Math.random() * 600);
                drop.setAttribute("x1", String(xpos));
                drop.setAttribute("x2", String(xpos - dx));
            }
            drop.setAttribute("stroke-dashoffset", String(offset))
        });
        animationID = window.requestAnimationFrame(animateDrops)
    }

    const getRainDrops = () => {
        const num = numberOfDrops;
        const arr = [];
        for (let i = 0; i < num; i++) {
            const x1 = Math.random() * 600;
            const x2 = x1 - dx;
            const y1 = 0;
            const y2 = 500;
            const color = "#FFFFFF";
            const maxLength = 7;
            const dropLength = 1 + Math.round(Math.random() * (maxLength - 1));

            const speed = dropLength / maxLength * dropSpeed;
            arr.push(<line data-dropLength={dropLength} data-speed={speed} key={`${x1}_${dropLength}`} ref={addToRefs} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeOpacity={.6} strokeWidth={.5} strokeDasharray={`${dropLength} ${(100 - dropLength)}`} pathLength={100} strokeDashoffset={Math.random() * 100} />)
        }
        return arr;
    }

    const stopAnimatingDrops = () => {
        cancelAnimationFrame(animationID);
    }
    return (
        <>
            <rect x="0" y="0" width="500" height="500" fill="url(#darkSky)" />
            <g>
                {getRainDrops()}
                <path fill="url(#cloud-gradient)" filter="url(#cloud-blur)" opacity=".8" fillRule="evenodd" d="M164-26c3-5 4-10 4-15 0-19-18-35-39-35-12 0-22 4-29 11-7-7-17-11-28-11-17 0-30 8-36 21C17-53 3-38 3-21c-22 0-40 16-40 35s18 35 40 35c12 0 22-5 30-12 7 7 17 12 30 12 7 0 13-2 19-5a44 44 0 0 0 50-7 44 44 0 0 0 30-4 36 36 0 0 0 60 8 36 36 0 0 0 46 8 36 36 0 0 0 45-7 35 35 0 0 0 36-12 33 33 0 0 0 35 12 34 34 0 0 0 42 7 33 33 0 0 0 43-7c6 7 15 12 25 12 19 0 34-16 34-35a34 34 0 0 0-34-35c0-17-12-32-28-34-5-13-17-21-31-21-9 0-18 4-24 11-6-7-15-11-24-11-19 0-34 16-34 35l3 15-5 5c-2-4-5-6-8-8a37 37 0 0 0-33-52c-10 0-19 4-26 11a36 36 0 0 0-59 10c-17 3-29 18-29 36a37 37 0 0 0-19 5c-3-5-7-9-13-12Z" clipRule="evenodd" />
            </g>
            <defs>
                <filter id="cloud-blur" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                </filter>
                <linearGradient id="cloud-gradient" x1="432" x2="432.6" y1="54" y2="-60.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#222222" />
                </linearGradient>
                <linearGradient id="darkSky" x1="0" x2="0" y1="0" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6C6B6B" />
                    <stop offset="1" stopColor="#ffffff" />
                </linearGradient>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h500v500H0z" />
                </clipPath>
            </defs>
        </>
    )
}

export default RainAnimation;