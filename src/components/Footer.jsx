import Card from "react-bootstrap/Card";
import { QuestionCircleFill, GearFill, ShieldShaded } from "react-bootstrap-icons";

import { Button, Row, Col, Form } from "react-bootstrap";

function Footer() {
  return (
    <Row>
      <Col className="d-flex flex-column">
        <a className="footerLink " href="">
          About
        </a>
        <a className="footerLink " href="">
          Professional Community Polices
        </a>
        <a className="footerLink " href="">
          Privacy&Terms
        </a>
        <a className="footerLink " href="">
          Sales Solutions
        </a>
        <a className="footerLink " href="">
          Safety center
        </a>
      </Col>
      <Col className="d-flex flex-column">
        {" "}
        <a className="footerLink " href="">
          Accessibility
        </a>
        <a className="footerLink " href="">
          Careers
        </a>
        <a className="footerLink " href="">
          Add Choices
        </a>
        <a className="footerLink " href="">
          Mobile
        </a>
      </Col>
      <Col className="d-flex flex-column">
        <a className="footerLink " href="">
          Talent Solutions
        </a>
        <a className="footerLink " href="">
          Marcketing Solutions
        </a>
        <a className="footerLink " href="">
          Advertising
        </a>
        <a className="footerLink " href="">
          Small Business
        </a>
      </Col>
      <Col className="d-flex flex-column">
        <div className="d-flex">
          <QuestionCircleFill />{" "}
          <div>
            <a className="footerLink " href="">
              Talent Solutions
            </a>
            <small className="text-muted">bimsdadad</small>
          </div>
        </div>
        <div className="d-flex">
          <GearFill />
          <div>
            <a className="footerLink -block" href="">
              Talent Solutions
            </a>
            <small className="text-muted">bimsdadad</small>
          </div>
        </div>
        <div className="d-flex">
          <ShieldShaded />
          <div>
            <a className="footerLink " href="">
              Talent Solutions
            </a>
            <small className="text-muted">bimsdadad</small>
          </div>
        </div>
      </Col>
      <Col className="d-flex flex-column">
        <Form.Select aria-label="Default select example">
          <option>Select Language</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Col>
      <p className="text-muted">LinkedIn Corporation © 2025</p>
    </Row>
  );
}

export default Footer;
