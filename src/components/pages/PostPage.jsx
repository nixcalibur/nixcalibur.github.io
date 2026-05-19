function ArticleBlock({ block }) {
  if (block.type === 'heading') return <h2>{block.text}</h2>;
  if (block.type === 'subheading') return <h3>{block.text}</h3>;
  if (block.type === 'quote') return <blockquote>{block.text}</blockquote>;
  if (block.type === 'code') return <pre><code>{block.text}</code></pre>;
  if (block.type === 'divider') return <hr />;
  if (block.type === 'placeholder') return <p className="article-placeholder">{block.text}</p>;

  if (block.type === 'image') {
    return (
      <figure className="article-image">
        <img src={block.src} alt={block.alt} />
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    );
  }

  if (block.type === 'list') {
    return (
      <ul>
        {block.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  return <p>{block.text}</p>;
}

export default function PostPage({ post, setPage }) {
  if (!post) {
    return (
      <main className="blog-page">
        <article className="section-shell article-page">
          <button className="pixel-button" type="button" onClick={() => setPage('blog')}>Back to blog</button>
          <h1>Post not found</h1>
        </article>
      </main>
    );
  }

  return (
    <main className="blog-page">
      <article className="section-shell article-page">
        <button className="pixel-button" type="button" onClick={() => setPage('blog')}>Back to blog</button>
        <header className="article-header">
          <p className="eyebrow">{post.date}</p>
          <h3 className="article-tags">{post.tags.join(', ')}</h3>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
        </header>
        <div className="article-content">
          {post.content.map((block, index) => <ArticleBlock key={`${block.type}-${index}`} block={block} />)}
        </div>
      </article>
    </main>
  );
}
