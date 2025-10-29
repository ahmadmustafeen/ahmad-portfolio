'use client';
import React, { useState, useEffect, useRef } from "react";
import ReactSlider from "react-slider";
import PrimaryButton from "@/components/common/PrimaryButton";
import SectionHeader from "@/components/common/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import projectsContent from "@/content/projects.json";

function ProjectRow({ project }) {
    const textRef = useScrollReveal();
    const imageRef = useScrollReveal();

    return (
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between relative gap-8 lg:gap-12 py-10 px-4 sm:px-6 lg:px-8">
            <div
                ref={textRef}
                className="w-full lg:w-[45%] text-theme-primary space-y-4 sm:space-y-5 z-10 reveal order-2 lg:order-1"
            >
                <SectionHeader number={project.number} />
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-theme-primary leading-tight text-start">
                    {project.title}
                </h3>
                <p className="text-theme-secondary leading-relaxed text-start text-sm lg:text-lg sm:text-base">
                    {project.description}
                </p>
                <p className="text-theme-secondary flex items-start text-sm sm:text-base">
                    {Array.isArray(project.skills)
                        ? project.skills.join(", ")
                        : project.skills}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <PrimaryButton>View project</PrimaryButton>
                </a>
            </div>

            <div
                ref={imageRef}
                className="w-full lg:w-[65%] relative z-0 reveal overflow-hidden rounded-xl shadow-lg order-1 lg:order-2"
            >
                <img  src={project.screenTextureUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default function ProjectCard() {
    const [index, setIndex] = useState(0);
    const sliderRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setIndex((prev) => (prev + 1) % projectsContent.length);
        }, 5000);
        return () => clearInterval(autoSlide);
    }, []);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
    };

    const handleMouseUp = (e) => {
        if (!isDragging.current) return;
        const diff = e.clientX - startX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                setIndex((prev) =>
                    prev === 0 ? projectsContent.length - 1 : prev - 1
                );
            } else {
                setIndex((prev) => (prev + 1) % projectsContent.length);
            }
        }
        isDragging.current = false;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

    return (
        <section
            id="projects"
            className="w-full min-h-screen flex items-center justify-center pt-12 relative"
        >
            <div
                ref={sliderRef}
                className="w-full max-w-6xl relative overflow-hidden select-none cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {projectsContent.map((project, i) => (
                    <div
                        key={i}
                        className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${i === index
                                ? "opacity-100 translate-x-0 relative"
                                : i < index
                                    ? "-translate-x-full opacity-0"
                                    : "translate-x-full opacity-0"
                            }`}
                    >
                        <ProjectRow project={project} />
                    </div>
                ))}

                <ReactSlider
                    className="hidden"
                    min={0}
                    max={projectsContent.length - 1}
                    step={1}
                    value={index}
                    onChange={setIndex}
                />
            </div>
        </section>
    );
}
