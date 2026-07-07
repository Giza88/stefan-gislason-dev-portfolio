import BackToTop from "@/components/BackToTop";
import ChatWidget from "@/components/chat/ChatWidget";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DatacomHighlight from "@/components/DatacomHighlight";
import Projects from "@/components/Projects";
import EducationSection from "@/components/EducationSection";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="w-full">
        <Hero />
        <About />
        <DatacomHighlight />
        <Projects />
        <Experience />
        <EducationSection />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <BackToTop />
    </>
  );
}
