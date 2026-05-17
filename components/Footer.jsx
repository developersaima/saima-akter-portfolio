"use client";
import Image from "next/image";
import { FiArrowUp, FiLinkedin, FiMail } from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950/80 border-t border-white/5 py-12 px-4 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <span className="text-xl font-black text-gradient block mb-1">{portfolioData.name}.</span>
          <p className="text-xs text-gray-500 font-mono">Premium MERN Portfolio Template © {new Date().getFullYear()}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-medium">
          <a href="#hero" className="hover:text-white transition-colors">Top</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#journey" className="hover:text-white transition-colors">Journey</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-lg text-gray-400 border-r border-white/10 pr-4">
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn profile"><FiLinkedin /></a>
            <a href={`mailto:${portfolioData.email}`} className="hover:text-white transition-colors" aria-label="Direct Email"><FiMail /></a>
            <a href={portfolioData.whatsapp} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="WhatsApp Profile">
              <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="btn btn-square btn-sm btn-ghost border border-white/5 bg-white/5 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-all"
            aria-label="Scroll to top trigger button"
          >
            <FiArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}