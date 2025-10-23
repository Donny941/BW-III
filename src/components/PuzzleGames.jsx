import sudoku from "../assets/icons/sudoku.svg";
import tango from "../assets/icons/tango.svg";
import queens from "../assets/icons/queens.svg";
import zip from "../assets/icons/zip.svg";
import { Card } from "react-bootstrap";
import { ChevronCompactRight } from "react-bootstrap-icons";

function PuzzleGames() {
  return (
    <Card className="mt-2 ">
      <Card.Title className="p-2 fs-6 m-0 pt-2">Today's puzzle game</Card.Title>
      <Card.Body className="border border-0 border-tertiary p-0">
        <div className="d-felx">
          <div className="puzzle">
            <div className="d-flex align-items-center mb-2 mx-3 py-2">
              <img src={sudoku}></img>
              <div className="d-flex flex-column ms-2 mb-1">
                <small className="fw-bold m-0">Mini Sudoku</small>
                <small className="text-muted" style={{ fontSize: "12px" }}>
                  The classic game, made mini
                </small>
              </div>
              <ChevronCompactRight className="ms-auto" />
            </div>
          </div>
          <div className="puzzle">
            <div className="d-flex align-items-center mb-2  mx-3 py-2">
              <img src={zip}></img>
              <div className="d-flex flex-column ms-2 mb-1">
                <small className="fw-bold m-0">Zip</small>
                <small className="text-muted" style={{ fontSize: "12px" }}>
                  Complete the path
                </small>
              </div>
              <ChevronCompactRight className="ms-auto" />
            </div>
          </div>
          <div className="puzzle">
            <div className="d-flex align-items-center mb-2  mx-3 py-2">
              <img src={tango}></img>
              <div className="d-flex flex-column ms-2 mb-1">
                <small className="fw-bold m-0">Tango</small>
                <small className="text-muted" style={{ fontSize: "12px" }}>
                  Harmonize the grid
                </small>
              </div>
              <ChevronCompactRight className="ms-auto" />
            </div>
          </div>
          <div className="puzzle">
            <div className="d-flex align-items-center mb-2 mx-3 py-2">
              <img src={queens}></img>
              <div className="d-flex flex-column ms-2 mb-1">
                <small className="fw-bold m-0">Queens</small>
                <small className="text-muted" style={{ fontSize: "12px" }}>
                  Crown each region
                </small>
              </div>
              <ChevronCompactRight className="ms-auto" />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PuzzleGames;
