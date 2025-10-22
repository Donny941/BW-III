import Card from "react-bootstrap/Card";
import { EyeFill, PeopleFill, BarChartLineFill, Search, ArrowRight, Pencil, BookmarkFill, Newspaper, CalendarEvent } from "react-bootstrap-icons";

import { Button, Row, Col } from "react-bootstrap";

function Items() {
  return (
    <Card className="mt-2 ">
      <Card.Body className="border border-bottom border-tertiary">
        <div className="d-felx">
          <div className="d-flex align-items-center mb-2">
            <BookmarkFill size={15} />
            <div className="d-flex flex-column ms-2 mb-1">
              <a className="itemLink fw-semibold mb-0" href="">
                <small className="fw-bold">Saved items</small>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center mb-2">
            <PeopleFill size={15} />
            <div className="d-flex flex-column ms-2 mb-1">
              <a className="itemLink fw-semibold mb-0" href="">
                <small className="fw-bold">Groups</small>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center mb-2">
            <Newspaper size={15} />
            <div className="d-flex flex-column ms-2 mb-1">
              <a className="itemLink fw-semibold mb-0" href="">
                <small className="fw-bold">Newsletters</small>
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center mb-2">
            <CalendarEvent size={15} />
            <div className="d-flex flex-column ms-2 mb-1">
              <a className="itemLink fw-semibold mb-0" href="">
                <small className="fw-bold">Events</small>
              </a>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Items;
