import React, { useEffect } from "react";
import "./about.css";
import Background from "../../Assets/Images/CodeBg.png";
import RVCCimg from "../../Assets/Images/RVCC.png";
import ULACITimg from "../../Assets/Images/ULACIT.png";
import CatalinasImg from "../../Assets/Images/Catalinas.jpg";
import DukeFarmsImg from "../../Assets/Images/DukeFarms.jpeg";
import DukeFarms2Img from "../../Assets/Images/DukeFarms2.jpg";
import DukeFarms3Img from "../../Assets/Images/DukeFarms3.jpg";
import NapoliImg from "../../Assets/Images/Napoli.jpeg";
import NewJerseyImg from "../../Assets/Images/NewJersey.jpeg";
import NewJersey2Img from "../../Assets/Images/NewJersey2.jpg";
import NewJersey3Img from "../../Assets/Images/NewJersey3.jpeg";
import NewYorkImg from "../../Assets/Images/NewYork.jpg";
import NewYork2Img from "../../Assets/Images/NewYork2.jpg";
import NewYork3Img from "../../Assets/Images/NewYork3.jpeg";
import NewYork4Img from "../../Assets/Images/NewYork4.jpg";
import PlaneImg from "../../Assets/Images/Plane.jpg";
import UlacitppImg from "../../Assets/Images/UlacitPP.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="About-container"
      style={{ backgroundImage: `url(${Background})` }}
      loading="lazy"
    >
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="column">
          <div className="left-col"></div>
        </div>
        <div className="column">
          <div className="right-col">
            <div className="images-div">
              <Image
                isBlurred
                width={240}
                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                alt="NextUI Album Cover"
                className="m-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
