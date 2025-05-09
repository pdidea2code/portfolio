import React from "react";
import "./home.css";
import { Col, Container, Row } from "react-bootstrap";
import profileimnage from "../../assets/profile.jpg";
import profileimnage2 from "../../assets/profile2.png";
import Atropos from "atropos/react";

const Home: React.FC<{ moveTo?: (section: string) => void }> = ({ moveTo }) => {
  const handleHireMeClick = () => {
    if (moveTo) {
      // For desktop (ReactFullpage), use moveTo to navigate to contact
      moveTo("contact");
    } else {
      // For mobile, use scrollIntoView
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="home">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="welcome-text comic-relief-regular">Welcome to my</div>
            <span className="portfolio-text comic-relief-regular">Portfolio!</span>
            <div className="lato-thin portfolio-description">
              <div className="lato-thin">
                I am a front-end developer with 3 years of proven experience in the field. I am skilled in Search Engine
                Optimization, Next.js, React.js, Tailwind CSS, and JavaScript. I am passionate about creating
                interactive and beautiful user interfaces, along with the required functionalities on the front end. One
                of my favourite technologies to work with is React.js, particularly within the
              </div>
              <span className="highlight">MERN</span> stack.
              <div className="lato-thin">
                My Expertise includes Next.js 14✨ & React.js for high-scale application development.
              </div>
            </div>
            <br />
            <div className="lato-thin homebtn">
              <button className="button" onClick={handleHireMeClick}>
                <span>Hire Me</span>
              </button>
              <button className="button">
                <span>My Resume</span>
              </button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="Profilecard">
              <h2>
                <Atropos className="my-atropos">
                  <img src={profileimnage} alt="Profile" className="profile-image" data-atropos-offset="-2" />
                  <img src={profileimnage2} alt="Profile" className="profile-image2" data-atropos-offset="0" />
                </Atropos>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
