import React from 'react'
import NavBar from "../_components/NavBar"
import Image from 'next/image'
import languages from "../data/languages.json"
import libraries from "../data/libraries.json"
import frameworks from "../data/framework.json"
import databases from "../data/database.json"
import other from "../data/others.json"

const Skills = () => {
  return (
    <div>

        <div className="mt-8 mb-8 lg:mt-16 lg:mb-16">
            <NavBar />
        </div>

        <div>
            <div className="flex flex-col items-center text-center p-4">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-800 pb-2 text-black">Languages:</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {languages.map((language, index) => (
                <div
                key={index}
                className="bg-white bg-opacity-40 rounded-lg shadow-md p-2 flex flex-col items-center text-center"
                >
                    <Image
                        src={language.image}
                        width={75}
                        height={75}
                        alt={language.language}
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                        className="border-4 border-white"
                    />
                    <h2 className="text-xl font-bold mb-2">{language.language}</h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Experience:</strong> {language.experiece}
                    </p>
                    <a
                        href={language.attribute}
                        title={language.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-300 hover:underline text-sm"
                    >
                        {language.text}
                    </a>
                    </div>
            ))}
            </div>
        </div>

        <br></br>

        <div>
            <div className="flex flex-col items-center text-center p-4">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-800 pb-2 text-black">Databases:</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {databases.map((database, index) => (
                <div
                key={index}
                className="bg-white bg-opacity-40 rounded-lg shadow-md p-2 flex flex-col items-center text-center"
                >
                    <Image
                        src={database.image}
                        width={75}
                        height={75}
                        alt={database.database}
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                        className="border-4 border-white"
                    />
                    <h2 className="text-xl font-bold mb-2">{database.database}</h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Experience:</strong> {database.experiece}
                    </p>
                    <a
                        href={database.attribute}
                        title={database.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-300 hover:underline text-sm"
                    >
                        {database.text}
                    </a>
                    </div>
            ))}
            </div>
        </div>

        <br></br>

        <div>
        <div className="flex flex-col items-center text-center p-4">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-800 pb-2 text-black">Frameworks:</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {frameworks.map((framework, index) => (
                <div
                key={index}
                className="bg-white bg-opacity-40 rounded-lg shadow-md p-2 flex flex-col items-center text-center"
                >
                    <Image
                        src={framework.image}
                        width={75}
                        height={75}
                        alt={framework.framework}
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                        className="border-4 border-white"
                    />
                    <h2 className="text-xl font-bold mb-2">{framework.framework}</h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Experience:</strong> {framework.experiece}
                    </p>
                    <a
                        href={framework.attribute}
                        title={framework.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-300 hover:underline text-sm"
                    >
                        {framework.text}
                    </a>
                    </div>
            ))}
            </div>
        </div>

        <br></br>

        <div>
            <div className="flex flex-col items-center text-center p-4">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-800 pb-2 text-black">Libraries:</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {libraries.map((library, index) => (
                <div
                key={index}
                className="bg-white bg-opacity-40 rounded-lg shadow-md p-2 flex flex-col items-center text-center"
                >
                    <Image
                        src={library.image}
                        width={75}
                        height={75}
                        alt={library.library}
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                        className="border-4 border-white"
                    />
                    <h2 className="text-xl font-bold mb-2">{library.library}</h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Experience:</strong> {library.experiece}
                    </p>
                    <a
                        href={library.attribute}
                        title={library.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-300 hover:underline text-sm"
                    >
                        {library.text}
                    </a>
                    </div>
            ))}
            </div>
        </div>

        <br></br>

        <div>
            <div className="flex flex-col items-center text-center p-4">
                <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-800 pb-2 text-black">Others:</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {other.map((skill, index) => (
                <div
                key={index}
                className="bg-white bg-opacity-40 rounded-lg shadow-md p-2 flex flex-col items-center text-center"
                >
                    <Image
                        src={skill.image}
                        width={75}
                        height={75}
                        alt={skill.skill}
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                        className="border-4 border-white"
                    />
                    <h2 className="text-xl font-bold mb-2">{skill.skill}</h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Experience:</strong> {skill.experiece}
                    </p>
                    <a
                        href={skill.attribute}
                        title={skill.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-300 hover:underline text-sm"
                    >
                        {skill.text}
                    </a>
                    </div>
            ))}
            </div>
        </div>

    </div>
  )
}

export default Skills