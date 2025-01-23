import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id:1,
        title: 'Hands-On Learning',
        description: 'A language learning web application designed for people who want to learn ASL through the users webcam using OpenCV and MediaPipe. ',
        image: '/images/ASL-project.png',
        gitUrl: 'https://github.com/Fahmid-Abdullah/flask-asl-testing',
        previewUrl: '/',
    },
    {
        id:2,
        title: 'Pie in the Past',
        description: 'An 2D RPG game made in Unity with a team of three developers featuring roguelike movement, obstacles, puzzles, unique enemies, and .',
        image: '/images/pie-in-past.png',
        gitUrl: 'https://github.com/Henry-H-W/Pie-in-the-Past',
        previewUrl: '/',
    },
    {
        id:3,
        title: 'Predictify Pro',
        description: 'A website made for the startup company Predictify Pro using Next.js and Tailwind.',
        image: '/images/predictify.png',
        gitUrl: 'https://github.com/Azlan-A1/PredictifyPro',
        previewUrl: '/',
    }
]

const Projects = () => {
  return (
    <section id='Projects' className='md:px-24 px-10 py-16 bg-slate-800'>
        <h3 className='text-4xl font-bold mb-2'>My Projects</h3>
        <div className='h-1 w-full bg-gradient-to-tr from-[#858bff] to-[#4ADEDE] mb-4 '></div>
        <div className='flex flex-wrap justify-center gap-2'>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)}</div>

    </section>
  )
}

export default Projects