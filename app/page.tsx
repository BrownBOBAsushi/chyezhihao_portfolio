import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import TimelineItem from "@/components/TimelineItem";
import ExperienceCard from "@/components/ExperienceCard";
import SkillsSection from "@/components/SkillsSection";
import ContactForm from "@/components/ContactForm";
import {
  profile,
  education,
  experience,
  projects,
  skills,
  contactMessage,
} from "@/data/profile";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <Section id="hero" className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              {profile.title}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
              {profile.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-block"
              >
                Download Résumé
              </a>
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" className="bg-gray-50">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Education
          </h2>
          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                institution={edu.institution}
                location={edu.location}
                degree={edu.degree}
                period={edu.period}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <ExperienceCard
                key={index}
                role={exp.role}
                company={exp.company}
                location={exp.location}
                period={exp.period}
                bullets={exp.bullets}
              />
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" className="bg-gray-50">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Projects & Hackathons
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                event={project.event}
                date={project.date}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Skills
          </h2>
          <div className="max-w-3xl mx-auto">
            <SkillsSection title="Programming" items={skills.programming} />
            <SkillsSection title="Tools" items={skills.tools} />
            <SkillsSection title="Interests" items={skills.interests} />
            <SkillsSection title="Languages" items={skills.languages} />
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="bg-gray-50">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Contact
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            {contactMessage}
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Email
                </h3>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-gray-900 hover:text-gray-700 transition-colors font-medium"
                >
                  {profile.contact.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  LinkedIn
                </h3>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-700 transition-colors font-medium"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8 px-6">
          <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
