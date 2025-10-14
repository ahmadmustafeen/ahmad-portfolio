import { ArrowRight } from "lucide-react";
import React from "react";

const Contact = () => {
    return (
        <div className="w-full min-h-[40vh] flex items-center justify-center px-6 py-16">
            <div className="max-w-4xl w-full flex flex-col items-start text-white">
                <h2 className="text-3xl font-bold text-white mb-12 text-start ">
                    Say Hello
                </h2>
                <div className="relative flex flex-col items-center  mb-14">
                    <div className="top-bar-contact"></div>
                    <div className="bottom-piece-contact"></div>
                </div>

                <form className="space-y-8 w-full">
                    <div className="relative w-[500px]">
                        <input type="email" id="email" placeholder="Email" className="peer w-full p-3 bg-transparent text-white border-b border-gray-500 placeholder-transparent focus:outline-none focus:border-primary"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 top-3 text-gray-400 transition-all duration-300
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Your Email
                        </label>
                    </div>

                    <div className="relative w-[500px]">
                        <input type="email" id="email" placeholder="Email" className="peer w-full p-3 bg-transparent text-white border-b border-gray-500 placeholder-transparent focus:outline-none focus:border-primary" />
                        <label htmlFor="email"
                            className="absolute left-3 top-3 text-gray-400 transition-all duration-300
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
              peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Message
                        </label>
                    </div>


                    <button
                        style={{
                            clipPath:
                                "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 0)",
                        }}
                        className="mt-4 px-6 py-4 text-xl font-light bg-primary hover:bg-cyan-400 text-ink font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                    >
                        Send Message
                        <ArrowRight
                            className="transition-transform duration-300 group-hover:translate-x-2"
                            size={22}
                        />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;


