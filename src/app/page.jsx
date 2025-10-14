import { Suspense } from 'react';
import Navbar from '@/components/sections/navbar';
import Hero from '@/components/sections/hero';
import ProjectCard from '@/components/sections/project';
import Footer from '@/components/common/footer';
import About from '@/components/sections/about';


export default function Home() {
    return (
        <div className='w-full min-h-screen'>
            <Navbar />
            <main>
                <Hero />
                <section id="contact" className='w-full min-h-[40vh] flex items-center justify-center px-6 py-16 '>
                    <div className='max-w-4xl w-full text-center'>
                        <ProjectCard/>
                        
                        <About/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}