import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Code, Palette, Database, Smartphone, GitBranch, Zap } from 'lucide-react';
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { title } from 'framer-motion/client';
import { SiLeetcode } from "react-icons/si";
import { SiFastapi } from "react-icons/si";

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
            title: 'HCP Interaction Assistant',
            description: 'An AI-powered CRM tool that lets pharma sales reps log healthcare professional interactions through natural language chat, with a LangGraph ReAct agent auto-filling structured forms in real time. Built with FastAPI, SQLAlchemy, and a React/Redux frontend, and deployed as a live demo.',
            image: "hcp.png",
            git: 'https://github.com/sanath-Kumar-design/hcp-interaction-crm',
            liveLinklink: 'https://hcp-interaction-crm-xi.vercel.app',
            tech: ["React", "Redux Toolkit", "FastAPI", "LangGraph", "SQLAlchemy", "PostgreSQL", "JWT Authentication", "Vercel", "Render"]
        },
        {
            title: 'Task Manager',
            description: 'A MERN stack Task Manager app for managing tasks and team collaboration, featuring task assignment, progress tracking, filters, notifications, and secure JWT authentication.',
            image: "image.png",
            git: 'https://github.com/sanath-Kumar-design/Task-manager',
            liveLink: 'https://task-manager-beta-one-44.vercel.app/',
            tech: ['React', 'Tailwind css', 'Node.js', 'Express.js', 'Mongo DB'],
        },
        {
            title: 'Modern Furniture E-Commerce Website',
            description: 'A modern furniture website built with the MERN stack that lets users explore and manage furniture designs seamlessly. It features an interactive and visually appealing interface for an enhanced browsing experience.',
            image: 'project2.png',
            git: 'https://github.com/sanath-Kumar-design/Furnite',
            liveLink: 'https://furnite-8koy.vercel.app/',
            tech: ['React', 'Tailwind css'],
        },

    ];
    const skillCategories = [
        {
            title: "Languages",
            color: "cyan",
            skills: ["JavaScript", "Python", "HTML5", "CSS3"],
        },
        {
            title: "Frontend",
            color: "blue",
            skills: ["React", "Redux Toolkit", "Tailwind CSS", "Vite"],
        },
        {
            title: "Backend",
            color: "indigo",
            skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication"],
        },
        {
            title: "Database",
            color: "violet",
            skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLAlchemy"],
        },
        {
            title: "AI",
            color: "fuchsia",
            skills: ["OpenAI API", "LangGraph", "Conversational AI"],
        },
        {
            title: "Tools",
            color: "slate",
            skills: ["Git", "GitHub", "Postman", "CI/CD"],
        },
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

            <section
                id="about"
                className="relative min-h-screen w-full overflow-hidden bg-black px-4 py-24"
            >
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
                </div>

                <div className="relative mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-16 text-center"
                    >
                        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium tracking-wide text-white/70">
                            Get to know me
                        </span>
                        <h2 className="mt-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                            About Me
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl shadow-black/40 sm:p-10"
                        >
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50 pointer-events-none" />
                            <div className="relative">
                                <h3 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
                                    Full-Stack Developer
                                </h3>
                                <div className="space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                                    <p>
                                        I'm a Full-Stack Developer specializing in the MERN stack and FastAPI,
                                        passionate about building scalable web applications and AI-powered
                                        solutions.
                                    </p>
                                    <p>
                                        I enjoy developing responsive user interfaces, designing REST APIs, and
                                        integrating AI workflows into real-world applications.
                                    </p>
                                    <p>
                                        I've built production-ready projects including an AI-powered Task
                                        Manager and an HCP Interaction CRM, gaining experience across React,
                                        Node.js, FastAPI, MongoDB, PostgreSQL, LangGraph, and modern development
                                        tools.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                        >
                            {skillCategories.map((category) => {
                                return (
                                    <motion.div
                                        key={category.title}
                                        className={`group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 *:hover:shadow-2xl`}
                                    >
                                        <h4 className={`mb-4 text-sm font-bold uppercase tracking-wider text-white`}>
                                            {category.title}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill) => (
                                                <motion.span
                                                    key={skill}
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/20">
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Projects Section */}
            <section
                id="projects"
                className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
                >
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-5 md:p-6">
                                <h3 className="text-xl font-semibold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-white/70 text-sm md:text-base leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-5">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="mt-6 flex items-center justify-between">
                                    <a
                                        href={project.git}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm md:text-base text-white/80 hover:text-white transition-colors"
                                    >
                                        View Project
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm md:text-base text-white/80 hover:text-white transition-colors"
                                    >
                                        <Github className='w-3,' h-3 />
                                    </a>
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
                        <a
                            href="https://github.com/sanath-Kumar-design"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/sanath-kumar-7487b8259/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
                        </a>

                        <a
                            href="https://leetcode.com/u/sanathkumar_5/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiLeetcode className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
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
