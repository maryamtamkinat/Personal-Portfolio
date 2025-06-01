"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaInstagram } from 'react-icons/fa'; 
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center mt-16 sm:mt-52 px-4 gap-10' data-aos="fade-left">
      
      {/* Image Section */}
      <div className='flex justify-center'>
        <Image 
          src="/about.jpg" 
          alt="hero" 
          width={330} 
          height={330}
          className='rounded-full object-cover aspect-square w-40 sm:w-52 md:w-60 lg:w-[330px]'
        />
      </div>

      {/* Text Section */}
      <div className='w-full lg:w-[40rem] text-center lg:text-left'>
        <h1 className='text-3xl font-extrabold mb-6 mt-1'>Why You Hire Me?</h1>
        <p className='text-lg sm:text-base'>
          A passionate Frontend Developer and UI/UX Designer with experience in building responsive, user-friendly websites. I started my journey with a love for technology, and I've been focused on creating digital experiences that are both visually appealing and functional. <br /> <br />
          
          I have hands-on experience with <strong>HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Node.js</strong>, and <strong>Python</strong>. Currently, I am expanding my skills in Agentic AI and learning more to become a versatile developer. <br /> <br />
          
          I'm eager to learn and grow as a developer by working on real-world projects, solving problems, and collaborating with others to bring innovative ideas to life.
        </p>

        {/* Social Icons */}
        <div className='flex justify-center lg:justify-start gap-8 mt-7'>
          <a href="#" target="_blank">
            <FaXTwitter size={25} />
          </a>
          <a href="https://github.com/maryamtamkinat" target="_blank">
            <IoLogoGithub size={25} />
          </a>
          <a href="https://www.linkedin.com/in/maryamtamkinat" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} style={{ color: '#0077B5' }} />
          </a>
          <a href="https://www.instagram.com/haniasheikh1232/" target="_blank">
            <FaInstagram size={25} color="#E4405F" />
          </a>
        </div>
      </div>
    </div>
  )
}
