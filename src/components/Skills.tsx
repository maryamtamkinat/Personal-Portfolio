'use client'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPython } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const skills = [
  { Icon: FaHtml5, color: "text-orange-500" },
  { Icon: FaCss3Alt, color: "text-blue-500" },
  { Icon: FaJs, color: "text-yellow-400" },
  { Icon: SiTypescript, color: "text-blue-600" },
  { Icon: FaReact, color: "text-cyan-400" },
  { Icon: SiNextdotjs, color: "text-black dark:text-white" },
  { Icon: SiTailwindcss, color: "text-blue-400" },
  { Icon: FaNodeJs, color: "text-green-500" },
  { Icon: SiPython, color: "text-yellow-500" },
];

export default function Skills() {
  
  useEffect(() => {
          AOS.init({
            duration: 2000,
            once: true, 
          });
        }, []);

  return (
    <section className="w-full mt-32"  data-aos="fade-up">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-28">Skills</h1>

      <div className="relative w-full overflow-hidden group">
        <div
          className="
            flex w-max gap-8 md:gap-12 lg:gap-16
            animate-[scroll-left_20s_linear_infinite]
            group-hover:[animation-play-state:paused]
          "
        >
          {[...skills, ...skills].map(({ Icon, color }, index) => (
            <span
              key={index}
              className={`
                min-w-[4rem] min-h-[4rem] md:min-w-[5rem] md:min-h-[5rem]
                flex justify-center items-center
                text-4xl md:text-5xl lg:text-6xl
                bg-white/20 rounded-xl backdrop-blur-md
                transition-transform duration-300 hover:scale-110
                ${color}
              `}
            >
              <Icon />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
