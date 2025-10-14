'use client';

import { useEffect, useRef, useState } from "react"

export default function Hero() {
    const skills = ["ReactJs", "NextJs", "Typescript", "Node.js", "MongoDB"]
    const [index, setIndex] = useState(0)
    const boxRef = useRef(null)
    const skillRef = useRef(null)
    const [skillW, setSkillW] = useState(0)
    const [skillH, setSkillH] = useState(0)

    const ICON_W = 90
    const ICON_H = 90
    const GAP_W = 24
    const PAD_Y = 10
    const coverW = ICON_W + GAP_W + skillW
    const coverH = Math.max(skillH, ICON_H) + PAD_Y

    useEffect(() => {
        const el = boxRef.current
        if (!el) return

        const handleIter = () => {
            setIndex((prev) => (prev + 1) % skills.length)
        }
        el.addEventListener("animationiteration", handleIter)
        return () => el.removeEventListener("animationiteration", handleIter)
    }, [skills.length])

    useEffect(() => {
        const measure = () => {
            if (!skillRef.current) return
            const rect = skillRef.current.getBoundingClientRect()
            setSkillW(Math.ceil(rect.width))
            setSkillH(Math.ceil(rect.height))
        }
        measure()
        const ro = new ResizeObserver(measure)
        if (skillRef.current) ro.observe(skillRef.current)
        const onResize = () => measure()
        window.addEventListener("resize", onResize)
        return () => {
            window.removeEventListener("resize", onResize)
            ro.disconnect()
        }
    }, [index])

    return (
        <section id="home" className="w-full min-h-[90vh] flex items-center justify-center px-8 pt-24">
            <div className="max-w-5xl w-full flex flex-col items-start relative">
                <div className="ml-32 w-full">
                    <h1 className="text-3xl md:text-xl font-extrabold tracking-widest text-muted mb-6">
                        E B A D &nbsp; U L L A H
                    </h1>


                    <div className="flex items-center w-full mb-10">
                        <div className="text-[100px] font-semibold text-white leading-none">Developer</div>
                    </div>


                    <div className="relative flex items-center gap-2">
                        <span ref={boxRef} className="absolute z-30 bg-accent3 rounded-none animate-boxSweep pointer-events-none" style={{ top: "50%", transform: "translateY(calc(-50% - 2px))", left: "0px", width: `${coverW}px`, height: `${coverH}px`, willChange: "clip-path", }} ></span>
                        <div className="flex-shrink-0 relative z-10">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 opacity-90">
                                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="3.2" strokeLinecap="square" strokeLinejoin="square"
                                />
                            </svg>
                        </div>


                        <div className="relative inline-block text-[90px] font-bold text-white leading-none overflow-visible">
                            <span ref={skillRef} className="relative z-10 pl-2 animate-skillText">
                                {skills[index]}
                            </span>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}


