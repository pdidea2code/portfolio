import { useEffect, useState } from "react";
import "./header.css";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setActiveNav(href);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    handleNavClick(location.hash);
  }, [location]);

  return (
    <div className="header">
      <div className="header-content">
        <span className="title comic-relief-regular">Jone Doe</span>

        {/* Hamburger */}
        <button className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#home" className={activeNav === "#home" ? "active" : ""} onClick={() => handleNavClick("#home")}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeNav === "#about" ? "active" : ""}
                onClick={() => handleNavClick("#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeNav === "#projects" ? "active" : ""}
                onClick={() => handleNavClick("#projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={activeNav === "#experience" ? "active" : ""}
                onClick={() => handleNavClick("#experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeNav === "#contact" ? "active" : ""}
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
