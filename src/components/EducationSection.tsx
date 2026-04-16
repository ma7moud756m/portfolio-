import { education } from "@/data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-2">Background</p>
          <h2 className="font-display text-4xl font-bold text-foreground">Education</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative sm:pl-16 mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-3 top-1 w-7 h-7 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center hidden sm:flex">
                <GraduationCap size={14} className="text-primary" />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h3 className="font-display text-lg font-semibold text-card-foreground">
                    {edu.title}
                  </h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 rounded-md px-2.5 py-1 w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>

                {edu.courses && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Relevant Courses
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((c) => (
                        <span
                          key={c}
                          className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
