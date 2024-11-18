import React from 'react'
import NavBar from "../_components/NavBar"
import Image from 'next/image'

const About = () => {
  return (
    <div>

        <div className="mt-8 mb-8 lg:mt-16 lg:mb-16">
            <NavBar />
        </div>

        <div className="min-h-screen">

            <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <aside className="w-full md:w-1/3 bg-yellow-100 rounded-lg shadow-md p-4">

                    <div className="mx-auto mt-4 p-1 rounded-full w-fit">

                        <Image
                        src="/D35A2685-2B7F-4146-9779-3D45D3239CD9.jpeg"
                        width={200}
                        height={200}
                        alt="Picture of Taylor"
                        sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                        className="rounded-full border-4 border-white"
                        />
                    </div>

                     {/* Information List */}
                    <ul className="mt-4 space-y-2 text-gray-800">
                        <li className="font-bold text-center"> Software Engineer</li>
                        <li><span className="font-bold">Name:</span> Taylor Young</li>
                        <li><span className="font-bold">Age:</span> 25</li>
                        <li><span className="font-bold">Occupation:</span> Sales Associate</li>
                        <li><span className="font-bold">Degree:</span> B.A. in Psychology With Computer Science Secondary Field</li>
                        <li><span className="font-bold">Certificates:</span> General Assembly Software Engineering</li>
                    </ul>
                </aside>

                <main className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
                
                    <h1 className=" text-center text-3xl font-bold mb-6"> About Me </h1> 

                    <p className="text-gray-800 leading-relaxed" >
                    I&apos;m a passionate developer with a human-centered approach, blending technical expertise with creativity to craft software solutions. Having honed my skills at General Assembly, I am eager to contribute to projects that prioritize usability, accessibility, and innovation. I thrive in collaborative environments where ideas are shared, challenges are embraced, and meaningful technology is brought to life.
                    </p>

                    <p className="text-gray-800 leading-relaxed mt-4">
                    Originally from Crystal River, FL, I earned a Bachelor of Arts in Psychology with a secondary focus in Computer Science from New College of Florida. This unique combination of disciplines reflects my deep curiosity about human behavior and my commitment to leveraging technology as a force for positive change. My academic background has shaped my understanding of user needs, enabling me to design solutions that are not only functional but also intuitive and empathetic.
                    </p>

                    <p className="text-gray-800 leading-relaxed mt-4">
                    Beyond academia, I enjoy immersing myself in the world of cinema and television, discovering films and shows that inspire new perspectives and ignite my imagination. I am also an avid reader, finding joy in books that expand my knowledge and creativity. Music plays a significant role in my life, serving as both a source of inspiration and relaxation during my coding sessions. Amidst my studies and personal pursuits, I share a special bond with my loyal companion, Prince, whose unwavering presence brings joy to my everyday life.
                    </p>

                </main>

            </div>

        </div>

    </div>
  )
}

export default About
