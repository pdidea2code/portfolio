import { Container, Row, Col } from "react-bootstrap";
import "./projects.css";

const projectData = [
  {
    title: "Project One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "https://raw.githubusercontent.com/Yashkapure06/Shangri-La-Petition-Platform/refs/heads/master/screenshots/landing.png",
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    title: "Project Two",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://raw.githubusercontent.com/Yashkapure06/Shangri-La-Petition-Platform/refs/heads/master/screenshots/landing.png",
    liveDemo: "#",
    sourceCode: "#",
  },

  {
    title: "Project Three",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image:
      "https://raw.githubusercontent.com/Yashkapure06/Shangri-La-Petition-Platform/refs/heads/master/screenshots/landing.png",
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    title: "Project Four",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://raw.githubusercontent.com/Yashkapure06/Shangri-La-Petition-Platform/refs/heads/master/screenshots/landing.png",
    liveDemo: "#",
    sourceCode: "#",
  },
  {
    title: "Project Five",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image:
      "https://raw.githubusercontent.com/Yashkapure06/Shangri-La-Petition-Platform/refs/heads/master/screenshots/landing.png",
    liveDemo: "#",
    sourceCode: "#",
  },
];

const Project = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center align-item-center">
        <span className="aboutme-text lato-thin">Project</span>
      </div>
      <Row>
        {projectData.map((project, index) => (
          <Col xs={12} md={6} xl={4} key={index}>
            <div style={{ padding: "20px" }}>
              <div className="cards">
                <div className="card__image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="card__content">
                  <p className="card__title">{project.title}</p>
                  <p className="card__description">{project.description}</p>
                  <button className="card__button" onClick={() => window.open(project.liveDemo, "_blank")}>
                    Live Demo
                  </button>
                  <button className="card__button secondary" onClick={() => window.open(project.sourceCode, "_blank")}>
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Project;
