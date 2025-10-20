import Card from "react-bootstrap/Card";
import { EyeFill, PersonFillAdd, BarChartLineFill, Search, ArrowRight, Pencil, PlusLg } from "react-bootstrap-icons";
import userPlace from "../assets/user.png";
import { Button, Row, Col } from "react-bootstrap";

function KnowPeople() {
  return (
    <Card className="mt-2 mb-5">
      <Card.Body className="border border-bottom border-tertiary">
        <div className="d-flex justify-content-between align-items-top">
          <Card.Title className="mb-3">People you may know</Card.Title>
        </div>
        <div className="d-flex align-items-top ">
          <div>
            <img src={userPlace} alt="" className="img-fluid rounded-circle " style={{ width: "48px" }} />
          </div>
          <div className="ms-2">
            <p className="m-0 fs-5 fw-semibold">Alan Donati</p>
            <p className="m-0">Epicode srl</p>
            <Button className="buttonOutGrey mt-2 px-3 fs-6 rounded-pill text-bold" size="sm">
              <PersonFillAdd size={20} /> <p className="m-0 d-inline-block align-middle">Connect</p>
            </Button>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-top ">
          <div>
            <img src={userPlace} alt="" className="img-fluid rounded-circle " style={{ width: "48px" }} />
          </div>
          <div className="ms-2">
            <p className="m-0 fs-5 fw-semibold">Alan Donati</p>
            <p className="m-0">Epicode srl</p>
            <Button className="buttonOutGrey mt-2 px-3 fs-6 rounded-pill text-bold" size="sm">
              <PersonFillAdd size={20} /> <p className="m-0 d-inline-block align-middle">Connect</p>
            </Button>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-top ">
          <div>
            <img src={userPlace} alt="" className="img-fluid rounded-circle " style={{ width: "48px" }} />
          </div>
          <div className="ms-2">
            <p className="m-0 fs-5 fw-semibold">Alan Donati</p>
            <p className="m-0">Epicode srl</p>
            <Button className="buttonOutGrey mt-2 px-3 fs-6 rounded-pill text-bold" size="sm">
              <PersonFillAdd size={20} /> <p className="m-0 d-inline-block align-middle">Connect</p>
            </Button>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-top ">
          <div>
            <img src={userPlace} alt="" className="img-fluid rounded-circle " style={{ width: "48px" }} />
          </div>
          <div className="ms-2">
            <p className="m-0 fs-5 fw-semibold">Alan Donati</p>
            <p className="m-0">Epicode srl</p>
            <Button className="buttonOutGrey mt-2 px-3 fs-6 rounded-pill text-bold" size="sm">
              <PersonFillAdd size={20} /> <p className="m-0 d-inline-block align-middle">Connect</p>
            </Button>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-top ">
          <div>
            <img src={userPlace} alt="" className="img-fluid rounded-circle " style={{ width: "48px" }} />
          </div>
          <div className="ms-2">
            <p className="m-0 fs-5 fw-semibold">Alan Donati</p>
            <p className="m-0">Epicode srl</p>
            <Button className="buttonOutGrey mt-2 px-3 fs-6 rounded-pill text-bold" size="sm">
              <PersonFillAdd size={20} /> <p className="m-0 d-inline-block align-middle">Connect</p>
            </Button>
          </div>
        </div>
      </Card.Body>
      <Button className="rounded-0 rounded-bottom btnCard fw-semibold" variant="light">
        Show all
      </Button>
    </Card>
  );
}

export default KnowPeople;
