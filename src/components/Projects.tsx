'use client';
import React from 'react';
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function Projects() {
  const Projects = [
    {
      name: 'E-commerce Website',
      image: 'img1.png',
      tool: 'Next.js',
      tool2: 'Tailwind CSS',
      description:"A modern online furniture store built with Next.js and Tailwind CSS.",
      path: 'https://hackathon-2-figma-template-7.vercel.app/',
    },
    {
      name: 'Resume Builder',
      image: 'img2.png',
      tool: 'HTML',
      tool2: 'CSS',
      tool3: 'TypeScript',
      tool4: 'JavaScript',
      description:"A simple tool to create and preview resumes dynamically using HTML, CSS, and JS.",
      path: 'https://maryam-tamkinat-hackathon-milestone4.vercel.app/',
    },
    {
      name: 'ShoeKart Website',
      image: 'img3.png',
      tool: 'Next.js',
      tool2: 'Tailwind CSS',
      description:"A stylish shoe e-commerce site built with responsive UI and clean layout.",
      path: 'https://e-commerce-website-shoekart.vercel.app/',
    },
    {
      name: 'Landing Page',
      image: 'img4.png',
      tool: 'HTML',
      tool2: 'CSS',
      tool3: 'TypeScript',
      tool4: 'JavaScript',
      description:"A visually engaging pizza restaurant landing page using HTML, CSS, and JavaScript.",
      path: 'https://pizza-hub-website.vercel.app/',
    },
    {
      name: 'Password Strength Meter',
      image: 'img5.png',
      tool: 'Python',
      tool2: 'Streamlit',
      description:"A tool to generate strong passwords and check their strength instantly.",
      path: 'https://password-strength-meter-qoofwbynpvpf8wwhqwsce7.streamlit.app/',
    },
  ];

  return (
    <div className='mt-32' data-aos='fade-up'>
      <h1 className='text-center text-4xl md:text-5xl font-bold mb-28'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 my-10'>
        {Projects.map((project) => (
          <div key={project.name} className='p-4 border bg-[#111111] border-gray-700 hover:border-gray-500 transition-all duration-200 rounded-lg shadow-md m-2'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} className='h-[150px] w-full object-cover' alt={project.name} />
            <span className='flex items-center justify-between mt-3'>
                <h2 className='text-2xl font-bold'>
              <a
                href={project.path}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400'
              >
                {project.name}
              </a>
            </h2>
            <a href="https://github.com/panaversity/learn-modern-ai-python" target='_blank' className='hover:text-blue-400 mr-1'><LuSquareArrowOutUpRight /></a>
            </span>
            
            <p className='text-sm mb-5 mt-3 text-gray-400'>{project.description}</p>
            <div className='flex flex-wrap gap-2 items-center mb-2'>
              {project.tool && (
                <span className='text-[10px] font-bold border border-gray-500 rounded-md bg-gray-800 hover:bg-gray-700 backdrop-blur-md p-[5px]'>
                  {project.tool}
                </span>
              )}
              {project.tool2 && (
                <span className='text-[10px] font-bold border border-gray-500 rounded-md bg-gray-800 hover:bg-gray-700 backdrop-blur-md p-[5px]'>
                  {project.tool2}
                </span>
              )}
              {project.tool3 && (
                <span className='text-[10px] font-bold border border-gray-500 rounded-md bg-gray-800 hover:bg-gray-700 backdrop-blur-md p-[5px]'>
                  {project.tool3}
                </span>
              )}
              {project.tool4 && (
                <span className='text-[10px] font-bold border border-gray-500 rounded-md bg-gray-800 hover:bg-gray-700 backdrop-blur-md p-[5px]'>
                  {project.tool4}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
