import React from "react";
import { Col, Row } from "react-bootstrap";
import { animated } from "react-spring";
import { useSlidingAnimation } from "../hooks/useAnimations";
import AppTitle from "../components/elements/AppTitle";
import ContactUsForm from "../components/common/ContactForm";
function ContactUs() {
  return (
    <div className="m-lg-4 m-md-3 m-sm-2">
      <AppTitle title="Get In Touch"></AppTitle>
      <p>
        Your opinions matter. Use the contact details below to get in touch with
        us.
      </p>
      <Row>
        <Col sm={12} md={6}>
          <ContactUsForm />
        </Col>
        <Col sm={12} md={6}>
          <animated.div
            style={useSlidingAnimation({
              direction: "right-to-left",
              delay: 300,
            })}
          >
            <div className="my-card">
              <ul>
                <li>You can reach us at: 123-456-7890</li>
                <li>We are located at: 123 Main St, Anytown USA</li>
                <li>We are located at: 123 Main St, Anytown USA</li>
                <li>You can reach us at: 123-456-7890</li>
              </ul>
            </div>
          </animated.div>
          <animated.div
            style={useSlidingAnimation({
              direction: "right-to-left",
              delay: 600,
            })}
          >
            <div className="my-card mt-3">
              <ul>
                <li>Email: kritikpal123@gmail.com</li>
                <li>Telegram: @KritikPal</li>
                <li>Skype: Kritik Pal</li>
              </ul>
            </div>
          </animated.div>
          <animated.div
            style={useSlidingAnimation({
              direction: "right-to-left",
              delay: 900,
            })}
          >
            <div className="my-card mt-3">
              <ul>
                <li>Country: Canada</li>
                <li>City: Toronto</li>
                <li>Streat: 20 Dellbank Rd</li>
              </ul>
            </div>
          </animated.div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
