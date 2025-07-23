import React from "react";

function SocialLinks({ links }) {
  return (
    <div className="footer-section">
      {links.map(({ name, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`footer-section ${name}`}
        >
          {[name]}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
