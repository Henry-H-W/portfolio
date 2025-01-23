import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id='About'>
        <div className='md:grid md:grid-cols-2 gap-8 bg-[#181818] h-fit w-full px-24 py-10'>
            <Image
                src='/images/portrait2.jpg'
                className='w-[300px] lg:w-[700px] rounded-xl'
                width={5000}
                height={3000}
                alt='About'
            />

            <div>
                <h3>About Me</h3>   
                <div className='h-1 w-full bg-gradient-to-tr from-[#858bff] to-[#4ADEDE] mb-4 '></div>
                <p className='text-[#b1b1b1] leading-loose'>
                    I&apos;m Henry Wang, a third year Software Engineering student at the University of Western Ontario from Scarborough Ontario. 
                    I have experience working with both frontend and backend development, using languages and frameworks including Nextjs, TailWindm, Python, Java, SQL, JavaScript, and Git.
                    In addition, I have experience with machine learning, working with tools such as Tensorflow and Mediapipe. 
                    In my free time, I enjoy playing piano and adding records to my vinyl collection. 
                </p> 
            </div>
        </div>
    </section>
  )
}

export default About