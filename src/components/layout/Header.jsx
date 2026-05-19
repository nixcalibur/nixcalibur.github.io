import { useEffect, useState } from 'react';

export default function Header({ page, setPage }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const threshold = 120;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;

      if (currentY <= threshold) {
        setIsHidden(false);
      } else {
        setIsHidden(scrollingDown);
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (nextPage, hash) => {
    setPage(nextPage);
    if (hash) {
      window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header${isHidden ? ' site-header-hidden' : ''}`}>
      <button className="site-title title-button" type="button" onClick={() => go('home', '#home')}>
        sduphy
      </button>
      <nav className="nav-links" aria-label="Primary navigation">
        <button type="button" onClick={() => go('home', '#home')} aria-current={page === 'home' ? 'page' : undefined}>Home</button>
        <button type="button" onClick={() => go('about')} aria-current={page === 'about' ? 'page' : undefined}>About</button>
        <button type="button" onClick={() => go('blog')} aria-current={page === 'blog' ? 'page' : undefined}>Blog</button>
        <button type="button" onClick={() => go('home', '#projects')}>Projects</button>
        <button type="button" onClick={() => go('home', '#timeline')}>Timeline</button>
        <button type="button" onClick={() => go('home', '#skills')}>Skills</button>
      </nav>
    </header>
  );
}
