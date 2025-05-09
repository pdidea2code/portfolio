import { Col, Container, Row } from "react-bootstrap";
import "./aboutus.css";
import git from "../../assets/git.svg";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.svg";
import Aboutimg from "../../assets/about.png";

const Aboutus: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="comic-relief-regular about-connect">Connect with me :</span>
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
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="aboutme-text lato-thin">About Me</div>
            <div className="aboutme-title lato-thin">Hello! My name is Jone Doe</div>
            <div className="aboutme-description lato-thin">
              I am a self-taught programmer with a passion for learning and exploring new technologies. I have a strong
              background in FrontEnd Development and improving full-stack development and am always eager to expand my
              skillset and take on new challenges. In my free time, I enjoy sipping on a cup of tea (or coffee) and
              watching a game of cricket. As a dedicated and driven individual, I am constantly seeking out
              opportunities to grow and improve as a programmer.
            </div>
            <div className="aboutme-description lato-thin">Some of the Stack I know</div>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              <span className="aboutme-text lato-thin">Html</span>
              <span className="aboutme-text lato-thin">CSS</span>
              <span className="aboutme-text lato-thin">Javascript</span>
              <span className="aboutme-text lato-thin">React.js</span>
              <span className="aboutme-text lato-thin">Next.js</span>
              <span className="aboutme-text lato-thin">Tailwind CSS</span>
              <span className="aboutme-text lato-thin">Bootstrap</span>
              <span className="aboutme-text lato-thin">Node.js</span>
              <span className="aboutme-text lato-thin">Express.js</span>
              <span className="aboutme-text lato-thin">MongoDB</span>
              <span className="aboutme-text lato-thin">and more.</span>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="aboutme-image">
              <img
                src={Aboutimg}
                alt="About Me"
                className="aboutme-image"
                style={{
                  filter: "drop-shadow(0 4px 6px rgba(255, 255, 255, 0.85))",
                  maxWidth: "100%",
                  height: "auto",
                  marginTop: "20px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Aboutus;
