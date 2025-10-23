import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bannerPlace from "../assets/banner_profile.png";

import badgeCheck from "../assets/icons/shieldcheck.svg";
import { Badge } from "react-bootstrap";
import { Pencil, CameraFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function MainProfile({ isMyProfile }) {
  const currentProfile = useSelector((state) => state.profile.currentprofile);

  // console.log(currentProfile);

  return (
    <>
      {currentProfile && (
        <Card className="mt-2 position-relative">
          <Card.Img variant="top" src={bannerPlace} style={{ height: "200px", objectFit: "cover" }} />
          <img
            src={currentProfile.image}
            alt=""
            className="position-absolute avatarProfile img-fluid rounded-circle mt-1 border border-4 border-white"
            style={{ width: "150px" }}
          />
          {isMyProfile && (
            <div className="position-absolute end-0 me-4 mt-3 circleButton d-flex align-items-center justify-content-center">
              <CameraFill fontSize={20} />
            </div>
          )}

          <Card.Body className="mt-5 p-4 position-relative">
            {isMyProfile && (
              <div className="position-absolute me-4 mt-3 editButton d-flex align-items-center justify-content-center">
                <Pencil fontSize={20} />
              </div>
            )}
            <div className="d-flex">
              <Card.Title className="fs-3">{`${currentProfile.name}  ${currentProfile.surname}`}</Card.Title>
              <div>
                <Badge pill bg="light" text="primary" className="mt-1 py-1 ms-2 badgeProfile fs-6">
                  <div className="d-flex align-items-center ">
                    <img src={badgeCheck} alt="badge" className="badgeCheck" />
                    <p className="m-0 ms-2 fw-semibold">Add verification badge</p>
                  </div>
                </Badge>
              </div>
            </div>
            <Card.Text className="fs-5 m-0">{currentProfile.title}</Card.Text>
            <small className="text-muted">
              {currentProfile.area} •{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Contact info
              </a>
            </small>
            <div className="mt-3 d-flex gap-2">
              <Button className="buttonFill  px-3 rounded-pill text-bold" size="sm">
                Open to
              </Button>
              <Button className="buttonOut  px-3 rounded-pill text-bold" size="sm">
                Add profile section
              </Button>
              <Button className="buttonOut  px-3 rounded-pill text-bold" size="sm">
                Enhance profile
              </Button>
              <Button className="buttonOutGrey px-3 rounded-pill text-bold" size="sm">
                Resources
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default MainProfile;
