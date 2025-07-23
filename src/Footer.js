import React from "react";
import SocialLinks from "./SocialLinks";

function Footer() {
  const myLinks = [
    { name: "Facebook", url: "https://www.facebook.com/?locale=pl_PL" },
    {
      name: "GitHub",
      url: "https://github.com/szymonzalewski?tab=repositories",
    },
    {
      name: "linkedIn",
      url: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Kontakt</h4>
        <ul className="footer-ul">
          <li>CV</li>
          <li>Email: szymon.marek.zalewski@gmail.com</li>
        </ul>
      </div>
      <div className="footer-copyright">
        <h4>Prawa autorskie</h4>
        <p>
          © {new Date().getFullYear()} Szymon Zalewski. Wszystkie prawa
          zastrzeżone.
        </p>
      </div>

      <div className="footer-section">
        <h4>Social media</h4>
        <SocialLinks links={myLinks} />
      </div>
    </footer>
  );
}

export default Footer;
