import HeroSection from '../sections/HeroSection.jsx';
import ProjectsSection from '../sections/ProjectsSection.jsx';
import TimelineSection from '../sections/TimelineSection.jsx';
import SkillsSection from '../sections/SkillsSection.jsx';

export default function HomePage({ setPage, projects, skills }) {
  return (
    <main>
      <HeroSection setPage={setPage} />
      <ProjectsSection projects={projects} />
      <TimelineSection />
      <SkillsSection skills={skills} />
    </main>
  );
}
