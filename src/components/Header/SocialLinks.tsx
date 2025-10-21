import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si"; // Upwork icon

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/lama-naser-49bb22300/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link linkedin"
      >
        <FaLinkedin size={32} />
        <span className="tooltip">LinkedIn</span>
      </a>

      <a
        href="https://github.com/lamaNase"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link github"
      >
        <FaGithub size={32} />
        <span className="tooltip">GitHub</span>
      </a>

      <a
        href="https://www.upwork.com/freelancers/~0184209bf0a8c84bcd"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link upwork"
      >
        <SiUpwork size={32} color="#6fda44" />
        <span className="tooltip">Upwork</span>
      </a>
    </div>
  );
}