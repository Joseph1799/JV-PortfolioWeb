import React, { useEffect } from "react";
import "./main.css";
import background from "../../Assets/Images/BackgroundTall.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main">
      <div className="ImageDiv">
        <img src={background} alt="Background" className="background" />
      </div>

      <div data-aos="fade-up" className="introCard flex">
        <div className="introParagraph">
          <h1 className="home-title">
            JOSEPH <span className="outlined-text">VARGAS</span>
          </h1>
          <p className="home-text">
            Hello! I am a passionate computer science student at ULACIT. I have
            a solid knowledge of Java, Spring Boot and SQL, and I also have
            skills in Unix, Git, C#, Python, Kotlin and other programming
            languages programming. My experience includes working with
            technologies web development such as HTML, CSS, JavaScript and the
            creation of APIs REST. My goal is to apply my knowledge and skills
            to address real-world challenges and contribute meaningfully in
            innovative projects.
          </p>
          <Link to="/about-me" className="button-59" role="button">
            More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
