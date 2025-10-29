import { Suspense } from 'react';
import Navbar from '@/components/sections/navbar';
import Hero from '@/components/sections/hero';
import ProjectCard from '@/components/sections/project';
import Footer from '@/components/common/footer';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';

export default function Home() {
    return (
        <div className='w-full min-h-screen'>
            <Navbar />
            <main>
                <Hero />
                <ProjectCard />
                <About />
                <Contact/>
            </main>
            <div className='mt-20'>
                <Footer />
            </div>

        </div>
    );
}   