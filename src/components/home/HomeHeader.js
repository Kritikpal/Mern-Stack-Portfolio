import { Col, Row } from "react-bootstrap";
import face2 from "../../Images/face-2.png";
import { animated } from "react-spring";
import {
  useScaleAnimation,
  useSlidingAnimation,
} from "../../hooks/useAnimations";

function HomeHeader() {
  return (
    <>
      <div className="home-header">
        <div className="home-banner"></div>
        <div className="home-banner-gradient"></div>
        <div className="carousel-content">
          <Row>
            <Col sm={12} md={8}>
              <div className="left-content mx-sm-4 my-sm-4 mx-md-5 my-md-6 ">
                <animated.div style={useSlidingAnimation({ delay: 200 })}>
                  <h1 className="carousel-header">
                    Discover my Amazing Art Space!
                  </h1>
                </animated.div>
                <animated.div style={useSlidingAnimation({ delay: 300 })}>
                  <div className="carousel-text">
                    {"<code> I am a full-stack developer.</code>"}
                  </div>
                </animated.div>

                <animated.div style={useSlidingAnimation({ delay: 400 })}>
                  <button className="explore-now-btn">Explore Now</button>
                </animated.div>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="face">
                <animated.div style={useScaleAnimation({ delay: 600 })}>
                  <img className="face-img" src="face-2.png" alt="face" />
                </animated.div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
