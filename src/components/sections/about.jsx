"use client"
import { SendHorizontal } from "lucide-react";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";
import aboutContent from "@/content/about.json";

const About = () => {
    const leftRef = useScrollReveal();
    const rightRef = useScrollReveal();

    return (
        <section className="min-h-screen flex justify-center text-theme-primary pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-8 lg:gap-10">

                <div ref={leftRef} className="lg:w-1/2 space-y-4 sm:space-y-6  text-left reveal">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-primary">{aboutContent.heading}</h2>

                    <p className="text-theme-secondary leading-relaxed text-sm sm:text-base">
                        {aboutContent.intro}
                    </p>

                    <p className="text-theme-secondary font-bold leading-relaxed text-sm sm:text-base">
                        {aboutContent.stackHeading}
                    </p>

                    <p className="text-theme-secondary leading-relaxed text-sm sm:text-base">
                        {aboutContent.stack.frontend}
                        <br />
                        {aboutContent.stack.backend}
                        <br />
                        {aboutContent.stack.others}
                    </p>

                    <p className="text-theme-secondary font-bold leading-relaxed text-sm sm:text-base">
                        {aboutContent.builtHeading}
                    </p>

                    <p className="text-theme-secondary leading-relaxed text-sm sm:text-base">
                        {aboutContent.built.map((line, idx) => (
                            <span key={idx}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>

                    {/* <div className="flex justify-start">
                        <Link href="/contact" className="relative inline-flex items-center gap-2 mt-4 font-bold text-primary py-2 overflow-hidden group" >
                            <span className="absolute inset-0 bg-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                            <span className="relative flex items-center gap-2 transition-colors duration-300">
                                <SendHorizontal className="transition-transform duration-300 group-hover:translate-x-1" />
                                Send me a message
                            </span>
                        </Link>
                    </div> */}
                </div>

                <div ref={rightRef} className="lg:w-1/2 flex flex-col justify-center reveal">
                    <div className="mb-6 sm:mb-8">
                        <div className="flex items-center gap-3 relative">
                            <div className="relative">
                                <div className="top-bar"></div>
                                <div className="bottom-piece"></div>
                            </div>
                            <h2 className="text-primary font-semibold text-base sm:text-lg">{aboutContent.sectionLabel}</h2>
                        </div>
                    </div>
                    <div className="w-full max-w-sm sm:max-w-md h-50 sm:h-58 lg:h-66 bg-theme-muted/10 flex items-center justify-center  overflow-hidden">
                        <img src={aboutContent.image.src} alt={aboutContent.image.alt} className="w-full h-full object-cover" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

