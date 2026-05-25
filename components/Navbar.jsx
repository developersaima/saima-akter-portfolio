"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";

const navLinks = [
  { name: "Hero", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-base-900/80 backdrop-blur-md shadow-lg border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tight text-gradient"
        >
          {portfolioData.name.split(' ')[0]}
        </motion.a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-indigo-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a href={"/saima-resume.pdf"} download target="_blank" rel="noreferrer" className="btn rounded-full px-8 py-2 font-bold shadow-md shadow-indigo-500/20 border-none bg-indigo-600 hover:bg-indigo-700 text-white h-10 text-sm whitespace-nowrap">
            Resume
          </a>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-400 focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-x-0 border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a  href={"/saima-resume.pdf"} download  target="_blank" rel="noreferrer" className="btn btn-primary w-full mt-4">
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}