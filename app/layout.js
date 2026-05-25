import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  metadataBase: new URL("https://saima-akter-portfolio.vercel.app"),

  title: {
    default: `${portfolioData.name} | MERN Stack Developer`,
    template: `%s | ${portfolioData.name}`,
  },

  description:
    "Professional MERN Stack Developer specializing in modern web applications with Next.js, React, Node.js, and MongoDB.",

  keywords: [
    "Saima Akter",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ],

  authors: [{ name: portfolioData.name }],
  creator: portfolioData.name,
  publisher: portfolioData.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saima-akter-portfolio.vercel.app",
    title: `${portfolioData.name} | MERN Stack Developer`,
    description:
      "Explore the professional portfolio of Saima Akter — building scalable, modern, and high-performance web applications.",
    siteName: `${portfolioData.name} Portfolio`,
    images: [
      {
        url: "https://saima-akter-portfolio.vercel.app/_next/image?url=%2Fsaima.png&w=640&q=75",
        width: 1200,
        height: 630,
        alt: `${portfolioData.name} Portfolio Preview`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} | MERN Stack Developer`,
    description:
      "Modern full-stack developer portfolio built with Next.js and React.",
    images: [
      "https://saima-akter-portfolio.vercel.app/_next/image?url=%2Fsaima.png&w=640&q=75",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className="bg-black text-white antialiased selection:bg-indigo-500 selection:text-white">
        <ScrollProgress />
        <CursorGlow />

        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}