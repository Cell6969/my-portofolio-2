import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineItem } from "@/components/shared/timeline-item";
import { SkillBar } from "@/components/shared/skill-bar";
import { SectionReveal, childVariants } from "@/components/animations/section-reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { FadeIn } from "@/components/animations/fade-in";
import { experiences } from "@/data/experience";
import { education, certifications } from "@/data/education";
import { skillGroups } from "@/data/skills";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            className="lg:max-w-xl"
            eyebrow="About Me"
            title="Architecting enterprise solutions"
            description="With over 3 years of experience building enterprise applications and delivered solution, I help organizations transform their digital infrastructure and build scalable, maintainable systems."
          />
          <FadeIn direction="left" delay={0.2}>
            <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl border border-border bg-secondary sm:h-72 sm:w-72">
              <Image
                src="/profile.jpeg"
                alt="Ahmad Fauzan profile photo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 288px"
                priority
              />
            </div>
          </FadeIn>
        </div>

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
                  I'm a Technical Consultant and Product Engineering Leader with a passion for building enterprise solutions that solve complex business challenges. My experience spans across Finance, Manufacturing, Industrial Estate, and Government sectors, delivering solutions in ERP, Generative AI, Fraud Detection, Analytics, and Digital Transformation initiatives.
                </p>
                <p>
                  I've led technology-driven transformation projects for organizations across Indonesia, helping modernize operations, improve decision-making, and accelerate business growth through scalable and practical technology solutions. My approach combines business understanding, solution architecture, and hands-on technical execution to deliver measurable business outcomes.
                </p>
                <p>
                  When I'm not architecting systems, I'm leading cross-functional initiatives, bridging business requirements with technical execution, and building solutions that enable organizations to scale and transform their operations.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <div className="text-2xl font-bold">5+</div>
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
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {skillGroups.map((group) => (
              <StaggerItem key={group.category} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-6">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
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
