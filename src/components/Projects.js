import { Container, Tab, Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import projImg4 from "../assets/images/project-img4.png";
import projImg5 from "../assets/images/project-img5.png";
import projImg6 from "../assets/images/project-img6.png";
import projImg7 from "../assets/images/project-img7.png";
import projImg9 from "../assets/images/project-img9.png";
import projImg10 from "../assets/images/project-img10.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Cluster",
      description: "front-end development",
      imgUrl: projImg1,
      url: "https://khomas5.github.io/cluster/",
    },
    {
      title: "Analityco",
      description: "front-end development",
      imgUrl: projImg2,
      url: "https://khomas5.github.io/Analytico/",
    },
    {
      title: "iMedical",
      description: "front-end development",
      imgUrl: projImg3,
      url: "https://khomas5.github.io/iMedical/",
    },

    {
      title: "JS Games",
      description: "Javascript",
      imgUrl: projImg4,
      url: "https://khomas5.github.io/JS-games/",
    },
    {
      title: "Epic-Play",
      description: "Webflow",
      imgUrl: projImg7,
      url: "https://epic-play-8a0a06.webflow.io",
    },

    {
      title: "Omnifood",
      description: "front-end development",
      imgUrl: projImg5,
      url: "https://khomas5.github.io/omnifood-project/",
    },

    {
      title: "Nexter",
      description: "front-end development",
      imgUrl: projImg6,
      url: "https://khomas5.github.io/Nexter/",
    },
  ];

  const reactProjects=[
    {
      title: "HooBank",
      description: "Vite + React Project with TailwindCSS",
      imgUrl: projImg10,
      url: "https://bank-digital.netlify.app",
    },
    {
      title: "Travel",
      description: "React Project",
      imgUrl: projImg9,
      url: "https://khomas5.github.io/Travel/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__flipInX" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  I designed and developed a responsive portfolio website to 
                  showcase my skills, experience, and projects. The main 
                  objective was to create an intuitive and visually appealing
                   interface that highlights my abilities as a front-end 
                   developer. Tab One shows mostly projects based on plain HTML5, 
                   CSS3/SCSS, Javascript and one of them is built by in-browser 
                   design tool Webflow. Tab Two concentrate on React and its projects. 
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-4 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two | React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                <Row>
                    {reactProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                I plan to further enhance the website by integrating additional projects, optimizing for accessibility, and exploring new front-end technologies to stay current with industry trends.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};



export default Projects;
