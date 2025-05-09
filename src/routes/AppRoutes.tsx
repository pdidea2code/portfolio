import React, { useEffect, useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Home from "../pages/Home/Home";
import ReactFullpage from "@fullpage/react-fullpage";
import Aboutus from "../pages/Aboutus/Aboutus";
import { useLocation } from "react-router-dom";
import Experience from "../pages/Experience/Experience";
import Project from "../pages/Project/Project";
import Contact from "../pages/Contact/Contact";

const AppRoutes: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveNav(href);
  };

  useEffect(() => {
    handleNavClick(location.hash);
  }, [location]);

  useEffect(() => {
    if (isMobile) {
      const sections = document.querySelectorAll("section[id]");
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }
  }, [isMobile]);

  return (
    <>
      <Header />
      {!isMobile ? (
        <ReactFullpage
          debug
          licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
          anchors={["home", "about", "projects", "experience", "contact"]}
          credits={{ enabled: true, position: "right" }}
          render={({ fullpageApi }) => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home moveTo={(section) => fullpageApi.moveTo(section)} />
              </div>
              <div className="section">
                <Aboutus />
              </div>
              <div className="section">
                <Project />
              </div>
              <div className="section">
                <Experience />
              </div>
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      ) : (
        <main style={{ backgroundColor: "var(--color1)" }}>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <Aboutus />
          </section>
          <section id="projects">
            <Project />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default AppRoutes;
