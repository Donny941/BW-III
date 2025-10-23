import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import article from "../assets/icons/article.svg";
import image from "../assets/icons/image.svg";
import play from "../assets/icons/play.svg";

import { Badge, CardBody, Col, Row } from "react-bootstrap";
import { Pencil, CameraFill, PlayBtnFill, Image, BlockquoteLeft } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import PostModal from "./PostModal";

function NewPost() {
  const currentProfile = useSelector((state) => state.profile.currentprofile);

  // console.log(currentProfile);

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {currentProfile && (
        <Card className="mt-2 position-relative">
          <CardBody>
            <Row className="align-items-center gx-0">
              <div className="d-flex py-1 align-items-center gap-2">
                <div>
                  <img
                    src={currentProfile.image}
                    alt=""
                    style={{ width: "70px" }}
                    className=" avatarProfile img-fluid rounded-circle  border border-4 border-white "
                  />
                </div>

                <PostModal show={modalShow} setModalShow={setModalShow} />


                <Button className="buttonOutGrey px-3 rounded-pill fw-medium w-100 align-items-center text-start text-dark" style={{ height: "50px" }} onClick={() => setModalShow(true)}>
                  Start a post
                </Button>
              </div>
            </Row>
            <Row xs={3} className="justify-content-between px-3">
              <Col>
                <Button className="buttonPost" size="sm">
                  {" "}
                  <img className="me-2" src={play} alt="icon" /> Video
                </Button>
              </Col>
              <Col>
                <Button className="buttonPost" size="sm">
                  {" "}
                  <img className="me-2" src={image} alt="icon" /> Photo
                </Button>
              </Col>
              <Col>
                <Button className="buttonPost" size="sm">
                  {" "}
                  <img className="me-2" src={article} alt="icon" /> Write article
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}
    </>
  );
}

export default NewPost;
