import React, { useEffect } from "react";
import "./myproyects.css";
import background from "../../Assets/Images/CodeBg.png";
import agsegurosimg from "../../Assets/Images/agseguros.png";
import guanagoimg from "../../Assets/Images/guanago.png";
import edufyimg from "../../Assets/Images/edufy.png";
import cosechaimg from "../../Assets/Images/cosecha.png";
import Aos from "aos";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

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
            <Card
              variant="outlined"
              sx={{ width: 380 }}
              data-aos="fade-in"
              className="proyect-card"
              onClick={() =>
                window.open(
                  "https://github.com/Joseph1799/GuanaGo.git",
                  "_blank"
                )
              }
            >
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src={guanagoimg} alt="" className="proyect-img" />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="title-md">GuanaGo</Typography>
                <Typography level="body-sm">
                  This web app is a travel site tailored for Guanacaste, Costa
                  Rica.
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level2" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    Tech Used
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
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
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>

            <Card
              variant="outlined"
              sx={{ width: 380 }}
              data-aos="fade-in"
              className="proyect-card"
              onClick={() =>
                window.open(
                  "https://github.com/Joseph1799/CosechaFacil.git",
                  "_blank"
                )
              }
            >
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src={cosechaimg} alt="" className="proyect-img" />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="title-md">Cosecha Fácil</Typography>
                <Typography level="body-sm">
                  This project is a platform for managing prices of agricultural
                  products.
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level2" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    Tech Used
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
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
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </div>
        </div>
        <div className="column">
          <div className="right-col">
            <Card
              variant="outlined"
              sx={{ width: 380 }}
              data-aos="fade-in"
              className="proyect-card"
              onClick={() =>
                window.open("https://github.com/Joseph1799/Edufy.git", "_blank")
              }
            >
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src={edufyimg} alt="" className="proyect-img" />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="title-md">Edufy</Typography>
                <Typography level="body-sm">
                  This is an educational platform (LMS) designed to enhance the
                  learning experience.
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level2" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    Tech Used
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
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
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>

            <Card
              variant="outlined"
              sx={{ width: 380 }}
              data-aos="fade-in"
              className="proyect-card"
              onClick={() =>
                window.open(
                  "https://github.com/Joseph1799/AgenciaDeSeguros.git",
                  "_blank"
                )
              }
            >
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src={agsegurosimg} alt="" className="proyect-img" />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="title-md">Vital Care</Typography>
                <Typography level="body-sm">
                  This project creatively manages a medical insurance agency
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level2" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    Tech Used
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
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
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProyects;
