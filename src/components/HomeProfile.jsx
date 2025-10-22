import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bannerPlace from "../assets/banner_profile.png";

import badgeCheck from "../assets/icons/shieldcheck.svg";
import { Badge } from "react-bootstrap";
import { Pencil, CameraFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function HomeProfile() {
    const currentProfile = useSelector((state) => state.profile.currentprofile);

    // console.log(currentProfile);

    return (
        <>
            {currentProfile && (
                <Card className="mt-2 position-relative">
                    <Card.Img variant="top" src={bannerPlace} style={{ height: "60px", objectFit: "cover" }} />
                    <img
                        src={currentProfile.image}
                        alt=""
                        className="position-absolute avatarProfile2 img-fluid rounded-circle border border-4 border-white"
                        style={{ width: "80px" }}
                    />

                    <Card.Body className="mt-4 p-4 position-relative">

                        <div className="d-flex">
                            <Card.Title className="fs-5">{`${currentProfile.name}  ${currentProfile.surname}`}</Card.Title>

                        </div>
                        <Card.Text className="fs-5 m-0">{currentProfile.title}</Card.Text>
                        <small className="text-muted">
                            {currentProfile.area} •{" "}
                            <a href="#" style={{ textDecoration: "none" }}>
                                Contact info
                            </a>
                        </small>
                    </Card.Body>
                </Card>
            )}
        </>
    );
}

export default HomeProfile;
