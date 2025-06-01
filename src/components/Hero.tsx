import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className='px-20 mt-24'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='font-inter text-white mb-4 text-4xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, It's{" "}
            </span>
            <br />
            <span className='text-[3.2rem]'>
              Maryam Tamkinat
            </span>
            <br />
            <span className='text-white'>
              I'm{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                <TypeAnimation
                  sequence={[
                    "Frontend Developer...",
                    1000,
                    "UI/UX Designer...",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </span>
          </h1>

          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-3'>
            I craft beautiful interfaces and seamless user experiences with a passion for frontend development and UI/UX design.
          </p>
          <div>
            <a href="#contact">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mr-4 bg-white hover:bg-slate-200 text-black transform hover:scale-105 active:scale-95 transition duration-200">
               Hire Me
            </button>

            </a>
            <a href="cv.pdf" target="_blank" rel="noopener noreferrer">
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 mr-4 hover:bg-slate-200 hover:text-b border border-white mt-3 transform active:scale-95 transition duration-200'>
            <span className='block bg-[#121212] rounded-full px-5 py-2'>
                 Download CV
             </span>
            </button>

            </a>
            
          </div>
        </div>

        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src="/profile.jpg"
              alt="hero"
              width={300}
              height={300}
              className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
