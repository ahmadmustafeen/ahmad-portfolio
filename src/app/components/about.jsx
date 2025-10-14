import { SendHorizontal } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <section className="min-h-screen flex items-center justify-center  text-white pt-32">
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold text-white text-start">Hi there</h2>
                    <p className="text-gray-300 leading-relaxed text-start">
                        I’m a Full Stack Developer with a track record of building real-world web applications, SaaS platforms, dashboards, and AI-powered tools that solve real business problems. I’ve successfully collaborated with clients, teams, and companies—often through freelance and contract projects—to deliver clean, secure, and results-driven solutions.
                    </p>
                    <p className="text-gray-300 leading-relaxed font-bold text-start">
                        My stack (frontend and backend):
                    </p>
                    <p className='text-gray-300 leading-relaxed  text-start'>
                        ‣ 𝙁𝙧𝙤𝙣𝙩𝙚𝙣𝙙 – React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI, Chakra UI, Shadcn/UI, Redux, RTK Query, Figma-to-Code conversions
                        ‣ 𝘽𝙖𝙘𝙠𝙚𝙣𝙙 – Node.js, Express.js, MongoDB, Firebase, Supabase, Prisma, Mongoose, SQL, REST APIs, JWT Auth, Jest, WebSockets, and Payment Integrations (Stripe, PayPal, Razorpay)
                        ‣ 𝘼𝙄 & 𝙊𝙩𝙝𝙚𝙧𝙨 – AI App Integration (OpenAI/ChatGPT), Git, GitHub, Vercel, Netlify, Render, Railway, AWS etc.
                    </p>
                    <p className="text-gray-300 leading-relaxed font-bold text-start">
                        What I’ve Built:
                    </p>
                    <p className='text-gray-300 leading-relaxed  text-start'>
                        ‣ AI-integrated e-commerce platforms with secure auth and payments
                        ‣ Custom dashboards with role-based access
                        ‣ Real-time chat and booking applications, Portfolios and landing pages
                        ‣ SaaS products and custom API-driven tools
                        ‣ Figma-to-Code conversions
                        ‣ AI ChatBots
                        📩 Feel free to reach out if you are looking to collaborate or need a reliable developer for your next project.
                    </p>

                    <Link href="/contact" className="flex items-center gap-2 mt-4 font-bold text-start text-cyan-500 py-2  hover:bg-cyan-600 hover:text-white  ">
                        <SendHorizontal /> Send me a message
                    </Link>

                </div>
                <div className="md:w-1/2 flex flex-col  justify-center">
                    <div className='mb-8'>
                        <div className="flex items-center gap-3 relative">
                            <div className="relative">
                                <div className="top-bar"></div>
                                <div className="bottom-piece"></div>
                            </div>
                            <h2 className="text-[#00EEFF] font-semibold text-lg">About me</h2>
                        </div>
                    </div>
                    <div className="w-full max-w-md h-64 bg-gray-800 flex items-center justify-center">

                        <span className="text-gray-400">   </span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About