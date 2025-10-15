"use client"

import { PlusIcon } from "lucide-react"
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
    const PAD_Y = 26
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
        <section id="home" className="w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-5xl w-full flex flex-col items-start relative">
                <div className="ml-0 sm:ml-8 lg:ml-32 w-full">
                    <h1 className="text-3xl md:text-xl font-extrabold tracking-widest  text-theme-muted mb-6">
                        E B A D &nbsp; U L L A H
                    </h1>

                    <div className="flex items-center w-full mb-6 sm:mb-8 lg:mb-10 gap-3 sm:gap-4">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-semibold text-theme-primary leading-none">
                            Developer</div>
                    </div>

                    <div className="relative flex items-center gap-2">
                        <span ref={boxRef}
                            className="absolute z-30 bg-animation-fixed rounded-none animate-boxSweep pointer-events-none"
                            style={{ top: "50%", transform: "translateY(calc(-50% - 20px))", left: "0px", width: `${coverW}px`, height: `${coverH}px`, }} ></span>
                        <div className="flex-shrink-0 relative z-10">
                            <PlusIcon size={90} className="text-gray-500 opacity-90" strokeWidth={3.2} /> </div>

                        <div className="relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px] font-bold text-theme-primary leading-none overflow-visible">
                            <span ref={skillRef} key={skills[index]} className="relative z-10 pl-2 animate-skillFade">
                                {skills[index]}
                            </span>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}