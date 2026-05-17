import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ExperienceEducation from "@/components/ExperienceEducation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[5%] left-[10%] w-[40vw] h-[40vw] bg-pink-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceEducation />
      <Contact />
      <Footer />
    </main>
  );
}