'use  client'
import React from "react";
import PrimaryButton from "@/components/common/PrimaryButton";
import InputField from "@/components/common/InputField";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
    const headRef = useScrollReveal();
    const formRef = useScrollReveal();

    return (
        <div className="w-full min-h-[40vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="max-w-4xl w-full flex flex-col items-start text-theme-primary">
                <h2 ref={headRef} className="text-2xl sm:text-3xl font-bold text-theme-primary mb-8 sm:mb-12 text-left w-full reveal">
                    Say Hello
                </h2>
                <div className="relative flex flex-col items-start mb-8 sm:mb-14 w-full">
                    <div className="top-bar-contact"></div>
                    <div className="bottom-piece-contact"></div>
                </div>

                <form ref={formRef} className="space-y-6 sm:space-y-8 w-full flex flex-col items-start reveal">
                    <InputField id="email" type="email" label="Your Email" placeholder="Email" />

                    <InputField id="message" type="textarea" label="Message" placeholder="Message" rows={4} />

                    <PrimaryButton type="submit">
                        Send Message
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default Contact;