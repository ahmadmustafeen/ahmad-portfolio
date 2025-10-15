'use client';

import { useEffect, useRef, useState } from "react"
import { Mouse } from "lucide-react"

export default function Hero() {
    const skills = ["ReactJs", "NextJs", "Typescript", "MongoDB"]
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

    const [hideScrollIndicator, setHideScrollIndicator] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const threshold = 120
            setHideScrollIndicator(window.scrollY > threshold)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <section id="home" className="w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-5xl w-full flex flex-col items-start relative">
                <div className="ml-0 sm:ml-8 lg:ml-32 w-full">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-widest text-theme-muted mb-6">
                        E B A D &nbsp; U L L A H
                    </h1>

                    <div className="flex items-center w-full mb-6 sm:mb-8 lg:mb-10 gap-3 sm:gap-4">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-semibold text-theme-primary leading-none">
                            Developer
                        </div>
                        <span className="hero-line align-middle" />
                    </div>

                    <div className="relative flex items-center gap-2">
                        <span ref={boxRef} className="absolute z-30 bg-animation-fixed rounded-none animate-boxSweep pointer-events-none" style={{ top: "50%", transform: "translateY(calc(-50% - 2px))", left: "0px", width: `${coverW}px`, height: `${coverH}px`, willChange: "clip-path", }} ></span>
                        <div className="flex-shrink-0 relative z-10">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-theme-muted opacity-90 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="3.2" strokeLinecap="square" strokeLinejoin="square"
                                />
                            </svg>
                        </div>

                        <div className="relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px] font-bold text-theme-primary leading-none overflow-visible">
                            <span ref={skillRef} className="relative z-10 pl-2 animate-skillText">
                                {skills[index]}
                            </span>
                        </div>
                    </div>
                </div>
                {/* Scroll indicator */}
                <div className={["scroll-indicator", hideScrollIndicator ? "hidden" : ""].join(" ")}>
                    <Mouse className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="wheel inline-block h-2 w-1 rounded-full bg-theme-muted" />
                </div>
            </div>
        </section>
    )
}