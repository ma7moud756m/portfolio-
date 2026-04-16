import { useState, useEffect } from "react";
import { personalInfo } from "@/data";
import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";

export default function HeroSection() {
  const fullName = personalInfo.name;
  const [displayed, setDisplayed] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullName.slice(0, i + 1));
      i++;
      if (i >= fullName.length) {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [fullName]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/profile.jpg')" }}
      />
      {/* Overlay: light mode = light 0.35, dark mode = dark 0.55 */}
      <div className="absolute inset-0 bg-background/35 dark:bg-background/55" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl"
      >
        <p className="text-sm font-mono tracking-widest uppercase text-primary mb-4 drop-shadow-sm">
          Welcome to my portfolio
        </p>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight drop-shadow-md">
          <span className={!doneTyping ? "typing-cursor" : ""}>{displayed}</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          {personalInfo.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-card-foreground hover:bg-secondary transition-all hover:-translate-y-0.5"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
