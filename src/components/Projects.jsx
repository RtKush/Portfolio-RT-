
import React, { useMemo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye, FaLinkedin, FaYoutube } from 'react-icons/fa';

const projects = [
  {
    title: 'Real Time Chat',
    description: 'A Real Time Chat Application with JWT Authentication.',
    image: 'Chat.jpg',
    tags: ['MERN', 'JWT','Socket.io','Tailwind CSS'],
    githubLink: 'https://github.com/RtKush/RT_Chat',
    liveLink: 'https://.com',
    linkedinPost: 'https://www.linkedin.com/in/kush-kumar-505477202/',
    youtubeLink: '#'
  },
    {
    title: 'TechLife',
    description: 'Connect with People who is in Tech Field. Share Your Journey here and Explore.',
    image: 'techlife.jpg',
    tags: ['MERN','JWT Autentication','Tailwind CSS'],
    githubLink: 'https://github.com/RtKush/TechLifeVer1',
    liveLink: 'https://tech-life1-s5cv.vercel.app/',
    linkedinPost: 'https://www.linkedin.com/in/kush-kumar-505477202/',
    youtubeLink: '#'
  },
  {
    title: 'Canvas',
    description: 'Draw Your Thoughts on Canvas,Save and Share.',
    image: 'canvas.jpg',
    tags: ['JavaScript','CSS', 'Canvas API'],
    githubLink: 'https://github.com/RtKush/CanvasVer1',
    liveLink: 'https://rtcanvasver1.vercel.app/',
    linkedinPost: 'https://www.linkedin.com/in/kush-kumar-505477202/',
    youtubeLink: '#'
  },
  {
    title: 'MovieHUB',
    description: 'Full e-commerce site with cart, auth and Razorpay payments.',
    image: 'moviehub.jpg',
    tags: ['JavaScripts','CSS','API MDB'],
    githubLink: '#',
    liveLink: 'https://rtmoviehub.netlify.app/',
    linkedinPost: 'https://www.linkedin.com/in/kush-kumar-505477202/',
    youtubeLink: '#'
  },
  {
    title: 'RT Language Translator',
    description: 'Text Translation app using Google Translate API.and also Supports PDF/WORD file translation.',
    image: 'trans.jpg',
    tags: ['JavaScript','CSS','API G-Translator'],
    githubLink: '#',
    liveLink: 'https://rttranslator.netlify.app/',
    linkedinPost: 'https://www.linkedin.com/in/kush-kumar-505477202/',
    youtubeLink: '#'
  },
  {
    title: 'AI Assistant',
    description: 'Your Personal AI Assistant for Quick Answers.',
    image: '/AiAssist.jpg',
    tags: ['JavaScript','CSS','API'],
    githubLink: '#',
    liveLink: 'https://realtimeaiassistent.netlify.app/',
    linkedinPost: 'https://www.linkedin.com/in/kush-kumar-505477202/',
    youtubeLink: '#'
  },
  {
    title: 'Notes4U',
    description: 'PlateForm to Study and Download Notes & PYQ',
    image: 'notes4u.jpg',
    tags: ['JavaScript','CSS','HTML'],
    githubLink: 'https://github.com/RtKush/Notes4U',
    liveLink: 'https://notesforu.vercel.app/',
    linkedinPost: 'https://www.linkedin.com/in/kush-kumar-505477202/',
    youtubeLink: '#'
  },
  {
    title: 'ToDo',
    description: 'Image search with filtering & sorting.',
    image: 'todo.jpg',
    tags: ['React'],
    githubLink: 'https://github.com/RtKush/Todo-Animated',
    liveLink: 'https://rttodo.vercel.app/',
    linkedinPost: 'https://www.linkedin.com/in/kush-kumar-505477202/',
    youtubeLink: '#'
  }
];

function ProjectCard({ project, idx }) {
  const tagDelay = useMemo(() => 0.3, []);
  return (
    <m.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -15, scale: 1.02 }}
      className={`project-card relative rounded-2xl overflow-hidden shadow-2xl bg-black/70 backdrop-blur-xl border border-cyan-400/20 flex flex-col group h-full card-border-${idx % 4}`}
    >
      <div className="relative h-48 flex-shrink-0 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4">
          <div className="flex justify-between w-full items-end">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <m.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tagDelay + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-3 py-1 bg-cyan-500/30 text-cyan-100 border border-cyan-400/40 rounded-full font-medium backdrop-blur-sm project-tag"
                >
                  {t}
                </m.span>
              ))}
            </div>
            {project.githubLink && (
              <m.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-black/80 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 border border-cyan-400/30 transition-all duration-300"
                aria-label="GitHub repository"
              >
                <FaGithub className="text-cyan-300 text-lg" />
              </m.a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <m.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl font-bold mb-3 text-white project-title">
          {project.title}
        </m.h3>

        <m.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-gray-100 flex-grow mb-6 leading-relaxed font-medium project-description">
          {project.description}
        </m.p>

        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-auto flex flex-wrap gap-4">
          {project.liveLink && (
            <m.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-sm text-green-300 hover:text-green-200 transition-all duration-300 font-semibold"
            >
              <FaEye className="mr-2" /> Live Demo <FaExternalLinkAlt className="w-3 h-3 ml-1" />
            </m.a>
          )}
          {project.linkedinPost && (
            <m.a
              href={project.linkedinPost}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-sm text-blue-300 hover:text-blue-200 transition-all duration-300 font-semibold"
            >
              <FaLinkedin className="mr-2" /> LinkedIn <FaExternalLinkAlt className="w-3 h-3 ml-1" />
            </m.a>
          )}
          {project.youtubeLink && (
            <m.a
              href={project.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-sm text-red-400 hover:text-red-300 transition-all duration-300 font-semibold"
            >
              <FaYoutube className="mr-2" /> YouTube <FaExternalLinkAlt className="w-3 h-3 ml-1" />
            </m.a>
          )}
        </m.div>
      </div>
    </m.div>
  );
}

function ProjectsDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <span className="projects-orb orb-p1" />
      <span className="projects-orb orb-p2" />
      <span className="projects-orb orb-p3" />
      <span className="projects-orb orb-p4" />
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className={`projects-particle part-p${i}`} />
      ))}
      <span className="projects-line line-p1" />
      <span className="projects-line line-p2" />
      <span className="projects-line line-p3" />
    </div>
  );
}

function Projects() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="relative py-20 overflow-hidden projects-section">
        <div className="absolute inset-0 projects-bg-animation" />
        <ProjectsDecorations />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6">
          <m.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 relative"
          >
            <span className="projects-title-gradient font-extrabold">My Projects</span>
            <m.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"
            />
          </m.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-stretch">
            {projects.map((p, i) => (
              <ProjectCard key={i} project={p} idx={i} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

export default React.memo(Projects);
