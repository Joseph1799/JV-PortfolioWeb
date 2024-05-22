import React, { useEffect } from "react";
import "./about.css";
import background from "../../Assets/Images/CodeBg.png";
import collage from "../../Assets/Images/CollageAbout.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="about"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="aboutHolder flex">
        <div className="ImageDiv">
          <img src={collage} alt="Image" className="collage" />
        </div>

        <div data-aos="fade-up" className="introCard">
          <div className="aboutParagraph">
            <h1 className="home-title">
              Who is Joseph <span className="outlined-text">Vargas?</span>
            </h1>
            <p className="home-text">
              As a passionate computer science student at ULACIT, I'm on a
              journey of continuous learning and growth. I've specialized in
              Java, Spring Boot, and SQL, areas where I've invested time and
              effort to reach an advanced level. But my curiosity and thirst for
              knowledge don't stop there; I also master a variety of languages
              and tools, from Unix and Git to C#, Python, and Kotlin. This
              versatility allows me to approach challenges from different angles
              and adapt quickly to new technologies and environments.
              <br />
              <br />
              Furthermore, my expertise extends beyond application development,
              encompassing cloud computing through Amazon Web Services (AWS) and
              web development technologies like HTML, CSS, and JavaScript. This
              breadth of knowledge enables me to tackle projects
              comprehensively, from conceptualization to implementation and
              delivery.
              <br />
              <br />
              What motivates me the most is applying my skills and knowledge to
              real-world challenges. Even though I'm still in a training period,
              I actively seek opportunities to put into practice what I've
              learned and contribute meaningfully to interesting projects. I
              firmly believe in the power of technology to make a positive
              impact on society, and I'm excited to explore new opportunities
              that allow me to do just that.
              <br />
              <br />
              In summary, my approach to computer science goes beyond acquiring
              technical skills; it's about using technology as a tool to
              innovate, create, and improve the world around us. I'm committed
              to continuing to grow as a professional and making the most of
              every opportunity that arises in this exciting field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
