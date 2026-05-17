"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="space-y-2 mb-16 text-center md:text-left">
        <span className="text-xs uppercase font-bold tracking-widest text-indigo-400">Featured Showcases</span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Production Implementations</h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="pb-16"
      >
        {portfolioData.projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/5 h-full flex flex-col group min-h-[480px]">
              
              <div className="relative overflow-hidden aspect-video bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-sm font-semibold">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors">
                      Live Preview <FiExternalLink />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                      Codebase <FiGithub />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}