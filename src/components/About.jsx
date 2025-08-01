
import React from "react";
import { motion as m } from "framer-motion";
import p1 from '../assets/p1.jpg';

const About = () => {
  const milestones = [
    { year: "2020–2022", text: "Campus Ambassador at CoderSoftech" },
    { year: "2022", text: "Led Final Year Project during BCA" },
    { year: "2024", text: "Mentored interns at CoderSoftech" },
    { year: "2024", text: "Winner – GFG-160 Coding Challenge" },
    { year: "2025", text: "Reached 1700+ Contest Rating on LeetCode" },
    { year: "2025", text: "Winner – GF-160 Coding Challenge" }
  ];

  return (
    <div
      id="about"
      className="min-h-screen px-6 py-16 md:px-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <m.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 relative"
      >
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-extrabold">
          Who I Am
        </span>
      </m.h2>

      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Left image side */}
        <m.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-[0_0_30px_#00FFF0] w-[300px] h-[370px]"
        >
          <img
             src={p1} 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </m.div>

        {/* Right text side */}
        <m.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl border border-cyan-300/20 rounded-2xl p-10 shadow-2xl w-full"
        >
          <m.h3 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-300">
            Rt Kush — Frontend Developer
          </m.h3>

          <m.p className="text-gray-100 mb-6 leading-relaxed font-medium">
            I’m a third-year Computer Application student at NIT Raipur, passionate about
            crafting sleek, high-performing web experiences. I blend UI/UX aesthetics with
            frontend logic to build digital products users love.
          </m.p>

          <h4 className="text-xl md:text-2xl font-medium mb-4 text-purple-300">
            Milestones
          </h4>

          <ul className="list-disc ml-6 space-y-3 text-gray-300">
            {milestones.map((item, index) => (
              <li key={index}>
                <span className="text-cyan-400 font-semibold mr-2">{item.year}:</span>
                {item.text}
              </li>
            ))}
          </ul>
        </m.div>
      </div>
    </div>
  );
};

export default About;
