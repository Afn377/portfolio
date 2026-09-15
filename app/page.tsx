import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SkillsList } from "@/components/SkillsList";
import { Projects } from "@/components/Projects";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Nav variant="landing" />
      <main>
        <Hero />
        <SkillsList />
        <Projects />
        <ContactSection />
      </main>
    </>
  );
}
