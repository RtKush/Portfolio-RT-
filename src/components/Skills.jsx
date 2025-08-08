
import React from "react";
import {
  FaCode,
  FaGit,
  FaGithub,
  FaHeart,
  FaJava,
  FaProjectDiagram,
  FaReact,
  FaTools,
} from "react-icons/fa";
import {
  SiC,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";

const skillCategories = [
  {
    id: "languages",
    title: "Programming Lang",
    icon: <FaCode className="text-2xl text-cyan-300" />,
   
    color: "from-black-700 to-blue-800",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "C++(Basic)", icon: <FaPython className="text-blue-500" /> },
      { name: "C-Lang", icon: <SiC className="text-blue-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: <FaProjectDiagram className="text-2xl text-yellow-400" />,
    
    color: "from-orange-700 to-black-900",
    skills: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools & Tech",
    icon: <FaTools className="text-2xl text-green-400" />,
   
    color: "from-yellow-900 to-black-700",
    skills: [
      { name: "Git", icon: <FaGit className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "VS Code", icon: <span className="text-blue-400 font-bold">VS</span> },
      { name: "Eclipse", icon: <span className="text-purple-400 font-bold">EC</span> },
      { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
    ],
  },
  {
    id: "interests",
    title: "Fundamentals",
    // icon: <FaHeart className="text-2xl text-orange-400" />,
   
    color: "from-green-700 to-black-800",
    skills: [
      { name: "Operating System", icon: <span className="text-green-300 font-bold">OS</span> },
      { name: "DBMS", icon: <span className="text-blue-300 font-bold">DB</span> },
      { name: "OOPs", icon: <span className="text-purple-300 font-bold">OOPs</span> },
      { name: "Computer Network", icon: <span className="text-pink-300 font-bold">CN</span> },
    ],
  },
];

const Skills = () => {
  return (
    // <section className="w-full px-6 py-14 bg-[#0b1120] text-white">
    <section id="skills" className="w-full px-6 py-14 bg-[#0b1120] text-white">

      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-300 drop-shadow-lg">
        My Skills
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className={`rounded-2xl p-5 shadow-xl bg-gradient-to-br ${category.color} hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>
            <p className="mb-4 text-sm text-gray-200">{category.frontContent}</p>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
