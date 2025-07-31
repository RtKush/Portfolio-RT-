
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
 const socials = [
  { icon: <FaGithub />, link: 'https://github.com/RtKush' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/kush-kumar-505477202/' },
  { icon: <FaTwitter />, link: 'https://twitter.com/your_twitter_handle' }
];


  return (
    <footer className="bg-black/90 backdrop-blur border-t border-cyan-400/10 text-white py-10 px-4 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left section */}
        <div>
          <h3 className="text-3xl font-extrabold text-cyan-400 mb-1">Rt Kush</h3>
          <p className="text-sm text-gray-400 italic">Turning Ideas Into Interactive Reality</p>
          <p className="text-xs text-gray-600 mt-2">© {year} Rt Kush. All rights reserved.</p>
        </div>

        {/* Right section */}
        <div className="flex flex-col md:items-end space-y-4">
         


          <div className="flex space-x-5">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-white hover:scale-110 transition duration-300 text-2xl"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
