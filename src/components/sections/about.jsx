"use client"
import { SendHorizontal } from "lucide-react";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

const About = () => {
    const leftRef = useScrollReveal();
    const rightRef = useScrollReveal();

    return (
        <section className="min-h-screen flex justify-center text-theme-primary pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-8 lg:gap-10">

                <div ref={leftRef} className="lg:w-1/2 space-y-4 sm:space-y-6  text-left reveal">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-primary">Hi there</h2>

                    <p className="text-theme-secondary leading-relaxed text-sm sm:text-base">
                        I'm a Full Stack Developer with a track record of building
                        real-world web applications, SaaS platforms, dashboards, and
                        AI-powered tools that solve real business problems. I've
                        successfully collaborated with clients, teams, and
                        companies—often through freelance and contract projects—to deliver
                        clean, secure, and results-driven solutions.
                    </p>

                    <p className="text-theme-secondary font-bold leading-relaxed text-sm sm:text-base">
                        My stack (frontend and backend):
                    </p>

                    <p className="text-theme-secondary leading-relaxed text-sm sm:text-base">
                        ‣ 𝙁𝙧𝙤𝙣𝙩𝙚𝙣𝙙 – React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3,
                        Tailwind CSS, Bootstrap, Material UI, Chakra UI, Shadcn/UI, Redux,
                        RTK Query, Figma-to-Code conversions
                        <br />
                        ‣ 𝘽𝙖𝙘𝙠𝙚𝙣𝙙 – Node.js, Express.js, MongoDB, Firebase, Supabase,
                        Prisma, Mongoose, SQL, REST APIs, JWT Auth, Jest, WebSockets, and
                        Payment Integrations (Stripe, PayPal, Razorpay)
                        <br />
                        ‣ 𝘼𝙄 & 𝙊𝙩𝙝𝙚𝙧𝙨 – AI App Integration (OpenAI/ChatGPT), Git, GitHub,
                        Vercel, Netlify, Render, Railway, AWS etc.
                    </p>

                    <p className="text-theme-secondary font-bold leading-relaxed text-sm sm:text-base">
                        What I've Built:
                    </p>

                    <p className="text-theme-secondary leading-relaxed text-sm sm:text-base">
                        ‣ AI-integrated e-commerce platforms with secure auth and payments
                        <br />
                        ‣ Custom dashboards with role-based access
                        <br />
                        ‣ Real-time chat and booking applications, Portfolios and landing
                        pages
                        <br />
                        ‣ SaaS products and custom API-driven tools
                        <br />
                        ‣ Figma-to-Code conversions
                        <br />
                        ‣ AI ChatBots
                        <br />
                        📩 Feel free to reach out if you are looking to collaborate or need
                        a reliable developer for your next project.
                    </p>

                    <div className="flex justify-start">
                        <Link
                            href="/contact"
                            className="relative inline-flex items-center gap-2 mt-4 font-bold text-primary py-2 overflow-hidden group"
                        >
                            <span className="absolute inset-0 bg-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                            <span className="relative flex items-center gap-2 transition-colors duration-300">
                                <SendHorizontal className="transition-transform duration-300 group-hover:translate-x-1" />
                                Send me a message
                            </span>
                        </Link>
                    </div>
                </div>

                <div ref={rightRef} className="lg:w-1/2 flex flex-col justify-center reveal">
                    <div className="mb-6 sm:mb-8">
                        <div className="flex items-center gap-3 relative">
                            <div className="relative">
                                <div className="top-bar"></div>
                                <div className="bottom-piece"></div>
                            </div>
                            <h2 className="text-primary font-semibold text-base sm:text-lg">About me</h2>
                        </div>
                    </div>
                    <div className="w-full max-w-sm sm:max-w-md h-50 sm:h-58 lg:h-66 bg-theme-muted/10 flex items-center justify-center  overflow-hidden">
                        <img
                            src="https://t3.ftcdn.net/jpg/08/17/59/36/360_F_817593650_BlqPpNe8d1i6dPfUbneOX9iacJ6YbTWB.jpg"
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

