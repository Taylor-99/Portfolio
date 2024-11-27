import React from 'react'
import NavBar from "../_components/NavBar"
import Image from 'next/image'
import Link from 'next/link';
import contacts from '../data/contacts.json'

const Contact = () => {
  return (
    <div>

        <div className="mt-8 mb-8 lg:mt-16 lg:mb-16">
            <NavBar />
        </div>

        <div className="flex flex-col items-center text-center p-2">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-800 pb-2 text-black">Lets Get in Touch</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 p-4">
        {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col items-center">
            <Link
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center w-24 h-24 rounded-full border-4 border-green-300 bg-white hover:scale-110 hover:shadow-lg transition-transform duration-300"
            >
                <Image
                src={contact.image}
                width={50}
                height={50}
                alt={contact.alt}
                className="hover:opacity-80"
                />
            </Link>
            <Link
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center text-gray-700 hover:text-green-500 transition-colors"
            >
                {contact.label}
            </Link>
            </div>
        ))}
        </div>

    </div>
  )
}

export default Contact