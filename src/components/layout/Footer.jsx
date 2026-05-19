import Icon from '../ui/Icon.jsx';

export default function Footer({ socials }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© sduphy - Updated in May 2026</p>
        <div className="footer-links" aria-label="Social links">
          {socials.slice(0, 2).map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
              <Icon name={social.icon} />
            </a>
          ))}
          <a href="mailto:niknizmal@yahoo.com" aria-label="Email"><Icon name="email" /></a>
        </div>
      </div>
    </footer>
  );
}
