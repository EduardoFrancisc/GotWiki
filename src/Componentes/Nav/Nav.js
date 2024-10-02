import { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#seasons">Temporadas</a>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">
            Mundo
          </a>
          <div className="dropdown-content">
            <a href="#continentes">Continentes</a>
            <a href="#houses">Casas</a>
            <a href="#characters">Personagens</a>
          </div>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  );
}
