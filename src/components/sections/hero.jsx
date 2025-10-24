"use client"

import { PlusIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import TextScrambleReveal from "../common/TextScrambleReveal";

export default function Hero() {
    const skills = ["ReactJs", "NextJs", "Typescript", "Node.js", "MongoDB", "MERN Stack"]
    const [index, setIndex] = useState(0)
    const boxRef = useRef(null)
    const skillRef = useRef(null)
    const iconBoxRef = useRef(null)
    const [skillW, setSkillW] = useState(0)
    const [skillH, setSkillH] = useState(0)
    const [iconW, setIconW] = useState(90)
    const [iconH, setIconH] = useState(90)

    const GAP_W = 24
    const PAD_Y = 14
    const coverW = iconW + GAP_W + skillW
    const coverH = Math.max(skillH, iconH) + PAD_Y

    useEffect(() => {
        const el = boxRef.current
        if (!el) return
        const handleIter = () => setIndex((prev) => (prev + 1) % skills.length)
        el.addEventListener("animationiteration", handleIter)
        return () => el.removeEventListener("animationiteration", handleIter)
    }, [skills.length])

    useEffect(() => {
        const measure = () => {
            if (skillRef.current) {
                const rect = skillRef.current.getBoundingClientRect()
                setSkillW(Math.ceil(rect.width))
                setSkillH(Math.ceil(rect.height))
            }
            if (iconBoxRef.current) {
                const ib = iconBoxRef.current.getBoundingClientRect()
                setIconW(Math.ceil(ib.width))
                setIconH(Math.ceil(ib.height))
            }
        }
        measure()
        const ro = new ResizeObserver(measure)
        if (skillRef.current) ro.observe(skillRef.current)
        if (iconBoxRef.current) ro.observe(iconBoxRef.current)
        return () => ro.disconnect()
    }, [index])

    return (
        <section id="home" className="w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-5xl w-full flex flex-col items-start relative ml-[250px]  mb-[70px]">
                <div className="w-full">
                    <span className="inline-block text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold tracking-[0.3em] text-theme-muted mb-6 leading-tight">
                        <TextScrambleReveal text="AHMAD MUSTAFEEN" />
                    </span>

                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-semibold text-theme-primary leading-none mb-2 sm:mb-3">
                        <span>Developer</span>
                        <span className="hero-line align-middle" />

                    </div>

                    <div className="relative flex items-center">
                        <span ref={boxRef} className="absolute z-30 bg-animation-fixed rounded-none animate-boxSweep pointer-events-none" style={{
                            top: "50%", transform: "translateY(-50%)", left: "0px", width: `${coverW}px`, height: `${coverH}px`,
                        }}
                        ></span>

                        <div className="flex-shrink-0 relative z-10" ref={iconBoxRef}>
                            <PlusIcon className="text-gray-500 opacity-90 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" strokeWidth={3.2} />
                        </div>

                        <div className="relative inline-block text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[90px] font-bold text-theme-primary leading-none overflow-visible">
                            <span ref={skillRef}  key={skills[index]}  className="relative z-10 pl-2 animate-skillFade">
                                {skills[index]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
