import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const NavLinks = [
  {
    title: "ABOUT",
    path: "#About",
  },
  {
    title: "EXPERIENCE",
    path: "#Experience",
  },
  {
    title: "PROJECTS",
    path: "#Projects",
  },
  {
    title: "SKILLS",
    path: "#Skills",
  },
  {
    title: "CONTACT",
    path: "#Contact",
  }
]

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#232325] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-5'>
            <div className='buttonanim rounded-md bg-gradient-to-tr from-[#858bff] to-[#4ADEDE] w-[70px] h-[70px]'>
              <Link href={'/'} className='text-white font-semibold text-4xl text-center '>HW</Link>
            </div>

            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex md:flex-row'>
                  {
                    NavLinks.map((link, index) => (
                      <li key={index}>
                        <NavLink href={link.path} title={link.title}/>
                      </li>
                    ))
                  }
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default Navbar