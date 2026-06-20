import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineItem } from "@/components/shared/timeline-item";
import { SkillBar } from "@/components/shared/skill-bar";
import { SectionReveal, childVariants } from "@/components/animations/section-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { FadeIn } from "@/components/animations/fade-in";
import { experiences } from "@/data/experience";
import { education, certifications } from "@/data/education";
import { skillGroups } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Architecting enterprise solutions"
          description="With over 8 years of experience building enterprise applications, I help organizations transform their digital infrastructure and build scalable, maintainable systems."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <FadeIn direction="right" className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Introduction</h3>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  I'm a Senior Technical Consultant and Fullstack Developer
                  with a passion for building enterprise-grade applications
                  that solve complex business problems. My expertise spans
                  across application architecture, digital transformation,
                  audit systems, HRIS development, and fraud detection.
                </p>
                <p>
                  I've led digital transformation initiatives for organizations
                  across Southeast Asia, modernizing legacy systems and
                  building cloud-native platforms that serve millions of users.
                  My approach combines technical excellence with strategic
                  thinking to deliver solutions that drive measurable business
                  value.
                </p>
                <p>
                  When I'm not architecting systems, I'm mentoring developers,
                  contributing to open source, and exploring emerging
                  technologies that shape the future of enterprise software.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Projects Delivered
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Enterprise Clients
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-16 lg:col-span-7">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Work Experience</h3>
              </div>
              <div>
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={exp.id}
                    title={exp.role}
                    subtitle={exp.company}
                    period={exp.period}
                    description={exp.description}
                    isLast={index === experiences.length - 1}
                  >
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="muted" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </TimelineItem>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div>
                {education.map((edu, index) => (
                  <TimelineItem
                    key={edu.id}
                    title={edu.degree}
                    subtitle={edu.institution}
                    period={edu.period}
                    description={edu.description}
                    isLast={index === education.length - 1}
                  />
                ))}
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>

        <div className="mt-20">
          <FadeIn>
            <h3 className="text-xl font-semibold mb-8">Technical Skills</h3>
          </FadeIn>
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <StaggerItem key={group.category}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.category}
                  </h4>
                  <div className="space-y-4">
                    {group.skills.map((skill, idx) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        delay={idx * 0.1}
                      />
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
