import Navbar from "@/components/sections/navbar";
import Contact from "@/components/sections/contact";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center ml-[380px] py-16">
                <Contact />
            </main>
        </div>
    );
}




