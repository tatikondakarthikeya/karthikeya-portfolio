import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Achievements from "@/components/sections/Achievements";
import Leadership from "@/components/sections/Leadership";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-background flex flex-col items-center">
        <About />
        <Skills />
        <Projects />
        <Research />
        <Achievements />
        <Leadership />
        <Certificates />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
