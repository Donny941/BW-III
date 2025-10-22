import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bannerPlace from "../assets/banner_profile.png";

import badgeCheck from "../assets/icons/shieldcheck.svg";
import { Badge, CardBody, Col, Row } from "react-bootstrap";
import { Pencil, CameraFill, PlayBtnFill, Image, BlockquoteLeft } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function NewPost() {
    const currentProfile = useSelector((state) => state.profile.currentprofile);

    // console.log(currentProfile);

    return (
        <>
            {currentProfile && (
                <Card className="mt-2 position-relative">
                    <CardBody>
                        <Row className="align-items-center gx-0">
                            <div className="d-flex py-1 align-items-center">
                                <div>
                                    <img
                                        src={currentProfile.image}
                                        alt=""
                                        style={{ width: "70px" }}
                                        className=" avatarProfile img-fluid rounded-circle mt-1 border border-4 border-white"
                                    />
                                </div>


                                <Button className="buttonOutGrey px-3 rounded-pill fw-medium w-100 align-items-center text-start text-dark" style={{ height: "50px" }}>
                                    Start a post
                                </Button>
                            </div>
                        </Row>
                        <Row className="justify-content-between px-1">
                            <Col xs={3}>
                                <Button size="sm"> <PlayBtnFill /> Video</Button>
                            </Col>
                            <Col xs={3}>
                                <Button size="sm"> <Image /> Photo</Button>
                            </Col>
                            <Col xs={5}>
                                <Button size="sm"> <BlockquoteLeft /> Write article</Button>
                            </Col>
                        </Row>

                    </CardBody>
                </Card >
            )
            }
        </>
    );
}

export default NewPost;
