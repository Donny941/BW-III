import Card from "react-bootstrap/Card";
import { EyeFill, PeopleFill, BarChartLineFill, Search, ArrowRight, Pencil } from "react-bootstrap-icons";

import { Button, Row, Col } from "react-bootstrap";

function Activities() {
  return (
    <Card className="mt-2 ">
      <Card.Body className="border border-bottom border-tertiary">
        <div className="d-flex justify-content-between align-items-top">
          <div>
            {" "}
            <Card.Title>Activity</Card.Title>
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              1 followers
            </a>
          </div>
          <div className="d-flex gap-2 align-items-top position-relative">
            <div>
              <Button className="buttonOut me-5 px-3 rounded-pill text-bold" size="sm">
                Create a post
              </Button>
            </div>
            <div className="editButton2 position-absolute   d-flex align-items-center justify-content-center">
              <Pencil fontSize={20} />
            </div>
          </div>
        </div>
      </Card.Body>
      <Button className="rounded-0 rounded-bottom btnCard  fw-semibold" variant="light">
        Show all activity <ArrowRight />{" "}
      </Button>
    </Card>
  );
}

export default Activities;
