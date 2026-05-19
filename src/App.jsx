import { useEffect, useState } from 'react';
import Header from './components/layout/Header.jsx';
import Background from './components/layout/Background.jsx';
import Footer from './components/layout/Footer.jsx';
import HomePage from './components/pages/HomePage.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import BlogPage from './components/pages/BlogPage.jsx';
import PostPage from './components/pages/PostPage.jsx';
import { projects, posts, skills, socials } from './data/content.js';

function routeFromPath(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'blog' && parts.length > 1) return { page: 'post', activePost: parts.slice(1).join('/') };
  if (parts[0] === 'blog') return { page: 'blog', activePost: null };
  if (parts[0] === 'about') return { page: 'about', activePost: null };
  return { page: 'home', activePost: null };
}

function postPath(post) {
  const datePath = post.date.replaceAll('-', '');
  return `/blog/${datePath}/${post.slug}`;
}

export default function App() {
  const initialRoute = routeFromPath(window.location.pathname);
  const [page, setPageState] = useState(initialRoute.page);
  const [activePost, setActivePost] = useState(initialRoute.activePost);

  useEffect(() => {
    const onPopState = () => {
      const nextRoute = routeFromPath(window.location.pathname);
      setPageState(nextRoute.page);
      setActivePost(nextRoute.activePost);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const setPage = (nextPage) => {
    setPageState(nextPage);
    setActivePost(null);
    const nextPath = nextPage === 'home' ? '/' : `/${nextPage}`;
    window.history.pushState(null, '', nextPath);
  };

  const openPost = (post) => {
    setActivePost(`${post.date.replaceAll('-', '')}/${post.slug}`);
    setPageState('post');
    window.history.pushState(null, '', postPath(post));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPost = posts.find((post) => `${post.date.replaceAll('-', '')}/${post.slug}` === activePost);

  return (
    <>
      <Background />
      <Header page={page} setPage={setPage} />
      {page === 'about' && <AboutPage socials={socials} />}
      {page === 'blog' && <BlogPage posts={posts} setActivePost={openPost} />}
      {page === 'post' && <PostPage post={currentPost} setPage={setPage} />}
      {page === 'home' && <HomePage setPage={setPage} projects={projects} skills={skills} />}
      <Footer socials={socials} />
    </>
  );
}
