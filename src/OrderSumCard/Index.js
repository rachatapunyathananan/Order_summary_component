import React from "react";
import { Row, Col, Button, Container } from "reactstrap";

import "./orderSumCard.scss";
import PlanButton from "./PlanButton";
import HeroPic from "../assets/images/illustration-hero.svg";

function Index() {
  return (
    <div className="order-sum-card">
      <img
        src={HeroPic}
        alt="Hero-illustration"
        style={{
          height: "auto",
          width: "100%",
        }}
      />
      <Container>
        <Row>
          <Col>
            <Row
              style={{
                margin: "1rem",
              }}
            >
              <Col className="order-sum-header">Order Summary</Col>
            </Row>
            <Row
              style={{
                marginLeft: "2rem",
                marginRight: "2rem",
              }}
            >
              <Col className="order-short-quote">
                You can now listen to millions of songs. audiobooks, and
                podcasts on any device anywhere you like
              </Col>
            </Row>
            <Row
              style={{
                margin: "1rem",
              }}
            >
              <Col>
                <PlanButton />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button>Proceed</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button>Cancel</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
