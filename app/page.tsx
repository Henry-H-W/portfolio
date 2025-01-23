import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar/>
      <div className='bg-[#181818]'>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </main>
  );
}
