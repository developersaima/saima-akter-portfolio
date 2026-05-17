"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiMongodb, SiExpress } from "react-icons/si";

// Better Auth রিমুভ করা হয়েছে এখান থেকে
const iconMap = {
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: null,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  React: <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  Bootstrap: <SiBootstrap className="text-purple-500" />,
  MongoDB: <SiMongodb className="text-emerald-500" />,
  "Express.js": <SiExpress className="text-gray-400" />
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className=" space-y-2 mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-400">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Technical Index</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl p-2 bg-white/5 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12">
                  
                  {/* শর্তসাপেক্ষে CSS এবং Better Auth এর ইমেজ রেন্ডারিং */}
                  {skill.name === "CSS" ? (
                    <Image src="/css.png" alt="CSS" width={32} height={32} className="object-contain" />
                  ) : skill.name === "Better Auth" ? (
                    <Image src="/better-auth.png" alt="Better Auth" width={32} height={32} className="object-contain" />
                  ) : (
                    iconMap[skill.name] || <SiHtml5 />
                  )}
                  
                </div>
                <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-indigo-400 transition-colors">
                  {skill.level}%
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{skill.name}</h3>
              
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}