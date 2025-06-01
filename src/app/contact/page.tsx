"use client"
import React from 'react'
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa'; 
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Page() {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true, 
      });
    }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "0ab7a84f-91d0-4d37-b829-e6b8ba19fafe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <section className='mt-26 mb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <h1 className='font-bold text-4xl md:text-5xl text-center mb-10'>Get In Touch</h1>

      <div className='flex flex-col lg:flex-row justify-between gap-10'>
        {/* Left Side */}
        <div className='lg:w-1/2 flex flex-col justify-start mt-8' data-aos="fade-right">
          <h2 className='text-xl font-semibold mb-6'>Let's Connect Together</h2>
          <p className='text-sm text-gray-400 mb-3'>
            I'm always open to new opportunities, collaborations, or just a good tech conversation.
            Feel free to reach out if you have a project in mind or simply want to connect.
            Let's build something amazing together—drop me a message anytime.
          </p>
          <p className='flex gap-2 items-center text-sm text-gray-400 mb-6'>
            <CiMail /> maryamtamkinat@gmail.com
          </p>

          <div className="flex gap-5 mt-2">
            <a href="https://github.com/maryamtamkinat" target="_blank" className="p-2 rounded-full border-2 border-gray-400 hover:border-pink-500 transition-colors">
              <IoLogoGithub size={18} />
            </a>
            <a href="https://www.instagram.com/haniasheikh1232/" target="_blank" className="p-2 rounded-full border-2 border-gray-400 hover:border-pink-500 transition-colors">
              <FaInstagram size={18} color="#E4405F" />
            </a>
            <a href="https://www.linkedin.com/in/maryamtamkinat" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border-2 border-gray-400 hover:border-pink-500 transition-colors">
              <FaLinkedin size={18} style={{ color: '#0077B5' }} />
            </a>
            <a href="https://x.com/Maryam_Tamkinat" target="_blank" className="p-2 rounded-full border-2 border-gray-400 hover:border-pink-500 transition-colors">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form onSubmit={onSubmit} className='lg:w-1/2 border-[0.1px] border-gray-600 hover:border-gray-500 p-6 md:p-8 shadow-xl rounded-md bg-[#1a1a1a]' data-aos="fade-left">
          <input type="text" name="name" placeholder='Full Name' className='w-full mb-4 px-4 py-2 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400' required />
          <input type="email" name="email" placeholder='Email Address' className='w-full mb-4 px-4 py-2 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400' required />
          <input type="text" name="phone" placeholder='Phone Number' className='w-full mb-4 px-4 py-2 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400' required />
          <textarea name="message" placeholder='Your Message' className='w-full mb-4 px-4 py-2 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400' rows={5} required></textarea>
          <button className='w-full text-white py-2 rounded-md bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transform hover:scale-105 transition duration-300'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Page;
