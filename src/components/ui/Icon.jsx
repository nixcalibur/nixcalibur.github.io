const paths = {
  github: (
    <>
      <path d="M10 19c-4.4 1.4-4.4-2.2-6-2.7" />
      <path d="M14 22v-3.9c0-1 .1-1.4-.5-2 2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.6 1.3a12.4 12.4 0 0 0-6 0c-2.5-1.6-3.6-1.3-3.6-1.3a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3 10.1c0 4.6 2.8 5.6 5.5 5.9-.4.4-.6.9-.6 1.8V22" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.5l.5-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  instagram: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  email: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  external: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
      <path d="M19 13v6H5V5h6" />
    </>
  ),
};

export default function Icon({ name, className = 'icon', title }) {
  return (
    <svg
      className={className}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      role={title ? 'img' : undefined}
    >
      {paths[name] || paths.external}
    </svg>
  );
}
