"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 relative px-4">
      <div className="max-w-5xl mx-auto text-center z-10">
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-semibold text-indigo-400 mb-6 border border-indigo-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available For Full-Time Roles
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-8xl font-black tracking-tight mb-6"
        >
          Hi, I am <span className="text-gradient block md:inline">{portfolioData.name}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-medium mb-10 leading-relaxed"
        >
          A forward-thinking <span className="text-white underline decoration-indigo-500 decoration-2 font-bold">{portfolioData.title}</span> specializing in high-performance web applications.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="/saima-resume.pdf" download className="btn btn-primary rounded-full px-10 py-3 shadow-xl shadow-indigo-500/20 text-white font-bold w-full sm:w-auto h-auto text-base">
            Download Resume
          </a>
          <a href="#projects" className="btn btn-outline rounded-full px-10 py-3 hover:bg-white/5 w-full sm:w-auto text-gray-300 h-auto text-base">
            View Projects
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-6 text-2xl text-gray-400"
        >
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn profile"><FiLinkedin /></a>
          <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition-colors" aria-label="Direct Email"><FiMail /></a>
          <a href={portfolioData.whatsapp} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="WhatsApp secure chat">
            <Image src="/whatsapp.png" alt="WhatsApp" width={35} height={24} />
          </a>
        </motion.div>

      </div>

     
    </section>
  );
}