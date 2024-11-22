
'use client'

import React from 'react'
import { useState } from "react";
import NavBar from "../_components/NavBar"
import Image from 'next/image'
import Link from 'next/link'
import projects from "../data/projects.json"

const Projects = () => {
  return (
    <div>

        <div className="mt-8 mb-8 lg:mt-16 lg:mb-16">
            <NavBar />
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-800 pb-2 text-black">My Projects</h2>
        </div>

        <br></br>

        <ul className="grid grid-cols-1 gap-6 px-4">
        {projects &&
            projects.map((project, idx) => {
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);

            const loaded = () => {
                return (
                <li
                    key={idx}
                    className="flex flex-col sm:flex-row bg-white bg-opacity-40 rounded-lg shadow-md p-4"
                >
                    {/* Image */}
                    <div className="sm:w-1/3 flex-shrink-0">
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <img
                        src={project.image}
                        className="w-full h-auto object-cover rounded-md"
                        alt="Project Cover"
                        />
                    </Link>
                    </div>

                    {/* Content */}
                    <div className="sm:ml-6 flex flex-col justify-between sm:w-2/3">
                    <div>
                        <h1 className="text-xl font-bold text-black mb-2">{project.name}</h1>
                        <div className="flex justify-center gap-4 mb-4">
                            <Link
                            href={project.live}
                            className="px-4 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-500 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Live Demo
                            </Link>
                            <Link
                            href={project.git}
                            className="px-4 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-500 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            GitHub
                            </Link>
                        </div>
                    </div>

                    {/* More Button */}
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                        More
                    </button>

                    {/* Dropdown */}
                    {isDropdownOpen && (
                        <div className="mt-2 p-4 bg-gray-100 border rounded-md">
                        <p className="mb-2">
                            <strong>Description:</strong> {project.description}
                        </p>
                        <p>
                            <strong>Skills/Tech:</strong> {project.skills}
                        </p>
                        </div>
                    )}
                    </div>
                </li>
                );
            };

            return projects ? loaded() : <h1>Loading...</h1>;
            })}
        </ul>

        <div className="flex flex-col items-center text-center p-4">
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-800 pb-2 text-black">Senior Thesis</h2>
        </div>

        <div className="bg-white bg-opacity-40 rounded-lg shadow-md p-6 mb-6 w-full max-w-screen-lg mx-auto">
            <p className="mb-2 text-gray-700">
                <strong>Title:</strong> A Call to Action: Using Minimal Group Paradigm to Explore Interaction on Social Media and Decision-Making Offline
            </p>
            <p className="mb-2 text-gray-700">
                <strong>Skills:</strong> R, Python, Matplotlib, Survey Creation, Research, Communication, Time Management, Projects Management, Data Analysis
            </p>
            <p className="mb-2 text-gray-700">
                <strong>Description:</strong> Conducted in-depth research exploring the influence of group dynamics on decision-making in digital environments. Analyzed user behavior through a survey and data visualization.
            </p>
            <div className="flex gap-4 justify-center">
                <Link
                href="https://docs.google.com/document/d/1ruKFtqjE_BGpjE35wlzftJm5QgTmT0cN/edit?usp=sharing&ouid=116055821681865807602&rtpof=true&sd=true"
                className="px-4 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                >
                View Thesis
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Projects