export default function SkillsSection({ skills }) {
  return (
    <section className="section-shell" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <h2 id="skills-title">Skills & Tools</h2>
      </div>
      <div className="skills-groups">
        {skills.map((group) => (
          <section className="skill-group" key={group.category} aria-label={group.category}>
            <h3>{group.category}</h3>
            <div className="skill-cloud">
              {group.items.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
