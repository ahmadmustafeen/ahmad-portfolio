'use client';
import React from "react";
import PrimaryButton from "@/components/common/PrimaryButton";
import SectionHeader from "@/components/common/SectionHeader";
import { Canvas } from "@react-three/fiber";
import LaptopModel from "@/components/three/laptop-model";
import { useThrottledMousePosition } from "@/hooks/useThrottledMousePosition";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import projectsContent from "@/content/projects.json";

function ProjectRow({ project, index, mousePosition }) {
    const textRef = useScrollReveal();
    const canvasRef = useScrollReveal();
    const textOrder = index % 2 === 0 ? "order-2 lg:order-1" : "order-2 lg:order-2";
    const canvasOrder = index % 2 === 0 ? "order-1 lg:order-2" : "order-1 lg:order-1";

    return (
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between relative gap-8 lg:gap-12 py-10 px-4 sm:px-6 lg:px-8">
            <div ref={textRef} className={["w-full lg:w-[45%] text-theme-primary space-y-4 sm:space-y-5 z-10 reveal", textOrder].join(" ")}>
                <SectionHeader number={project.number} />
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-theme-primary leading-tight text-start">{project.title}</h3>
                <p className="text-theme-secondary leading-relaxed text-start text-sm  lg:text-lg sm:text-base">{project.description}</p>
                <p className="text-theme-secondary flex items-start text-sm sm:text-base">
                    {Array.isArray(project.skills) ? project.skills.join(", ") : project.skills}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <PrimaryButton>View project</PrimaryButton>
                </a>
            </div>

            <div ref={canvasRef} className={["w-full lg:w-[65%] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative z-0 reveal", canvasOrder].join(" ")} style={{ overflow: 'visible' }}>
                <Canvas
                    camera={{ position: [0, 0, 20], fov: 45 }}
                    gl={{ alpha: true, antialias: true }}
                    onCreated={({ gl }) => { gl.setClearAlpha(0); gl.setClearColor(0, 0, 0, 0); }}
                    style={{ width: '100%', height: '100%', overflow: 'visible' }}
                >
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 10]} intensity={2} />
                    <pointLight position={[-10, -10, -10]} intensity={0.8} />
                    <LaptopModel mousePosition={mousePosition} screenTextureUrl={project.screenTextureUrl} />
                </Canvas>
            </div>
        </div>
    );
}

export default function ProjectCard() {
    const mousePosition = useThrottledMousePosition();

    return (
        <section id="projects" className="w-full min-h-screen flex items-center justify-center pt-12 relative">
            <div className="w-full flex flex-col items-center">
                <ProjectRow project={projectsContent[0]} index={0} mousePosition={mousePosition} />
            </div>
        </section>
    );
}