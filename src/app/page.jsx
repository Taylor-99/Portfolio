import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import HomeNavBar from "./_components/HomeNavBar"

const Home = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1 text-center">
                <p className="text-xl sm:text-lg lg:text-3xl">
                    Welcome, I&apos;m <span className="font-bold text-3xl sm:text-4xl lg:text-5xl"> Taylor Young</span>
                </p>

                <p className="text-sm sm:text-base lg:text-lg mt-2 ml-6">
                    I am a Full Stack engineer based in <br></br>Central Florida with a passion for <br></br>frontend development and a focus <br></br>on usability
                </p>
            </div>
            <div className="ml-0 md:ml-8 mt-4 md:mt-0 p-1 bg-gradient-to-tr from-rose-400 via-yellow-100 to-purple-400 ">
            <Image
                src="/DA8B3DD2-E56D-42CE-8DD1-A15FF1B3EF87.jpeg"
                width={200}
                height={200}
                alt="Picture of Taylor"
                sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                className="border-4 border-white"
            />
            </div>
        </div>
        <div className="p-5">
            <HomeNavBar />
        </div>
    </div>
  )
}

export default Home
