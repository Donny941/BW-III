import Card from "react-bootstrap/Card";
import { EyeFill, PeopleFill, BarChartLineFill, Search, ArrowRight, Pencil, PlusLg } from "react-bootstrap-icons";
import suggestPlace from "../assets/suggplace.svg";
import { Button, Row, Col } from "react-bootstrap";

function Experiences() {
  return (
    <Card className="mt-2 mb-5">
      <Card.Body className="border border-bottom border-tertiary">
        <div className="d-flex justify-content-between align-items-top">
          <div>
            {" "}
            <Card.Title>Experience</Card.Title>
          </div>
          <div className="d-flex gap-2 align-items-top position-relative">
            <div className="plusBtn position-absolute   d-flex align-items-center justify-content-center">
              <PlusLg fontSize={25} />
            </div>
            <div className="editButton2 position-absolute   d-flex align-items-center justify-content-center">
              <Pencil fontSize={20} />
            </div>
          </div>
        </div>
        <div className="d-flex ">
          <div>
            <img src={suggestPlace} alt="" />
          </div>
          <div className="ms-2">
            <p className="m-0 fw-semibold">Web Developer</p>
            <p className="m-0">Epicode srl</p>
            <small className="text-muted">jan 2020 - feb 2025 • 5 yrs</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Experiences;
