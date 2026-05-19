import Icon from '../ui/Icon.jsx';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <img src={project.image} alt={project.alt} />
      </div>
      <div className="project-body">
        <div>
          <p className="project-kicker">{project.kicker}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <ul className="project-points">
          {project.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
          Open Repository <Icon name="external" />
        </a>
      </div>
    </article>
  );
}

export default function ProjectsSection({ projects }) {
  return (
    <section className="section-shell" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title">My Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
      <div className="section-cta">
        <a className="pixel-button primary" href="https://github.com/nixcalibur?tab=repositories" target="_blank" rel="noopener noreferrer">More on GitHub</a>
      </div>
    </section>
  );
}
