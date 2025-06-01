import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPython,} from "react-icons/si";

export default function Home() {
  const skills = [
    <FaHtml5 className="text-orange-500" />,
    <FaCss3Alt className="text-blue-500" />,
    <FaJs className="text-yellow-400" />,
    <SiTypescript className="text-blue-600" />,
    <FaReact className="text-cyan-400" />,
    <SiNextdotjs className="text-black dark:text-white" />,
    <SiTailwindcss className="text-blue-400" />,
    <FaNodeJs className="text-green-500" />,
    <SiPython className="text-yellow-500" />,
  ];

  return (
    <section className="w-full mt-32">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-28">Skills</h1>

      <div className="relative w-full overflow-hidden group">
        <div
          className="flex w-max gap-8 md:gap-12 lg:gap-16 
          animate-[scroll-left_20s_linear_infinite] 
          group-hover:[animation-play-state:paused]"
        >
          {[...skills, ...skills].map((icon, index) => (
            <span key={index} className="min-w-[4rem] min-h-[4rem] md:min-w-[5rem] md:min-h-[5rem]  flex justify-center items-center  text-4xl md:text-5xl lg:text-6xl  bg-white/20 rounded-xl backdrop-blur-md  transition-transform duration-300 hover:scale-110">
              {icon}
            </span>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}
