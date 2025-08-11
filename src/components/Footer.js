import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-section">
        <p>
          &copy; Aradhya Yadav | Frontend Developer | aradhyay868@gmail.com
        </p>
      </div>
      <div className="icons">
        <a href="https://github.com/Aradhya-005" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/aradhya-yadav-b4b287242" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:aradhyay868@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
