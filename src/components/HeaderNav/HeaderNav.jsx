import { useState, useEffect } from "react";
import NavItem from "./NavItem/NavItem";
import "./HeaderNav.css";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Program", href: "#program" },
    { name: "Service", href: "#service" },
    { name: "About", href: "#about" },
    { name: "Community", href: "#community" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>

      <div className={`nav ${isMenuOpen ? "active" : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <NavItem key={item.name} name={item.name} href={item.href} />
          ))}
          {isMenuOpen && isMobile && <NavItem name="Join Now" href="#join" />}
        </ul>
      </div>

      <div className="button-container">
        <div className="join-button">
          <button>Join Now</button>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
