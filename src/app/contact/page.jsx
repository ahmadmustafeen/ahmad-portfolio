import Navbar from "@/components/sections/navbar";
import Contact from "@/components/sections/contact";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <Contact />
            </main>
        </div>
    );
}




