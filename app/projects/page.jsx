"use client";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectsPage() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-indigo-400">
          All Projects
        </h1>
        <p className="text-gray-400 mt-2">
          A collection of my full-stack & frontend projects
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex flex-col"
          >
            
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-grow">
              
              <h2 className="text-xl font-bold">
                {project.title}
              </h2>

              {/* Full Description */}
              <p className="text-sm text-gray-400">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between mt-auto pt-4 border-t border-white/10 text-sm">
                
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="flex items-center gap-1 text-indigo-400"
                >
                  Live <FiExternalLink />
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-1 text-gray-400 hover:text-white"
                >
                  Code <FiGithub />
                </a>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}