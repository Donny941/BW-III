import Card from "react-bootstrap/Card";
import { EyeFill, Pencil } from "react-bootstrap-icons";
import suggestPlace from "../assets/suggplace.svg";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function Suggestions() {
  const currentProfile = useSelector((state) => state.profile.currentprofile);

  return (
    <>
      {currentProfile && (
        <Card className="mt-2 position-relative">
          <Card.Body>
            <Card.Title>Suggested for you</Card.Title>
            <div className="d-flex align-items-center">
              <EyeFill className="text-muted" />
              <p className="text-muted m-0 ms-1">Private to you</p>
            </div>

            <div className="border border-1 border-tertiary p-3 mt-3 rounded">
              <div className="d-flex align-items-center">
                <img src={suggestPlace} alt="" />
                <p className="m-0 ms-2 fw-semibold">{currentProfile.bio}</p>
              </div>

              {!currentProfile.bio ? (
                <div className="d-flex flex-column mt-3">
                  <small className="m-0 ms-2 d-inline">Members who include a summary receive up to 3.9 times as many profile views.</small>
                  <div>
                    <Button className="buttonOutGrey px-3 py-1 rounded-pill text-bold mt-1" size="sm">
                      Add a summary
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="editButton position-absolute top-0 right-0  mt-2 me-4 d-flex align-items-center justify-content-center">
                  <Pencil fontSize={20} />
                </div>
              )}
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Suggestions;
