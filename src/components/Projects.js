import { Container, Tab, Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Cluster",
      description: "front-end development",
      imgUrl: projImg1,
    },
    {
      title: "Cluster",
      description: "front-end development",
      imgUrl: projImg2,
    },

    {
      title: "Cluster",
      description: "front-end development",
      imgUrl: projImg3,
    },

    {
      title: "Cluster",
      description: "front-end development",
      imgUrl: projImg1,
    },

    {
      title: "Cluster",
      description: "front-end development",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__flipInX" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis magna sed sapien sagittis volutpat et id sem.
                    Donec rhoncus orci sit amet pharetra faucibus. Proin id
                    tellus quis risus tempus venenatis a ac neque. In bibendum
                    urna at tortor bibendum, vitae interdum lectus tempor. Sed
                    ante purus, mattis at leo a, malesuada luctus neque. Integer
                    gravida consectetur neque, eu tristique velit pretium a.
                    Aliquam mollis congue ex vel iaculis. Sed consequat
                    facilisis mattis. Sed justo tortor, placerat et feugiat
                    finibus, auctor vel orci. Curabitur tempus augue at dapibus
                    blandit. Nullam gravida tincidunt ullamcorper. Praesent
                    scelerisque tempor tortor ut fermentum.
                  </p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
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

                <Tab.Pane eventKey="second">lorem</Tab.Pane>

                <Tab.Pane eventKey="third">lorem</Tab.Pane>
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
