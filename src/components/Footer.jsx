import Card from "react-bootstrap/Card";
import { QuestionCircleFill, GearFill, ShieldShaded } from "react-bootstrap-icons";

import { Button, Row, Col, Form } from "react-bootstrap";

function Footer() {
  return (
    <Row className="px-5 mb-3">
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
          <QuestionCircleFill size={25} />
          <div className="d-flex flex-column ms-2 mb-1">
            <a className="footerLink fw-semibold mb-0" href="">
              Talent Solutions
            </a>
            <small className="text-muted">Visit our Help Center.</small>
          </div>
        </div>
        <div className="d-flex">
          <GearFill size={25} />
          <div className="d-flex flex-column ms-2 mb-1">
            <a className="footerLink fw-semibold mb-0" href="">
              Talent Solutions
            </a>
            <small className="text-muted">Go to your Settings.</small>
          </div>
        </div>
        <div className="d-flex">
          <ShieldShaded size={35} />
          <div className="d-flex flex-column ms-2 mb-1">
            <a className="footerLink fw-semibold mb-0" href="">
              Talent Solutions
            </a>
            <small className="text-muted">Learn more about Recommended Content.</small>
          </div>
        </div>
      </Col>
      <Col className="d-flex flex-column">
        <Form.Label className="text-muted">Select Language</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>English</option>
          <option value="1">English</option>
          <option value="2">Japanese</option>
          <option value="3">Chinese</option>
        </Form.Select>
      </Col>
      <small className="text-muted">LinkedIn Corporation © 2025</small>
    </Row>
  );
}

export default Footer;
