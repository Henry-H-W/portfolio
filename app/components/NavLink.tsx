import Link from "next/link"

const NavLink = ( {href, title}:any ) => {
    return (
        <Link href={href}
        className='buttonanim block py-2 px-4 text-gray-400 sm:text-xl rounded md:px-0=8 hover:text-white'
        >{title}</Link>
    )

};

export default NavLink;