"use client"
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export default function Services() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);

  return (
    <div className='mt-20 sm:mt-40 px-14'>
      <h1 className='text-center text-4xl sm:text-5xl font-bold mb-20'>Services</h1>
      
      <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center' data-aos="fade-up">
        {/* Service Card 1 */}
        <div className='text-center px-4 py-8 rounded-3xl w-full max-w-sm bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transform hover:scale-110 transition duration-300  hover:bg-slate-800 hover:bg-none'>
          <h2 className='font-extrabold text-2xl mb-2'>Web Development</h2>
          <p className='text-sm text-white'>Building fast, responsive, and dynamic websites with clean code.</p>
        </div>

        {/* Service Card 2 */}
        <div className='text-center px-4 py-8 rounded-3xl w-full max-w-sm bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transform hover:scale-110 transition duration-300  hover:bg-slate-800 hover:bg-none'>
          <h2 className='font-extrabold text-2xl mb-2'>UI/UX Design</h2>
          <p className='text-sm text-white'>Designing user-friendly and visually appealing interfaces for web and mobile.</p>
        </div>

        {/* Service Card 3 */}
        <div className='text-center px-4 py-8 rounded-3xl w-full max-w-sm bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transform hover:scale-110 transition duration-300  hover:bg-slate-800 hover:bg-none'>
          <h2 className='font-extrabold text-2xl mb-2'>Website Redesign</h2>
          <p className='text-sm text-white'>Refreshing old websites to improve performance, look, and user experience.</p>
        </div>

        {/* Service Card 4 */}
        <div className='text-center px-4 py-8 rounded-3xl w-full max-w-sm bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transform hover:scale-110 transition duration-300  hover:bg-slate-800 hover:bg-none'>
          <h2 className='font-extrabold text-2xl mb-2'>Custom Solutions</h2>
          <p className='text-sm text-white'>Creating tailored landing pages, portfolios, and e-commerce frontends.</p>
        </div>
      </div>
    </div>
  )
}
