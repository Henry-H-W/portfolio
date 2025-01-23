import React from 'react'
import schoolIcon from "/public/school.svg";
import workIcon from "/public/work.svg";
import Image from 'next/image'

const timelineElements = [
  {
    id: 1,
    title: "Student at the University of Western Ontario",
    location: "London, Ontario",
    description: "Third year Software Engineering studying at UWO. Current CGPA: 4.0",
    date: "Sept 2022-present",
    icon: "school",
    color: "blue",
    tech: ["JavaScript", "Java", "HTML", "CSS", "Unity", "SQL"],
  },
  {
    id: 2,
    title: "Software Developer in Western Cyber Society",
    location: "London, Ontario",
    description: "Developed an ASL to English live translator and learning web application with a group of seven developers using machine learning and computer vision.",
    date: "Sept 2023-present",
    icon: "school",
    color: "purple",
    tech: ["Python", "NumPy", "Next.js", "Django", "Tensoflow", "OpenCV", "Mediapipe"],
  },
  {
    id: 3,
    title: "Front-end Developer at Predictify Pro",
    location: "Remote",
    description: "Developed a new frontend for the company's website.",
    date: "May 2024-present",
    icon: "work",
    color: "yellow",
    tech: ["Next.js", "HTML", "CSS", "Tailwind", "JavaScript"],
  },
]

const Experience = () => {
  return (
    <section id='Experience' className='w-full flex justify-center'>
      <div className='h-fit w-full px-24 py-10'>
        <h3 className='text-4xl font-bold'>My Experience</h3>   
        <div className='h-1 w-full bg-gradient-to-tr from-[#858bff] to-[#4ADEDE] mb-10 '></div>
          <div className='flex justify-center'>
            <div className='bg-gradient-to-bl from-[#55315e] to-[#162e5a] rounded-lg px-1 md:px-28 py-6'>
            {timelineElements.map((element) => {
              const colors = [
                "bg-red-500",
                "bg-blue-500",
                "bg-yellow-500",
                "bg-purple-500",
                "bg-orange-500",
              ];

              const color = `bg-${element.color}-500`;

              return (
                <div key={element.id} className="flex m-4 relative">
                  <div
                    className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
                  ></div>
                  <div
                    className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
                  ></div>
                  <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                    <div className="w-4/5 text-gray-500">{element.date}</div>
                    <div
                      className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
                    ></div>
                    <Image
                      src={element.icon === "school" ? schoolIcon : workIcon}
                      alt="icon"
                      className={`${color} w-10 p-1 rounded-lg`}
                    />
                    <div
                      className={`${color} h-px w-8 translate-y-5 opacity-30`}
                    ></div>
                  </div>
                  <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center sm:w-96">
                    <div className="text-xl font-medium">{element.title}</div>
                    <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                      {element.location}
                      <span className="sm:hidden">| {element.date}</span>
                    </div>
                    <div className="mb-4 text-left">{element.description}</div>
                    <div className="flex flex-wrap mb-6 justify-center">
                      {element.tech.map((tech, index) => {
                        return (
                          <span
                            key={index}
                            className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                    <Image
                      src={element.icon === "school" ? schoolIcon : workIcon}
                      alt="icon"
                      className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
