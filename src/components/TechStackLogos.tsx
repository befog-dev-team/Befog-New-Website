import { FaReact, FaVuejs, FaNodeJs, FaAngular, FaDocker } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiPython, SiKubernetes, SiGraphql, SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact size={40} />, color: "#61DAFB" },
  { name: "Angular", icon: <FaAngular size={40} />, color: "#DD0031" },
  { name: "Vue", icon: <FaVuejs size={40} />, color: "#4FC08D" },
  { name: "Node.js", icon: <FaNodeJs size={40} />, color: "#339933" },
  // { name: "Python", icon: <SiPython size={40} />, color: "#3776AB" },
  { name: "React Native", icon: <TbBrandReactNative size={40} />, color: "#FF9900" },
  { name: "Tailwindcss", icon: <SiTailwindcss size={40} />, color: "#0078D4" },
  { name: "Docker", icon: <FaDocker size={40} />, color: "#2496ED" },
  { name: "Kubernetes", icon: <SiKubernetes size={40} />, color: "#326CE5" },
  { name: "GraphQL", icon: <SiGraphql size={40} />, color: "#E10098" },
  { name: "TypeScript", icon: <SiTypescript size={40} />, color: "#3178C6" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#47A248" }
];

export function TechStackLogos() {
  return (
    <div className="py-12">
      <div className="container">
        <div
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-semibold mb-2">Our Tech Stack</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We work with the latest technologies to deliver modern, scalable, and maintainable solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="text-center hover-scale"
            >
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${tech.color}15` }}
              >
                <div className="flex items-center justify-center">
                  {tech.icon}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
