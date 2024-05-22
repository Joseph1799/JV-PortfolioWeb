import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import logoLarge from "../../Assets/Images/logo.png";
import logoSmall from "../../Assets/Images/LogoSmall.png";
import { BiSolidHome } from "react-icons/bi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  const [logoSrc, setLogoSrc] = useState(logoLarge); // Establece la imagen grande como predeterminada

  // Función para cambiar la imagen a la versión pequeña cuando se cumple la condición del media query
  const handleMediaQueryChange = () => {
    if (window.matchMedia("(max-width: 606px)").matches) {
      setLogoSrc(logoSmall);
    } else {
      setLogoSrc(logoLarge);
    }
  };

  // Agrega un listener al media query para detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 606px)");
    mediaQueryList.addListener(handleMediaQueryChange);
    handleMediaQueryChange(); // Llama a la función una vez para establecer la imagen inicial
    return () => mediaQueryList.removeListener(handleMediaQueryChange);
  }, []);

  return (
    <section>
      <header className="primary-header">
        <div className="container">
          <nav>
            <Link to="/">
              <img src={logoSrc} alt="Logo" className="logo" />
            </Link>
            <ul className="nav-list">
              <li>
                <Link to="/" className="nav-link">
                  <BiSolidHome className="icon" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about-me" className="nav-link">
                  <BsFillPersonVcardFill className="icon" />
                  <span>About Me</span>
                </Link>
              </li>
              <li>
                <Link to="/proyects" className="nav-link">
                  <FaCodeBranch className="icon" />
                  <span>Proyects</span>
                </Link>
              </li>
              <li>
                <Link to="/contact-me" className="nav-link">
                  <IoMdMail className="icon" />
                  <span>Contact Me</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
