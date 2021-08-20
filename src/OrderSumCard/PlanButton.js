import React from "react";
import { Row, Col, Button } from "reactstrap";
import MusicIcon from "../assets/images/icon-music.svg";

function PlanButton() {
  return (
    <Row>
      <Col>
        <button
          className="plan-button"
          style={{
            width: "100%",
          }}
        >
          <Row>
            <Col md="3" className="ver-hor-center">
              <img
                src={MusicIcon}
                alt="Hero-illustration"
                style={{
                  height: "auto",
                  width: "60%",
                }}
              />
            </Col>
            <Col md="6" className="ver-hor-center">
              <Row>
                <Col className="annual-plan ver-hor-center">Annual Plan</Col>
              </Row>
              <Row>
                <Col className="dollar-per-year ver-hor-center">
                  $59.99/year
                </Col>
              </Row>
            </Col>
            <Col md="3" className="ver-hor-center change-btn">Change</Col>
          </Row>
        </button>
      </Col>
    </Row>
  );
}

export default PlanButton;
