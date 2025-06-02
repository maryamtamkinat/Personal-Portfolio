"use client"
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

/* eslint-disable react/no-unescaped-entities */

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div className='mt-32 mb-18 px-[10%] lg:px-[20%]' data-aos="fade-left">
      <h1 className='text-3xl text-center font-bold'>Want To Know More About Me ?</h1>
      <p className='text-md text-gray-400 text-center mb-10'>Here's my journey — from discovering my passion to building real-world projects.</p>
      <p className='text-md text-gray-300 text-center'>
        I'm a Computer Science student who's deeply passionate about Frontend Development and excited to explore the world of AI.
        My journey into technology began shortly after completing my matriculation, when I enrolled in an IT course at Governor House Sindh. This experience introduced me to the world of computing and software development, and I quickly developed a strong passion for it. To further enhance my skills, I joined the Governor's Initiative for AI & Computing (GIAIC) — a decision that proved to be truly transformative.
        Through GIAIC, I not only acquired technical knowledge but also developed essential qualities such as consistency, problem-solving, and the ability to work on real-world projects. I gained hands-on experience in technologies including HTML, CSS, JavaScript, Typescript, Next.js, Python and various AI tools and frameworks. Every project and assignment has contributed to building my confidence and shaping me into a more capable and well-rounded developer.
      </p>
      <h2 className='text-3xl font-bold mt-14 mb-8'>🎓 Education</h2>
      <ul className='list-disc'>
        <li>Intermediate in Computer Science</li>
        <li>Currently enrolled in GIAIC's AI, Metaverse & Web3 Program</li>
      </ul>
      <h3 className='text-3xl font-bold mt-14 mb-8'>💡 A Bit More About Me</h3>
      <ul className='list-disc'>
        <li>I'm a quick learner who enjoys solving problems and exploring new technologies</li>
        <li>I believe in teamwork and love connecting with new people</li>
        <li>I enjoy building things from scratch and constantly pushing myself to improve</li>
        <li>My ultimate goal is to become a skilled AI Developer and contribute meaningful solutions to real-world problems

</li>
      </ul>
    </div>
  )
}
