import Card from "react-bootstrap/Card";
import { EyeFill, PeopleFill, BarChartLineFill, Search, ArrowRight } from "react-bootstrap-icons";

import { Button, Row, Col } from "react-bootstrap";

function Analytics() {
  return (
    <Card className="mt-2">
      <Card.Body className="border border-bottom border-tertiary">
        <Card.Title>Analytics</Card.Title>
        <div className="d-flex align-items-center">
          <EyeFill className="text-muted" />
          <p className="text-muted m-0 ms-1">Private to you</p>
        </div>

        <Row className="mt-3">
          <Col>
            <div className="d-flex" style={{ width: "250px" }}>
              <div>
                <PeopleFill size={25} />
              </div>
              <div className="d-flex flex-column ms-2 mt-1">
                <a className="analyticsLink" href="#">
                  2 profile views
                </a>
                <small>Discover who's viewed your profile</small>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex" style={{ width: "250px" }}>
              <div>
                <BarChartLineFill size={25} />
              </div>
              <div className="d-flex flex-column ms-2 mt-1">
                <a className="analyticsLink" href="#">
                  10 post impressions
                </a>
                <small>Start a post to increase engagement</small>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex" style={{ width: "250px" }}>
              <div>
                <Search size={25} />
              </div>
              <div className="d-flex flex-column ms-2 mt-1">
                <a className="analyticsLink" href="#">
                  20 appearance in search engines
                </a>
                <small>See how many times you appear in search engines results</small>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
      <Button className="rounded-0 rounded-bottom btnCard  fw-semibold" variant="light">
        Show all analytics <ArrowRight />{" "}
      </Button>
    </Card>
  );
}

export default Analytics;
