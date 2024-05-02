import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../Assests/Images/mindpill.jpg";
import projImg2 from "../Assests/Images/projectimg1.png";
import projImg3 from "../Assests/Images/todo.jpg";
import projImg4 from "../Assests/Images/loginsignup.jpg"
import projImg5 from "../Assests/Images/footballscore.jpg"
import projImg6 from "../Assests/Images/newsFresh.png";
import projImg7 from "../Assests/Images/notes.jpg";
import projImg8 from "../Assests/Images/memes.jpg";
import projImg9 from "../Assests/Images/aibses.jpg";
import projImg10 from "../Assests/Images/vehicel.png";
import projImg11 from "../Assests/Images/drumkit.jpg"

import colorSharp2 from "../Assests/Images/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "Mind-Pill India",
      description: "Health Care Startup",
      imgUrl: projImg1,
    },
    {
      title: "Quiz App",
      description: "Learning & Development",
      imgUrl: projImg2,
    },
    {
      title: "To-do List",
      description: "Daily to-do list",
      imgUrl: projImg3,
    },
    {
      title: "Login Signup",
      description: "Basic Authentication",
      imgUrl: projImg4,
    },
    {
      title: "Football page",
      description: "Live scores football",
      imgUrl: projImg5,
    },
    {
      title: "NewsLetter",
      description: "Daily newsfeed",
      imgUrl: projImg6,
    },
  ];

  const androidProjects = [
    {
      title: "Mind-Pill India App",
      description: "Health Care Startup",
      imgUrl: projImg1,
    },
    {
      title: "Notes App",
      description: "Daily Notes App",
      imgUrl: projImg7,
    },
    {
      title: "MemeShare",
      description: "Daily Memes App",
      imgUrl: projImg8,
    },
  ];

  const aimlProjects = [
    {
      title: "AI-Based Traffic Light Controller",
      description: "Autmoated Traffic Light Controller",
      imgUrl: projImg9,
    },
    {
      title: "Vehicle-Counter-using-OpenCv",
      description: "Vehicle Counting using open-cv",
      imgUrl: projImg10,
    },
    {
      title: "Drum Kit",
      description: "Fun Musical",
      imgUrl: projImg11,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>In my career journey, I've engaged in a plethora of projects spanning diverse tech stacks. On the web development front, I've contributed to projects such as Mindpill, a quiz website, and a login/signup system. Additionally, I've delved into Android development, lending my expertise to projects like the Mindpill app, NewsFresh, and MemeShare. Furthermore, I've ventured into the realm of AI/ML, where I've worked on projects including an AI-based traffic light controller and vehicle counting utilizing OpenCV Python modules.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            webProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            androidProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            aimlProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bgimg"></img>
    </section>
  )
}