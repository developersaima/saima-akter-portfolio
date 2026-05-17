"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiSmartphone, FiDatabase } from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";
import { clsx } from "clsx";

export default function About() {
  const inViewAnimation = (delay = 0, x = 0, y = 0) => ({
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  });

  const floatingBadgeVariants = {
    initial: { y: 0 },
    animate: (customDelay) => ({
      y: [0, -10, 0],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: customDelay,
        },
      },
    }),
  };

  const TechBadge = ({ icon, category, tech, className, ...props }) => (
    <motion.div
      {...props}
      className={clsx(
        "glass-card p-3 sm:p-4 rounded-2xl border border-white/10 flex items-center gap-3 shadow-2xl backdrop-blur-md w-full max-w-[210px] pointer-events-auto",
        className
      )}
    >
      <div className="text-xl sm:text-2xl text-current">{icon}</div>
      <div className="min-w-0">
        <p className="text-[10px] sm:text-xs text-gray-400 font-mono truncate">{category}</p>
        <p className="text-xs sm:text-sm font-bold text-white truncate">{tech}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="py-24 px-4 overflow-hidden max-w-7xl mx-auto">
      {/* Grid re-ordered: Content on Left (lg:col-span-7), Image on Right (lg:col-span-5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* --- LEFT SIDE: CONTENT / DATA SECTION --- */}
        <motion.div 
          {...inViewAnimation(0, -40)}
          className="order-2 lg:order-1 lg:col-span-7 space-y-6 md:space-y-8"
        >
          <div className="space-y-3">
            <span className="text-xs sm:text-sm uppercase font-extrabold tracking-[0.2em] text-indigo-400">About Me Entrypoint</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Architecting Clean Scalable Systems</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg sm:text-xl font-normal md:max-w-[95%]">
            {portfolioData.intro} Based out of <span className="text-white font-semibold">{portfolioData.location}</span>, I focus on transforming layout specifications into production software using solid, modular architectural patterns within the <span className="text-white underline decoration-indigo-500 decoration-2 font-bold hover:text-indigo-400 transition-colors">MERN ecosystem</span>.
          </p>

          {/* Education Sections */}
          <div className="space-y-5 pt-4">
            <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2.5 text-white">
              <FiBookOpen className="text-indigo-400" /> Academic & Specialization Tracks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="glass-card p-6 rounded-3xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group">
                  <span className="text-xs px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 font-bold mb-2 inline-block">
                    {edu.period}
                  </span>
                  <h4 className="font-extrabold text-lg text-white group-hover:text-indigo-400 transition-colors leading-snug">{edu.degree}</h4>
                  <p className="text-sm text-gray-400 mt-1.5">{edu.institution}</p>
                  <p className="text-xs text-gray-500 mt-1">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: IMAGE WITH SECURELY CONTAINED FLOATING BADGES --- */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center relative w-full max-w-[440px] mx-auto group">
          
          {/* Background Ambient Glow */}
          <div className="absolute w-[80%] h-[80%] bg-indigo-500 rounded-full blur-[100px] opacity-15 pointer-events-none" />

          {/* Image Wrappers Container */}
          <motion.div
            {...inViewAnimation(0.2, 40)}
            className="relative w-full aspect-square p-2 z-10"
          >
            {/* Clean Image Box */}
            <div className="w-full h-full glass-card border border-white/10 rounded-[2rem] p-3 overflow-hidden">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-base-900">
                <Image 
                  src="/saima.png"
                  alt={`${portfolioData.name}`}
                  width={450}
                  height={450}
                  className="w-full h-full object-cover object-top scale-[1.02] group-hover:scale-[1.05] transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* --- DESKTOP ONLY: FLOATING BADGES (Locked inside Image Grid bounds to prevent out-of-screen) --- */}
            <div className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-20">
              
              {/* React Engine - Top Left Inner Corner */}
              <TechBadge
                icon={<FiCode />}
                category="React Engine"
                tech="SPAs / Next.js"
                className="text-cyan-400 absolute top-6 -left-6"
                custom={0}
                variants={floatingBadgeVariants}
                initial="initial"
                animate="animate"
              />

              {/* Node APIs - Bottom Left Inner Corner */}
              <TechBadge
                icon={<FiSmartphone />}
                category="REST APIs"
                tech="Node / Express"
                className="text-emerald-400 absolute bottom-12 -left-10"
                custom={1}
                variants={floatingBadgeVariants}
                initial="initial"
                animate="animate"
              />

              {/* MongoDB - Bottom Right Inner Corner */}
              <TechBadge
                icon={<FiDatabase />}
                category="NoSQL Db"
                tech="MongoDB"
                className="text-lime-400 absolute bottom-6 -right-6"
                custom={2}
                variants={floatingBadgeVariants}
                initial="initial"
                animate="animate"
              />
            </div>
          </motion.div>

          {/* --- MOBILE ONLY BADGES GRID (Stacked neatly, zero overflow risk) --- */}
          <div className="grid grid-cols-1 gap-4 w-full mt-6 sm:hidden px-2 z-20">
            <div className="flex gap-4">
              <TechBadge icon={<FiCode />} category="React Engine" tech="Next.js" className="text-cyan-400 max-w-none flex-1" />
              <TechBadge icon={<FiSmartphone />} category="REST APIs" tech="Node.js" className="text-emerald-400 max-w-none flex-1" />
            </div>
            <TechBadge icon={<FiDatabase />} category="NoSQL Db" tech="MongoDB" className="text-lime-400 max-w-none" />
          </div>

        </div>

      </div>
    </section>
  );
}