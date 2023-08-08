import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Front-end Developer'];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Ana,`}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>{" "}
                  </h1>
                  <p className="banner-description">
                    I started studying front-end web programming at the
                    beginning of2022 when I took a 6-month course where, in
                    addition to HTML,CSS, and JS, I learned the basics of
                    Angular. In the same period, Iparticipated in the Women Tech
                    Hub project of Ilia State Universityfunded by the British
                    Council, where I received both theoreticaland practical
                    training in the direction of WEB development. I alsotook
                    Udemy courses in advanced CSS and SCSS and Javascript.From
                    October 2022, I worked as an intern at the Ascended
                    startupcompany, where I was doing real projects, trying to
                    learn more andgain experience. Right now I am taking React
                    course on Udemy.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect
                  </button>
                  {/* 
                  <a href="./assets/images/Ana-Khomasuridze.pdf" download="Ana-Khomasuridze.pdf">helooo</a>
                  <a href="./assets/images/cv.pdf" download>Download the pdf</a>
                  <a href="./assets/images/cv.pdf" download="cv">Download the pdf file</a>
                   */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
