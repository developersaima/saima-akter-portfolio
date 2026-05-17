"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiAward, FiArrowRight } from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="journey" className="py-24 px-4 max-w-4xl mx-auto">
      
      <div className="flex p-1.5 bg-gray-950/80 backdrop-blur-md rounded-full border border-white/5 max-w-md mx-auto mb-16">
        <button
          onClick={() => setActiveTab("education")}
          className={`flex-1 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === "education" ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "text-gray-400 hover:text-white"}`}
        >
          <FiAward /> Education Matrix
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`flex-1 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === "experience" ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "text-gray-400 hover:text-white"}`}
        >
          <FiBriefcase /> Deployment History
        </button>
      </div>

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "education" ? (
            <motion.div
              key="education-pane"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {portfolioData.education.map((item, idx) => (
                <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 relative flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-md inline-block">
                      {item.period} ({item.status})
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-gray-400 font-medium">{item.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500 font-medium md:text-right">{item.location}</span>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="experience-pane"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 rounded-3xl border border-white/5 text-center max-w-xl mx-auto space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-3xl mx-auto text-indigo-400 animate-pulse">
                <FiBriefcase />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">No Experience Yet</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto">
                  Hire me today to construct your production application using clean architectural paradigms.
                </p>
              </div>
              <a href={portfolioData.whatsapp} target="_blank" rel="noreferrer" className=" rounded-full px-6 mx-auto font-bold ">
                Initiate Project Intake 
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}