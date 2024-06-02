import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../Assests/Images/mindpill.jpg";
import projImg2 from "../Assests/Images/projectimg1.png";
import projImg3 from "../Assests/Images/todo.jpg";
import projImg4 from "../Assests/Images/loginsignup.jpg";
import projImg5 from "../Assests/Images/footballscore.jpg";
import projImg6 from "../Assests/Images/qr_img.png";
import projImg7 from "../Assests/Images/notes.jpg";
import projImg8 from "../Assests/Images/memes.jpg";
import projImg9 from "../Assests/Images/aibses.jpg";
import projImg10 from "../Assests/Images/vehicel.png";
import projImg11 from "../Assests/Images/gaia.jpg";

import colorSharp2 from "../Assests/Images/colorsharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const webProjects = [
    {
      title: "Mind-Pill India",
      description: "Health Care Startup",
      imgUrl: projImg1,
      githublink: "https://github.com/Deepanshu9376/MindPill-WebSite",
    },
    {
      title: "Quiz App",
      description: "Learning & Development",
      imgUrl: projImg2,
      githublink: "https://github.com/Deepanshu9376/Quiz-App",
    },
    {
      title: "To-do List",
      description: "Daily to-do list",
      imgUrl: projImg3,
      githublink: "https://github.com/Deepanshu9376/Todo-List",
    },
    {
      title: "Login Signup",
      description: "Basic Authentication",
      imgUrl: projImg4,
      githublink: "https://github.com/Deepanshu9376/Authentication",
    },
    {
      title: "Football page",
      description: "Live scores football",
      imgUrl: projImg5,
      githublink: "https://github.com/Deepanshu9376/Football-Page-",
    },
    {
      title: "Qr-Code Generator",
      description: "Generate Qr-code for anything",
      imgUrl: projImg6,
      githublink: "https://github.com/Deepanshu9376/Qr-Code-Generator",
    },
  ];

  const androidProjects = [
    {
      title: "Mind-Pill India App",
      description: "Health Care Startup",
      imgUrl: projImg1,
      githublink: "https://github.com/Deepanshu9376/MindPill",
    },
    {
      title: "Notes App",
      description: "Daily Notes App",
      imgUrl: projImg7,
      githublink: "https://github.com/Deepanshu9376/Notes-App",
    },
    {
      title: "MemeShare",
      description: "Daily Memes App",
      imgUrl: projImg8,
      githublink: "https://github.com/Deepanshu9376/MemeShare",
    },
  ];

  const aimlProjects = [
    {
      title: "AI-Based Traffic Light Controller",
      description: "Autmoated Traffic Light Controller",
      imgUrl: projImg9,
      githublink: "https://github.com/Deepanshu9376/AI-based-TLC",
    },
    {
      title: "Vehicle-Counter-using-OpenCv",
      description: "Vehicle Counting using open-cv",
      imgUrl: projImg10,
      githublink:
        "https://github.com/Deepanshu9376/Vehicle-Counter-using-OpenCv",
    },
    {
      title: "Gaia Nurture",
      description: "Soil health for specific crop",
      imgUrl: projImg11,
      githublink: "https://github.com/Deepanshu9376/Soil-Nutrient-Calcuator",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In my career, I've tackled various projects across different
                    tech stacks. In web development, I've worked on Mindpill (a
                    quiz website) and a login/signup system. In Android
                    development, I've contributed to the Mindpill app,
                    NewsFresh, and MemeShare. In AI/ML, I've developed an
                    AI-based traffic light controller and a vehicle counting
                    system using OpenCV and Python.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Android</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">AI/ML</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {androidProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {aimlProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="bgimg"
      ></img>
    </section>
  );
};
