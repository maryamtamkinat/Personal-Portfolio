"use client";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useEffect, useRef, useState } from "react";

const technicalSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 60 },
  { name: "TypeScript", level: 60 },
  { name: "Python", level: 65 },
  { name: "Next.js", level: 70 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Git And GitHub", level: 75 },
];

const softSkills = [
  { name: "Communication", level: 50 },
  { name: "Teamwork", level: 70 },
  { name: "Problem Solving", level: 60 },
  { name: "Enthusiastic", level: 90 },
];

const CircularBar = ({ name, percentage }: { name: string; percentage: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < percentage) {
        current++;
        setProgress(current);
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [percentage]);

  const radius = 70;
  const stroke = 8;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);
  

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="relative">
        <svg
          height={radius * 2 + stroke}
          width={radius * 2 + stroke}
          className="rotate-[-90deg]"
        >
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius + stroke / 2}
            cy={radius + stroke / 2}
          />
          <circle
            stroke="url(#gradient)"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius + stroke / 2}
            cy={radius + stroke / 2}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-gray-800">{progress}%</span>
          <span className="text-sm text-gray-600">{name}</span>
        </div>
      </div>
    </div>
  );
};

const CombinedSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto p-6 mt-22"
      data-aos="fade-right"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div>
          <h2 className="text-3xl text-center font-bold mb-3">Technical Skills</h2>
          <p className="mb-6 text-center text-gray-700">Technologies I'm confident working with:</p>
          <div className="space-y-6">
            {technicalSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-700 mr-16">{skill.level}%</span>
                </div>
                <div className="w-[90%] bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div data-aos="fade-left">
          <h2 className="text-3xl text-center font-bold mb-3">Soft Skills</h2>
          <p className="mb-6 text-center text-gray-700">Personal strengths that support my teamwork and growth.</p>
          <div className="grid grid-cols-2">
            {softSkills.map((skill, idx) => (
              <CircularBar key={idx} percentage={skill.level} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedSkills;

