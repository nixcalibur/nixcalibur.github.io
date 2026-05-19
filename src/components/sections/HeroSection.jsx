export default function HeroSection({ setPage }) {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <h1 aria-label="Hi, I'm Nik, a developer">Hi, I'm <span className="typewriter" /></h1>
        <p className="hero-summary">
          Head Specialist & Analyst in Remote Virtual Talent Management + Major Stock Shareholder <br />
          Data Science & Analytics Professional Driving Insights in the Online Gaming Industry <br />
          Comet Enjoyer.
        </p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="pixel-button primary" href="#projects">View Projects</a>
          <button className="pixel-button primary" type="button" onClick={() => setPage('blog')}>View Blogs</button>
          <button className="pixel-button" type="button" onClick={() => setPage('about')}>About Me</button>
        </div>
      </div>
    </section>
  );
}
