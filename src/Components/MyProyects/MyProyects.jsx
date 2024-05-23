import React, { useEffect } from "react";
import "./myproyects.css";
import background from "../../Assets/Images/CodeBg.png";
import agsegurosimg from "../../Assets/Images/agseguros.png";
import guanagoimg from "../../Assets/Images/guanago.png";
import edufyimg from "../../Assets/Images/edufy.png";
import cosechaimg from "../../Assets/Images/cosecha.png";
import Aos from "aos";

const MyProyects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="Proyects-container"
    >
      <div className="page-title">
        <h1>My Projects</h1>
      </div>
      <div className="row">
        <div className="column">
          <div className="left-col">
            <div
              data-aos="fade-in"
              className="card clickable"
              onClick={() =>
                window.open(
                  "https://github.com/Joseph1799/GuanaGo.git",
                  "_blank"
                )
              }
            >
              <img src={guanagoimg} alt="" className="proyect-img" />
              <div className="container">
                <h4>
                  <b>Technologies Used</b>
                </h4>
                <ul className="tech-list">
                  <li>
                    <img
                      alt=""
                      className="icon"
                      title="HTML5"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="CSS3"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="JavaScript"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="React.js"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="Java"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="Spring Boot"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="MySQL"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="Node.js"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-in"
              className="card clickable"
              onClick={() =>
                window.open(
                  "https://github.com/Joseph1799/CosechaFacil.git",
                  "_blank"
                )
              }
            >
              <img src={cosechaimg} alt="" className="proyect-img" />
              <div className="container">
                <h4>
                  <b>Technologies Used</b>
                </h4>
                <ul className="tech-list">
                  <li>
                    <img
                      alt=""
                      className="icon"
                      title="HTML5"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="CSS3"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="JavaScript"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="Java"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="Spring Boot"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="Python"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="MySQL"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="right-col">
            <div
              data-aos="fade-in"
              className="card clickable"
              onClick={() =>
                window.open("https://github.com/Joseph1799/Edufy.git", "_blank")
              }
            >
              <img src={edufyimg} alt="" className="proyect-img" />
              <div className="container">
                <h4>
                  <b>Technologies Used</b>
                </h4>
                <ul className="tech-list">
                  <li>
                    <img
                      alt=""
                      className="icon"
                      title="HTML5"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="CSS3"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="JavaScript"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="Microsoft SQL Server"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="C#"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="Node.js"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-in"
              className="card clickable"
              onClick={() =>
                window.open(
                  "https://github.com/Joseph1799/AgenciaDeSeguros.git",
                  "_blank"
                )
              }
            >
              <img src={agsegurosimg} alt="" className="proyect-img" />
              <div className="container">
                <h4>
                  <b>Technologies Used</b>
                </h4>
                <ul className="tech-list">
                  <li>
                    <img
                      alt=""
                      className="icon"
                      title="Java"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    />

                    <img
                      alt=""
                      className="icon"
                      title="Adobe Ilustrator"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProyects;
