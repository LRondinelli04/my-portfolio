import Nav from "@/components/Nav";
import ExpCard from "@/components/ExpCards";
import Projects from "@/components/Projects";
import Studies from "@/components/Studies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MouseAura } from "@/components/MouseAura";
import { AnimatedSection } from "@/components/AnimatedSection";
import Technologies from "@/components/sections/Technologies";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-[1180px] px-6 md:px-8 lg:px-6">
      <MouseAura />
      <div className="lg:flex lg:items-start lg:gap-0">
        <Nav />
        <main className="flex flex-col gap-8 pt-6 lg:pt-[60px] lg:pl-14 lg:flex-1 lg:py-[60px]">
          <AnimatedSection>
            <section id="about" className="scroll-mt-16">
              <About />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="technologies" className="scroll-mt-16">
              <Technologies />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="experience" className="scroll-mt-16">
              <ExpCard />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="studies" className="scroll-mt-16">
              <Studies />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="projects" className="scroll-mt-16">
              <Projects />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="contact" className="scroll-mt-16">
              <Contact />
            </section>
          </AnimatedSection>
          <Footer />
        </main>
      </div>
    </div>
  );
}
