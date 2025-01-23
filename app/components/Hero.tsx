import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-12 bg-slate-800 h-fit'>

        <div className='col-span-7 w-full m-auto px-12 lg:px-32 py-44 h-full bg-slate-800'>
          <br/><br/><br/>
          
          <h1 className='mb-4'><span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#858bff] to-[#4ADEDE]'>Hi! I&apos;m </span>Henry</h1>
          <h2>
            An aspiring third year Software Engineering student studying at the University of Western Ontario.
            
          </h2>
          
          <button className='buttonanim mr-8 px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-tr from-[#858bff] to-[#4ADEDE] mt-10 text-white'><a href='#Contact' className='px-6 py-3 block rounded-full bg-slate-800 hover:bg-slate-700'>Contact Me</a></button>
          <button className='buttonanim px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-tr from-[#858bff] to-[#4ADEDE] mt-4 hover:bg-slate-700 text-white'><a href='/resume.pdf' className='px-6 py-3 block rounded-full bg-slate-800 hover:bg-slate-700'>Download CV</a></button>

          <br></br> <br></br><br></br>

          <a href='#About' className='px-12 py-4 rounded-full mr-4 bg-gradient-to-tr from-[#858bff] to-[#4ADEDE] hover:from-[#858bff9c] hover:to-[#4adede83] text-white'>Enter Site</a>
        </div>
        
        <div className='container col-span-5 rounded-full bg-gradient-to-tr from-[#858bff] to-[#4ADEDE] w-[500px] h-[500px] translate lg:translate-y-[170px] hidden lg:block'>
        
        <Image
            src='/images/portrait5.png'
            className='w-[300px] lg:w-[500px] rounded-full custom-position object-scale-down h-[500px]'
            width={2000}
            height={3000}
            alt='Portrait'
          />
        </div>
        
      </div>
    </section>
  )
}

export default Hero