'use client';
import React from "react";
import { ArrowRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import LaptopModel from "@/components/three/laptop-model";

export default function ProjectCard() {
    return (
        <section id="projects"
            className="w-full flex items-center justify-center px-2 pt-12 "
        >
            <div className="max-w-6xl w-full flex flex-row items-center justify-between gap-10">
                <div className="w-[50%] text-white space-y-5">
                    <div className="flex items-center gap-3 relative">
                        <div className="relative">
                            <div className="top-bar"></div>
                            <div className="bottom-piece"></div>
                        </div>
                        <h2 className="text-primary font-semibold text-lg">01</h2>
                    </div>

                    <h3 className="text-3xl font-bold text-white leading-tight text-start">
                        AI Chatbot Template for Educational & Business Websites
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-start">
                        Delivered a reusable AI chatbot template with a sleek UI, smart
                        prompt suggestions, and educational support features ideal for
                        homework help, customer support, or knowledge bases.
                    </p>

                    <p className="text-gray-300 flex items-start">
                        HTML, CSS, JavaScript, OpenAI API
                    </p>

                    <button
                        style={{
                            clipPath:
                                "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 0)",
                        }}
                        className="mt-4 px-6 py-4 text-xl font-light bg-primary hover:bg-cyan-400 text-ink font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                    >
                        View project
                        <ArrowRight
                            className="transition-transform duration-300 group-hover:translate-x-2"
                            size={22}
                        />
                    </button>
                </div>

                <div className="w-[60%] h-[350px] flex items-center justify-center overflow-visible ">
                    <Canvas
                        camera={{ position: [0.75, 0.2, 9.2], fov: 40 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <ambientLight intensity={0.9} />
                        <directionalLight position={[6, 6, 8]} intensity={1.4} />
                        <LaptopModel />
                    </Canvas>
                </div>
            </div>


        </section>
    );
}


