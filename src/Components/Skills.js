import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skillsData = [
    { name: "C++", percentage: 93 },
    { name: "JavaScript", percentage: 86 },
    { name: "ReactJs", percentage: 74 },
    { name: "Kotlin", percentage: 77 },
    { name: "C", percentage: 90 },
    { name: "Python", percentage: 84 },
    { name: "C#", percentage: 81 },
    { name: "NodeJs", percentage: 80 },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I've developed a diverse skill set through hands-on experience.
                In machine learning, I use C++, C#, and Python. For web
                development, I'm proficient in JavaScript, React, and Node.js.
                In Android development, I utilize Kotlin and Android Studio to
                create robust mobile applications.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skillsData.map((skill, index) => (
                  <div key={index} className="item">
                    <CircularProgressbar
                      className=" circ"
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={buildStyles({
                        pathColor: "#54c7d7",
                        textColor: "#fff",
                        trailColor: "#d6d6d6",
                        textSize: "16px",
                        pathTransitionDuration: 0.5,
                      })}
                    />
                    <h5 style={{ marginTop: "10px" }}>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="altImage" /> */}
    </section>
  );
};
