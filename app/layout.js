import "./globals.css"
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import { portfolioData } from "@/data/portfolioData";

export const metadata = {
  title: {
    default: `${portfolioData.name} | Premium MERN Stack Portfolio`,
    template: `%s | ${portfolioData.name}`
  },
  description: portfolioData.intro,
  keywords: ["MERN Stack", "Next.js 16", "React 19", "Saima Akter", "Frontend Architect", "Dhaka Developer"],
  authors: [{ name: portfolioData.name }],
  creator: portfolioData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saima-akter.vercel.app",
    title: `${portfolioData.name} | Portfolio Template`,
    description: portfolioData.intro,
    siteName: `${portfolioData.name} Portfolio`,
    images: [{ url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71", width: 1200, height: 630, alt: portfolioData.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} | Portfolio`,
    description: portfolioData.intro,
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body className="antialiased selection:bg-indigo-500 selection:text-white">
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}