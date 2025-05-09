import React from "react";
import "./experience.css"; // Create this CSS file for styling
import { Container } from "react-bootstrap";

const Experience: React.FC = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      company: "Microsoft",
      description:
        "Designed and developed a fully functional website using the latest technologies such as Next.js and React.js. Worked independently to create engaging web content and reusable components. Contributed to the development of the website and helped to improve the performance of the website",
    },
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      company: "Microsoft",
      description:
        "Designed and developed a fully functional website using the latest technologies such as Next.js and React.js. Worked independently to create engaging web content and reusable components. Contributed to the development of the website and helped to improve the performance of the website",
    },
  ];

  return (
    <Container>
      <div className="timeline-container">
        <div>
          <span className="aboutme-text lato-thin">Experience</span>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <span className="year">{exp.year}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-subtitle">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Experience;
