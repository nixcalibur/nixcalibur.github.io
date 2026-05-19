export default function TimelineSection() {
  return (
    <section className="section-shell" id="timeline" aria-labelledby="timeline-title">
      <div className="section-heading">
        <h2 id="timeline-title">Timeline</h2>
      </div>
      <div className="timeline">
        <article className="timeline-entry visible">
          <div className="timeline-date">March 2022 - February 2026</div>
          <div className="timeline-dot">
            <img src="/images/sejong.png" alt="" />
          </div>
          <div className="timeline-card">
            <h3>Computer Science</h3>
            <p>Sejong University</p>
            <ul>
              <li>Built projects with Python, Java, C++, databases, and web technologies.</li>
              <li>Studied AI, computer vision, cybersecurity, networks, data structures, and algorithms.</li>
              <li>Graduated with CGPA 3.76.</li>
            </ul>
          </div>
        </article>
        <article className="timeline-entry visible">
          <div className="timeline-date">Next</div>
          <div className="timeline-dot">
            <img src="/images/q.png" alt="" />
          </div>
          <div className="timeline-card">
            <h3>Developing a Game</h3>
            <p>Side Project</p>
            <ul><li>Exploring gameplay systems, Unity workflows, 3D assets, and prototypes.</li></ul>
          </div>
        </article>
      </div>
      <p className="future-awaits">into the unknown future...</p>
    </section>
  );
}
