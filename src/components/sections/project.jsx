'use client';
import React from "react";
import PrimaryButton from "@/components/common/PrimaryButton";
import SectionHeader from "@/components/common/SectionHeader";
import { Canvas } from "@react-three/fiber";
import LaptopModel from "@/components/three/laptop-model";
import { useThrottledMousePosition } from "@/hooks/useThrottledMousePosition";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProjectCard() {
    const mousePosition = useThrottledMousePosition();
    const textRef = useScrollReveal();
    const canvasRef = useScrollReveal();

    return (
        <section id="projects"
            className="w-full min-h-screen flex items-center justify-center   px-4 sm:px-6 lg:px-8 pt-12 relative"
        >
            <div className="max-w-6xl w-full flex flex-col lg:flex-row ml-18 items-center justify-between relative gap-8 lg:gap-12">
                <div ref={textRef} className="w-full lg:w-[45%] text-theme-primary space-y-4 sm:space-y-5 z-10 order-2 lg:order-1 reveal">
                    <SectionHeader number="01" />

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-theme-primary leading-tight text-start">
                        AI Chatbot Template for Educational & Business Websites
                    </h3>

                    <p className="text-theme-secondary leading-relaxed text-start text-sm sm:text-base">
                        Delivered a reusable AI chatbot template with a sleek UI, smart
                        prompt suggestions, and educational support features ideal for
                        homework help, customer support, or knowledge bases.  
                    </p>

                    <p className="text-theme-secondary flex items-start text-sm sm:text-base">
                        HTML, CSS, JavaScript, OpenAI API
                    </p>

                    <PrimaryButton>
                        View project
                    </PrimaryButton>
                </div>

                <div ref={canvasRef} className="w-full lg:w-[65%] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative z-0 order-1 lg:order-2 reveal"
                    style={{ overflow: 'visible', }}>
                    <Canvas
                        camera={{ position: [0, 0, 20], fov: 45 }}
                        gl={{ alpha: true, antialias: true }}

                        onCreated={({ gl }) => { gl.setClearAlpha(0); gl.setClearColor(0, 0, 0, 0); }}

                        style={{ width: '100%', height: '100%', overflow: 'visible',  }}

                    >
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[10, 10, 10]} intensity={2} />
                        <pointLight position={[-10, -10, -10]} intensity={0.8} />
                        <LaptopModel mousePosition={mousePosition}  screenTextureUrl={"https://www.cronyxdigital.com/hubfs/Blog%20Images/Cronyx%20blog%20post%20images%20-%202.png"} />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}