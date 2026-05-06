import Nav from "@/components/Nav";
import ExpCard from "@/components/ExpCards";
import Projects from "@/components/Projects";
import Studies from "@/components/Studies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MouseAura } from "@/components/MouseAura";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TechCarousel } from "@/components/TechCarousel";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <MouseAura />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Nav />
        <main className="flex flex-col pt-6 lg:pt-24 lg:pl-5 lg:w-3/4 lg:py-24 gap-8">
          <AnimatedSection>
            <section id="about">
              <About />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="technologies">
              <TechCarousel />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="experience">
              <ExpCard />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="studies">
              <Studies />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="projects">
              <Projects />
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section id="contact">
              <Contact />
            </section>
          </AnimatedSection>
          <Footer />
        </main>
      </div>
    </div>
  );
}
