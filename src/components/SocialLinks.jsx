import React from 'react';
import './SocialLinks.css';

function SocialLinks() {
  const socialMedia = [
    { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', url: 'https://github.com/juansteban08' },
    { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg', url: 'https://www.linkedin.com/in/juan-steban-valverde-105059311/' },
  ];

  return (
    <div className="social-links">
      <h2>Redes Sociales</h2>
      <div className="links-container">
        {socialMedia.map(social => (
          <SocialIcon key={social.name} logo={social.logo} url={social.url} />
        ))}
      </div>
    </div>
  );
}

const SocialIcon = ({ logo, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-icon">
      <img src={logo} alt="Social Logo" />
    </a>
  );
};

export default SocialLinks;
