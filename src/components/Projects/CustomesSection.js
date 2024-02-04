import React from "react";
import { Col, Row } from "react-bootstrap";
import AppTitle from "../elements/AppTitle";

function CustomesSection() {
  return (
    <div>
      <AppTitle title={"My Customers"} />
      <p>
        As a full-stack developer, I've had the pleasure of working with diverse
        clients and building solutions tailored to their needs. Here are some of
        the fantastic brands and businesses I've collaborated with:
      </p>
      <div className="brand-container">
        <Row>
          <Col sm={12} md={4} lg={3}>
            <div className="text-center">
              <img
                className="brnd-image"
                src="https://miller.bslthemes.com/arter-demo/img/brands/1.png"
              />
            </div>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <div className="text-center">
              <img
                className="brnd-image"
                src="https://miller.bslthemes.com/arter-demo/img/brands/2.png"
              />
            </div>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <div className="text-center">
              <img
                className="brnd-image"
                src="https://miller.bslthemes.com/arter-demo/img/brands/3.png"
              />
            </div>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <div className="text-center">
              <img
                className="brnd-image"
                src="https://miller.bslthemes.com/arter-demo/img/brands/1.png"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CustomesSection;
