import Card from "react-bootstrap/Card";
import { QuestionCircleFill, GearFill, ShieldShaded } from "react-bootstrap-icons";

import { Button, Row, Col, Form } from "react-bootstrap";
import logo2 from "../assets/logo2.svg";

function Footer({ display }) {
  return (
    <Row className="px-5 mb-3">
      {display ? (
        <>
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
        </>
      ) : (
        <Col className="p-2 text-center">
          <a className="footerLink me-4">About</a>
          <a className="footerLink me-4">Accessibility</a>
          <a className="footerLink me-4">Help Center</a>
          <a className="footerLink me-4">Privacy & Terms</a>
          <a className="footerLink me-4">Ad Choices</a>
          <a className="footerLink me-4">Advertising</a>
          <a className="footerLink me-4">Business Services</a>
          <a className="footerLink me-4">Get the LinkedIn app</a>
          <a className="footerLink me-4">More</a>
        </Col>
      )}
      <div className="d-flex p-0">
        <img src={logo2} alt="logo2" className="me-2" style={{ width: "70px" }} />
        <small style={{ fontSize: "12px" }} className="text-muted">
          LinkedIn Corporation © 2025
        </small>
      </div>
    </Row>
  );
}

export default Footer;
