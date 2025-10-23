import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bannerPlace from "../assets/banner_profile.png";

import { Badge } from "react-bootstrap";
import { Pencil, CameraFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function HomeProfile() {
  const myProfile = useSelector((state) => state.profile.myprofile);

  console.log(myProfile);

  return (
    <>
      {myProfile && (
        <Card className="mt-2 position-relative">
          <Card.Img variant="top" src={bannerPlace} style={{ height: "60px", objectFit: "cover" }} />
          <img
            src={myProfile.image}
            alt=""
            className="position-absolute avatarProfile2 img-fluid rounded-circle border border-4 border-white"
            style={{ width: "80px" }}
          />

          <Card.Body className="mt-5 p-1 px-4 position-relative">
            <div className="d-flex">
              <Card.Title className="fs-5 m-0">{`${myProfile.name}  ${myProfile.surname}`}</Card.Title>
            </div>

            <p className="m-0">
              <small> {myProfile.title}</small>
            </p>

            <small className="text-muted m-0">{myProfile.area} </small>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default HomeProfile;
