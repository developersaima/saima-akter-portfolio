"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition-duration-300 mix-blend-screen hidden md:block"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.06), transparent 80%)`
      }}
    />
  );
}