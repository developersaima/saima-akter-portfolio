"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-indigo-400">Communication</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Let's Build Together</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Reach out via any channel below. I monitor my incoming messages closely to discuss project parameters and architectural requirements.
          </p>

          <div className="space-y-4 pt-4">
            <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="text-xl p-3 bg-indigo-500/10 rounded-xl text-indigo-400"><FiMail /></div>
              <div>
                <p className="text-xs text-gray-500 font-mono">ELECTRONIC MAIL</p>
                <a href={`mailto:${portfolioData.email}`} className="text-white font-semibold hover:underline break-all text-sm md:text-base">{portfolioData.email}</a>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="text-xl p-3 bg-purple-500/10 rounded-xl text-purple-400"><FiLinkedin /></div>
              <div>
                <p className="text-xs text-gray-500 font-mono">LINKEDIN INDEX LINK</p>
                <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-white font-semibold hover:underline text-sm md:text-base">saimaakter-web</a>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-mono">WHATSAPP SECURE CHAT</p>
                <a href={portfolioData.whatsapp} target="_blank" rel="noreferrer" className="text-white font-semibold hover:underline text-sm md:text-base">+880 179 1034247</a>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="text-xl p-3 bg-pink-500/10 rounded-xl text-pink-400"><FiMapPin /></div>
              <div>
                <p className="text-xs text-gray-500 font-mono">LOCATION</p>
                <p className="text-white font-semibold text-sm md:text-base">{portfolioData.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="glass-card border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="max-w-md mx-auto space-y-6 relative z-10">
              <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-emerald-500/5">
                <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50} />
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight">
                "{portfolioData.ctaText}"
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Click below to open a direct message sequence on WhatsApp to chat instantly about your engineering team goals.
              </p>
              <a 
                href={portfolioData.whatsapp} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-lg w-full rounded-full bg-emerald-500 text-gray-950 py-2  font-bold hover:bg-emerald-400 shadow-xl shadow-emerald-500/20 border-none group-hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
                Initialize Secure Chat
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}