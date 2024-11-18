
'use client'

import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

const HomeNavBar = () => {

const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>

        {/* Circles for larger screens */}
        <div className="hidden md:flex justify-center">
            <ul className="flex gap-4">
                <li className="w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center hover:scale-110 hover:opacity-75">
                <Link href="/about" className="text-black">
                    About
                </Link>
                </li>
                <li className="w-24 h-24 bg-rose-400 rounded-full flex items-center justify-center hover:scale-110 hover:opacity-75">
                <Link href="/resume" className="text-black">
                    Resume
                </Link>
                </li>
                <li className="w-24 h-24 bg-purple-400 rounded-full flex items-center justify-center hover:scale-110 hover:opacity-75">
                <Link href="/projects" className="text-black">
                    Projects
                </Link>
                </li>
                <li className="w-24 h-24 bg-sky-300 rounded-full flex items-center justify-center hover:scale-110 hover:opacity-75">
                <Link href="/skills" className="text-black">
                    Skills
                </Link>
                </li>
                <li className="w-24 h-24 bg-green-300 rounded-full flex items-center justify-center hover:scale-110 hover:opacity-75">
                <Link href="/contact" className="text-black">
                    Contact
                </Link>
                </li>
            </ul>
        </div>

        {/* Dropdown for smaller screens */}
        <div className="md:hidden relative">
            <button
            className="w-full p-2 bg-gray-300 text-black rounded-md flex justify-between items-center"
            onClick={toggleMenu}>
                Menu
                <span className="ml-2">
                {isOpen ? '^' : '\u2630'} {/* ^ for open, ☰ for closed */}
                </span>
            </button>

            {isOpen && (
            <ul className="absolute right-0 mt-2 w-full bg-white shadow-lg rounded-lg">
                <li className="p-2 w-full text-center hover:opacity-75 bg-gradient-to-r from-yellow-200 to-slate-50 border-b border-gray-200">
                <Link href="/about" className="block w-full text-center">About</Link>
                </li>
                <li className="p-2 w-full text-center hover:opacity-75 bg-gradient-to-r from-rose-400 to-slate-50 border-b border-gray-200">
                <Link href="/resume" className="block w-full text-center">Resume</Link>
                </li>
                <li className="p-2 w-full text-center hover:opacity-75 bg-gradient-to-r from-purple-400 to-slate-50 border-b border-gray-200">
                <Link href="/projects" className="block w-full text-center">Projects</Link>
                </li>
                <li className="p-2 w-full text-center hover:opacity-75 bg-gradient-to-r from-sky-300 to-slate-50 border-b border-gray-200">
                <Link href="/skills" className="block w-full text-center">Skills</Link>
                </li>
                <li className="p-2 w-full text-center hover:opacity-75 bg-gradient-to-r from-green-300 to-slate-50">
                <Link href="/contact" className="block w-full text-center">Contact</Link>
                </li>
            </ul>
            )}
      </div>
    </div>
  )
}

export default HomeNavBar