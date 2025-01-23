import React from 'react'
import { FaJava } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTensorflow, SiPython, SiCss3, SiHtml5, SiUnity, SiTypescript, SiNextdotjs  } from "react-icons/si";

const skills = [
  {
    icon: SiTailwindcss,
    name: 'TailWind'
  },
]

const Skills = () => {
  return (
    <section id='Skills' className='my-10'>
      <div className='bg-[#181818] h-fit w-full px-24 py-10'>
        <h3 className='text-4xl font-bold mb-2'>My Skills</h3>
        <div className='h-1 w-full bg-gradient-to-tr from-[#858bff] to-[#4ADEDE] mb-10'></div>
        <div className='flex justify-center'>
          <div className='flex flex-wrap gap-4 justify-center max-w-[1100px]'>
            <div className='buttonanim bg-slate-700 p-3 justify-center rounded-lg w-[150px] h-fit'>
              <SiHtml5 className='w-full h-28 mb-4'></SiHtml5>
              <h4 className='text-center'>HTML5</h4>
            </div>
            <div className='buttonanim bg-slate-700 p-3 justify-center rounded-lg w-[150px] h-fit'>
              <SiCss3 className='w-full h-28 mb-4'/>
              <h4 className='text-center'>CSS3</h4>
            </div>
            <div className='buttonanim bg-slate-700 p-3 justify-center rounded-lg w-[150px] h-fit'>
              <SiJavascript className='w-full h-28 mb-4'/>
              <h4 className='text-center'>JavaScript</h4>
            </div>
            <div className='buttonanim bg-slate-700 p-3 justify-center rounded-lg w-[150px] h-fit'>
              <SiNextdotjs className='w-full h-28 mb-4'/>
              <h4 className='text-center'>Next.js</h4>
            </div>
            <div className='buttonanim bg-slate-700 p-3 justify-center rounded-lg w-[150px] h-fit'>
              <SiTailwindcss className='w-full h-28 mb-4'/>
              <h4 className='text-center'>Tailwind CSS</h4>
            </div>
            <div className='buttonanim bg-slate-700 p-3 justify-center rounded-lg w-[150px] h-fit'>
              <SiTypescript className='w-full h-28 mb-4'/>
              <h4 className='text-center'>TypeScript</h4>
            </div>
            <div className='buttonanim bg-slate-700 p-3 justify-center rounded-lg w-[150px] h-fit'>
              <FaJava className='w-full h-28 mb-4'/>
              <h4 className='text-center'>Java</h4>
            </div>
            <div className='buttonanim bg-slate-700 p-3 justify-center rounded-lg w-[150px] h-fit'>
              <SiPython className='w-full h-28 mb-4'/>
              <h4 className='text-center'>Python</h4>
            </div>
            <div className='buttonanim bg-slate-700 p-3 justify-center rounded-lg w-[150px] h-fit'>
              <SiTensorflow className='w-full h-28 mb-4'/>
              <h4 className='text-center'>Tensorflow</h4>
            </div>
            <div className='buttonanim bg-slate-700 p-3 justify-center rounded-lg w-[150px] h-fit'>
              <SiUnity className='w-full h-28 mb-4'/>
              <h4 className='text-center'>Unity</h4>
            </div>
          </div>
        </div>
      </div>
        
    </section>
  )
}

export default Skills