import { personalInfo } from "@/data";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: <Github size={22} />, href: personalInfo.github, label: "GitHub" },
  { icon: <Linkedin size={22} />, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: <Mail size={22} />, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-2">Get in touch</p>
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-muted-foreground mb-10">
            Feel free to reach out — I'm always open to new opportunities and collaborations.
          </p>

          <div className="flex items-center justify-center gap-5">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-card-foreground hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                {l.icon}
                {l.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
