
'use client'

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavBar = () => {

    const pathname = usePathname();

  return (
    <div>
        <ul className="flex flex-wrap justify-center items-center bg-gray-50 shadow-md gap-4 px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">

            <li className={`p-2 text-black ${pathname === '/' ? 'font-bold underline' : ''}`}>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li className={`p-2 text-black ${pathname === '/about' ? 'bg-gradient-to-r from-yellow-200 to-slate-50 font-bold' : 'hover:bg-yellow-100'} transition-colors`}>
                <Link href="/about">
                    About
                </Link>
            </li>
            <li className={`p-2 text-black ${pathname === '/projects' ? 'font-bold underline' : ''}`}>
                <Link href="/resume">
                    Resume
                </Link>
            </li>
            <li className={`p-2 text-black ${pathname === '/projects' ? 'font-bold underline' : ''}`}>
                <Link href="/projects">
                    Projects
                </Link>
            </li>
            <li className={`p-2 text-black ${pathname === '/projects' ? 'font-bold underline' : ''}`}>
                <Link href="/skills">
                    Skills
                </Link>
            </li>
            <li className={`p-2 text-black ${pathname === '/projects' ? 'font-bold underline' : ''}`}>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar