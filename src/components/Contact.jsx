
  import React, { useState, useCallback } from 'react';
  import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
  import { contactInfo as extContactInfo, socialLinks as extSocialLinks } from '../constants';
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaGithub,
    FaLinkedin,
    FaTwitter
  } from 'react-icons/fa';
  import emailjs from '@emailjs/browser';

  /* Fallbacks */
  const fallbackContact = [
    { Icon: FaEnvelope, title: 'Email', value: 'kush22aur@gmail.com' },
    { Icon: FaPhone, title: 'Phone', value: '+91 XXXXXXXXXX' },
    { Icon: FaMapMarkerAlt, title: 'Location', value: 'Aurangabad, Bihar, India' },
  ];
  const fallbackSocial = [
    { Icon: FaGithub, url: 'https://github.com/RtKush' },
    { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/kush-kumar-505477202/' },
    { Icon: FaTwitter, url: 'https://twitter.com/yourusername' }, // Replace with your actual handle
  ];

  function Contact() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const contactData = extContactInfo?.length ? extContactInfo : fallbackContact;
    const socialData = extSocialLinks?.length ? extSocialLinks : fallbackSocial;

    const handleChange = useCallback(e => {
      setForm(f => ({ ...f, [e.target.id]: e.target.value }));
    }, []);

    const handleSubmit = async e => {
      e.preventDefault();
      setLoading(true);

      const { VITE_EMAILJS_SERVICE_ID: svc, VITE_EMAILJS_TEMPLATE_ID: tpl, VITE_EMAILJS_PUBLIC_KEY: pub } = import.meta.env;

      try {
        await emailjs.send(svc, tpl, { ...form }, pub);
        toast.success('Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        console.error(err);
        toast.error('Submission failed. Try again.');
      } finally {
        setLoading(false);
      }
    };

    return (
      <LazyMotion features={domAnimation}>
        <section id="contact" className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
          <ToastContainer position="bottom-right" theme="dark" autoClose={5000} />
          <div className="absolute inset-0 bg-noise bg-cover opacity-5 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <m.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            >
              Let’s <span className="text-cyan-400">Connect</span>
              <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow" />
            </m.h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* ----- Left Info Card ----- */}
            <m.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-2xl border border-cyan-300/20 rounded-2xl p-8 shadow-2xl"
  >
    <h3 className="text-2xl text-cyan-300 font-bold mb-2">Let’s Make Something Great....</h3>
    <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-4" />

    <span className="text-sm inline-block bg-green-500/10 text-green-400 px-3 py-1 rounded-full mb-4 font-medium shadow">
      ✅ Available for New Opportunities
    </span>

    <p className="text-gray-300 mb-6">
      I'm actively seeking exciting full-time roles or freelance projects in frontend or fullstack development. Let’s collaborate and turn ideas into reality!
    </p>

    <div className="space-y-6">
      {contactData.map((c, i) => (
        <div key={i} className="flex items-center group">
          <div className="h-12 w-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg transition-transform group-hover:scale-110">
            {c.Icon ? <c.Icon /> : <i className={`${c.icon} text-lg`} />}
          </div>
          <div>
            <h4 className="text-white font-semibold">{c.title}</h4>
            <p className="text-gray-300">{c.value}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10">
      <h4 className="text-lg font-semibold text-cyan-300 mb-3">Also connect with me here</h4>
      <div className="flex space-x-4">
        {socialData.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 border border-cyan-400/30 text-gray-300 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.4)] rounded-full flex items-center justify-center transition hover:scale-110"
          >
            {s.Icon ? <s.Icon /> : <i className={`${s.icon} text-lg`} />}
          </a>
        ))}
      </div>
    </div>
  </m.div>


              {/* ----- Contact Form ----- */}
              <m.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-2xl border border-purple-300/20 rounded-2xl p-8 shadow-2xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { id: 'name', label: 'Your Name', type: 'text' },
                    { id: 'email', label: 'Email Address', type: 'email' },
                    { id: 'subject', label: 'Subject', type: 'text' },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-white font-semibold mb-2">{f.label}</label>
                      <input
                        id={f.id}
                        type={f.type}
                        value={form[f.id]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cyan-400/30 bg-black/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cyan-400/30 bg-black/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    />
                  </div>

                  <m.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {loading ? (
                        <m.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center"
                        >
                          <m.svg
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="h-5 w-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                            <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                          </m.svg>
                          Sending…
                        </m.div>
                      ) : (
                        <m.span
                          key="send"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center"
                        >
                          <FaPaperPlane className="mr-2" /> Send Message
                        </m.span>
                      )}
                    </AnimatePresence>
                  </m.button>
                </form>
              </m.div>
            </div>
          </div>
        </section>
      </LazyMotion>
    );
  }

  export default React.memo(Contact);

