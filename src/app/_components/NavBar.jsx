
'use client'

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavBar = () => {

    const pathname = usePathname();

  return (
    <div>
        <ul className="flex flex-wrap justify-center items-center fixed top-0 left-1/2 p-4 transform -translate-x-1/2 z-40 w-full bg-gray-50 shadow-md gap-4 px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto bg-opacity-60">

            <li className={`p-2 text-black rounded-md ${ pathname === '/' ? '' : 'hover:bg-gradient-to-r hover:from-yellow-200 hover:via-green-300 hover:to-sky-300 hover:font-bold'} transition-colors`}>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li className={`p-2 text-black rounded-md ${pathname === '/about' ? 'bg-gradient-to-r from-yellow-200 to-slate-50 font-bold' : 'hover:bg-yellow-100 hover:font-bold'} transition-colors`}>
                <Link href="/about">
                    About
                </Link>
            </li>
            <li className={`p-2 text-black rounded-md ${pathname === '/resume' ? 'bg-gradient-to-r from-rose-300 to-slate-50 font-bold' : 'hover:bg-rose-200 hover:font-bold'} transition-colors`}>
                <Link href="/resume">
                    Resume
                </Link>
            </li>
            <li className={`p-2 text-black rounded-md ${pathname === '/projects' ? 'bg-gradient-to-r from-purple-300 to-slate-50 font-bold' : 'hover:bg-purple-200 hover:font-bold'} transition-colors`}>
                <Link href="/projects">
                    Projects
                </Link>
            </li>
            <li className={`p-2 text-black rounded-md ${pathname === '/skills' ? 'bg-gradient-to-r from-sky-300 to-slate-50 font-bold' : 'hover:bg-sky-200 hover:font-bold'} transition-colors`}>
                <Link href="/skills">
                    Skills
                </Link>
            </li>
            <li className={`p-2 text-black rounded-md ${pathname === '/contact' ? 'bg-gradient-to-r from-green-300 to-slate-50 font-bold' : 'hover:bg-green-200 hover:font-bold'} transition-colors`}>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar