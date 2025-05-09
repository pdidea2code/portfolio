import { Container } from "react-bootstrap";
import git from "../../assets/git.svg";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.svg";
import Aboutimg from "../../assets/about.png";

const Contact = () => {
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span className="comic-relief-regular about-connect">Contact with me :</span>
        <a href="https://github.com/">
          <img src={git} alt="GitHub" className="connect-icon" />
        </a>
        <a href="https://www.linkedin.com/">
          <img src={linkedin} alt="LinkedIn" className="connect-icon" />
        </a>
        <a href="mailto:jdoe@example.com">
          <img src={mail} alt="Email" className="connect-icon" />
        </a>
      </div>
    </Container>
  );
};

export default Contact;
