import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Code, Palette, Database, Smartphone, GitBranch, Zap } from 'lucide-react';
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";


const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScroll = useCallback(() => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPos = window.scrollY + window.innerHeight / 2 + 50;
    let foundSection = null;
    sections.forEach((sec) => {
      const el = document.getElementById(sec);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          foundSection = sec;
        }
      }
    });
    if (!foundSection) {
      const contactEl = document.getElementById('contact');
      if (contactEl && scrollPos >= contactEl.offsetTop) {
        foundSection = 'contact';
      }
    }
    if (foundSection) setActiveSection(foundSection);
  }, []);
  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', throttledScroll);
    throttledScroll();
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  const projects = [
    {
      title: 'Task Manager',
      description: 'A MERN stack Task Manager app for managing tasks and team collaboration, featuring task assignment, progress tracking, filters, notifications, and secure JWT authentication.',
      image: "image.png",
      link: 'https://task-manager-omega-weld.vercel.app/login',
      tech: ['React', 'Tailwind css', 'Node.js', 'Express.js', 'Mongo DB'],
    },
    {
      title: 'Modern Furniture E-Commerce Website',
      description: 'A modern furniture website built with the MERN stack that lets users explore and manage furniture designs seamlessly. It features an interactive and visually appealing interface for an enhanced browsing experience.',
      image: 'project2.png',
      link: 'https://furnite-erns-9aj1vrwcb-sanath-kumars-projects-02eccfe3.vercel.app',
      tech: ['React', 'Tailwind css'],
    },
    {
      title: 'Mini Front-End Project',
      description: 'A mini front-end project built with Tailwind CSS that showcases responsive UI components and layout design.It demonstrates clean styling, modern design practices, and interactive interface elements',
      image: 'project3.png',
      link: 'https://github.com/sanath-Kumar-design/Front-End/tree/main/tailwindTask.html',
      tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    },
  ];
  const skills = [
    { name: 'Html', icon: FaHtml5, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: Palette, category: 'Styling' },
    { name: 'CSS', icon: Palette, category: 'Styling' },
    { name: 'MongoDB', icon: Database, category: 'Database' },
    { name: 'Express.Js', icon: SiExpress, category: 'Database' },
    { name: 'React', icon: Code, category: 'Frontend' },
    { name: 'Node.js', icon: Database, category: 'Backend' },
    { name: 'JavaScript', icon: IoLogoJavascript, category: 'Languages' },
    { name: 'Figma', icon: Palette, category: 'Design' },
    { name: 'Node.js', icon: Database, category: 'Backend' },
    { name: 'Python', icon: FaPython, category: 'Languages' },
    { name: 'Responsive Design', icon: Smartphone, category: 'UI/UX' },
    { name: 'Git', icon: GitBranch, category: 'Tools' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">
              Sanath Kumar
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className={`py-2 px-4 rounded-md transition-all duration-300 ${activeSection === sec
                    ? 'border-b-2 border-white text-white'
                    : 'text-white/60 hover:text-white'
                    }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ease-out transform-gpu ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              style={{ transformOrigin: 'top', willChange: 'transform, opacity' }}
              className="md:hidden bg-black/90 border-t border-white/10 overflow-hidden"
            >
              {['home', 'about', 'projects', 'contact'].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="block w-full text-left py-3 px-4 hover:bg-white/5"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center px-4 max-w-4xl"
        >
          <h1 className="name text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-white/80">Sanath Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto">
            A passionate web developer crafting minimalistic yet engaging digital experiences using the MERN stack and modern design principles.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </motion.button>
        </motion.div>
      </section>

      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              With over 2 years of front-end development experience, I specialize in building clean, responsive, and high-performance UIs with React, Tailwind CSS,
              and Framer Motion. I also have full-stack experience with the MERN stack, having built complete applications connecting front-end to Node.js, Express,
              and MongoDB backends.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Outside code, you'll find me exploring design trends or hiking—always seeking that perfect balance of form and function.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/5 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: '0 10px 25px rgba(255, 255, 255, 0.1)'
                      }}
                      className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer group"
                    >
                      <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto bg-black/50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
            >
              <img src={project.image} alt={project.title} className="w-full h-58 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-white/10 px-2 py-1 rounded text-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  <div className="flex space-x-2">
                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          Get In Touch
        </motion.h2>
        <p className="text-xl text-white/70 mb-8">
          Interested in collaborating? Shoot me an email or connect on LinkedIn.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <a
            href="mailto:sanath77139@gmail.com"
            className="flex items-center justify-center space-x-2 text-white/70 hover:text-white mx-auto w-fit"
          >
            <Mail className="w-5 h-5" />
            <span>sanath77139@gmail.com</span>
          </a>
          <div className="flex justify-center space-x-6 pt-4">
            <a href="https://github.com/sanath-Kumar-design" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/sanath-kumar-7487b8259/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/50">
        <p>&copy; 2025 Sanath Kumar. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;
