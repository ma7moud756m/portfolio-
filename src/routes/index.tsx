// Portfolio page with warm beige/teal theme
import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { personalInfo } from "@/data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${personalInfo.name} — Portfolio` },
      { name: "description", content: personalInfo.subtitle },
      { property: "og:title", content: `${personalInfo.name} — Portfolio` },
      { property: "og:description", content: personalInfo.subtitle },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. Built with passion.
        </p>
      </footer>
    </div>
  );
}
