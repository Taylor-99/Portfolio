import React from 'react'
import NavBar from "../_components/NavBar"
import Image from 'next/image'
import Link from 'next/link'

const Resume = () => {
  return (
    <div>

        <div className="mt-8 mb-8 lg:mt-16 lg:mb-16">
            <NavBar />
        </div>

        <div className="flex flex-col items-center space-y-4 p-4">
            <p className="text-lg md:text-xl font-semibold text-gray-800">
            Looking for a quick overview?
            </p>
            <Link
            href="https://docs.google.com/document/d/1g5_BKtvFA9-W8fqRc-bN_TDMcSIW8it9tDyRIM35-34/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 hover:bg-blue-600 active:bg-purple-500 font-bold py-2 px-4 rounded-md shadow-lg transition-transform transform hover:scale-105"
            >
            Download My Resume
            </Link>
        </div>

        <div className="max-w-screen-md mx-auto p-6 bg-gray-50 shadow-md rounded-md">
            {/* Header Section */}
            <header className="text-center border-b pb-4 mb-6">
                <h1 className="text-2xl font-bold text-black">Taylor Young</h1>
                <p className="text-lg text-gray-700">Software Engineer</p>
                <p className="text-sm text-gray-600">
                (352) 651-9316 ∙ taylor.e.young99@gmail.com ∙ Crystal River, FL ∙ <Link href="https://www.linkedin.com/in/taylor-e-young/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Linkedin</Link> ∙ <Link href="https://github.com/Taylor-99" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</Link>  ∙ <Link href="https://taylor-young-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Portfolio</Link> 
                </p>
            </header>

            {/* Summary Section */}
            <section className="mb-6">
                <h2 className="text-lg font-semibold text-rose-400 border-b pb-2 mb-4">Summary</h2>
                <p className="text-gray-700">
                I am a dedicated and passionate full-stack software engineer focused on usability and problem-solving. In my
                previous career, I gained a better understanding of human behavior while also enhancing my communication and
                detail-oriented skills. I am eager to bring my communication and problem-solving skills, as well as my knowledge
                of psychology, to a dynamic team contributing to innovative projects while enhancing accessibility.
                </p>
            </section>

            {/* Skills Section */}
            <section className="mb-6">
                <h2 className="text-lg font-semibold text-rose-400 border-b pb-2 mb-4">Skills</h2>
                <ul className="list-inside text-gray-700 space-y-1">
                    <li><strong>Languages:</strong> JavaScript, HTML, CSS, Python, JSON, Java</li>
                    <li><strong>Database:</strong> MongoDB, PostgreSQL</li>
                    <li><strong>Libraries and Frameworks:</strong> Express.js, React, Node.js, Django, Mongoose, EJS</li>
                    <li><strong>Other:</strong> RESTful Routing</li>
                </ul>
            </section>

            {/* Projects Section */}
            <section className="mb-6">
                <h2 className="text-lg font-semibold text-rose-400 border-b pb-2 mb-4">Software Development Projects</h2>
                <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-gray-800">Pirate Adventure Trivia Game | Solo Project</h3>
                    <p className="text-sm text-gray-600">January 2024 | <Link href="https://pirate-adventure-trivia-game.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live</Link> | <Link href="https://github.com/Taylor-99/Project-1-Trivia-Game" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</Link></p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Developed an engaging, user-friendly pirate adventure trivia game using HTML, CSS, and JavaScript.</li>
                        <li>Players go on a fictional pirate journey, battling bad pirates via trivia games, with real-time feedback for answers, tracking health, and storing rewards.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800">Readers Journal | Solo Project</h3>
                    <p className="text-sm text-gray-600">March 2024 | <Link href="https://readersjournal-27f55d6eb9b9.herokuapp.com/library" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live</Link> | <Link href="https://github.com/Taylor-99/Readers-Journal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</Link></p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Built a usable full-stack reading log web app using EJS, JavaScript, CSS, HTML, Node.js and MongoDB.</li>
                        <li>Users are able to login/logout and enables users to log their readings, whether books, articles, or other materials, with features for commenting on entire readings or specific chapters/sections, and the ability to add favorites for easy access.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800">SoundScope | Group Project</h3>
                    <p className="text-sm text-gray-600">April 2024 | <Link href="https://soundscope.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live</Link> | <Link href="https://github.com/GrabberKaibutsu/SoundScope" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</Link></p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Collaborated on a full-stack music browser using Node.js, JavaScript, Tailwind, CSS, HTML, React, and MongoDB.</li>
                        <li>Users can browse music and artists through the Spotify API, add songs or artists to their favorites for easy access and personalized playlists, and log in and out securely.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800">Gardening and Health | Solo Project</h3>
                    <p className="text-sm text-gray-600">June 2024 | <Link href="https://garden-health-frontend-ok73.vercel.app/auth" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Live</Link> | <Link href="https://github.com/Taylor-99/Garden-Health-Frontend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub - Frontend</Link> | <Link href="https://github.com/Taylor-99/Garden-Health-Backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub - Backend</Link></p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Developed a user and mobile friendly web app to track users' garden, mental health, and physical health using HTML, CSS, JavaScript, React, MongoDB, Node.js, and Next.js.</li>
                        <li>Users can log in to track their plants, mental health, and physical activities. Users can complete daily challenges as well as complete daily and weekly reminders to maintain their pl;ants and stay active. The app allows users to browse and favorite plants from a plant API, access detailed information, and engage with a community page by viewing, posting, and interacting with other users posts.</li>
                    </ul>
                </div>
                
                </div>
                </section>

                {/* Experience Section */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold text-rose-400 border-b pb-2 mb-4">Professional Experience</h2>
                    <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-gray-800">Associate | Harbor Freight Tools</h3>
                        <p className="text-sm text-gray-600">Crystal River, FL | October 2022 - Present</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Utilize excellent organizational skills to maintain an orderly warehouse, enhancing workflow efficiency.</li>
                        <li>Actively engage with customers, providing product recommendations and ensuring a positive shopping experience.</li>
                        <li>Demonstrate versatility by transitioning between warehouse tasks and sales responsibilities.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800"> Software Developer Apprenticeship | The Bee2Bee Network</h3>
                        <p className="text-sm text-gray-600">Remote | June 2022 - August 2022 </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Collaborated with other developer apprentices to gain hands-on experience in web development using technologies such as HTML, CSS, and Wordpress.</li>
                        <li>Engaged in code reviews, providing constructive feedback and continuously learning best practices for coding standards.</li>
                        <li>Actively participated in team meetings and brainstorming sessions, fostering a collaborative environment for knowledge sharing.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">Communications and Marketing Intern | New College of Florida</h3>
                        <p className="text-sm text-gray-600">Sarasota, FL | October 2019 - December 2019</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Conducted interviews and research to create compelling stories, showcasing the impact of the organization&apos;s initiatives.</li>
                        <li>Developed engaging content for newsletters, articles, and internal communications to effectively convey organizational messages.</li>
                        <li>Assisted in the development and execution of social media content.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">Scribe | ScribeAmerica</h3>
                        <p className="text-sm text-gray-600">Sarasota, FL | September 2018 - January 2019 </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Accurately documented patient encounters, procedures, and physician orders in real-time, ensuring comprehensive and precise medical records.</li>
                        <li>Transcribed medical information during patient visits, maintaining confidentiality and adhering to privacy regulations.</li>
                        <li>Maintained a thorough understanding of medical terminology and procedures, ensuring accurate documentation.</li>
                        </ul>
                    </div>
                    
                    </div>
                </section>

                {/* Education Section */}
                <section>
                    <h2 className="text-lg font-semibold text-rose-400 border-b pb-2 mb-4">Education</h2>
                    <div>
                    <h3 className="font-semibold text-gray-800">General Assembly | Remote</h3>
                    <p className="text-sm text-gray-600">Software Engineering Immersive | December 2023 - June 2024</p>
                    <p className="text-gray-700">
                        Intensive, 32-week, 500+ hour program focused on product development fundamentals, object-oriented
                        programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of
                        individual and group projects.
                    </p>
                    </div>
                    <div className="mt-4">
                    <h3 className="font-semibold text-gray-800">New College of Florida | Sarasota, FL</h3>
                    <p className="text-sm text-gray-600">Bachelor's of Arts in Psychology with Computer Science secondary field</p>
                    </div>
                </section>
            </div>

            <div className="flex justify-center items-center mt-8">
                <Link
                    href="https://docs.google.com/document/d/1g5_BKtvFA9-W8fqRc-bN_TDMcSIW8it9tDyRIM35-34/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-500 hover:bg-blue-600 active:bg-purple-500 font-bold py-2 px-4 rounded-md shadow-lg transition-transform transform hover:scale-105"
                >
                    View and Download My Resume Here! 📄
                </Link>
            </div>

    </div>
  )
}

export default Resume