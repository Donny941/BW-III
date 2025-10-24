import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ThreeDots, XLg, Plus, GlobeAmericasFill, HandThumbsUp, ChatText, ArrowDownUp, SendFill, Pencil, Trash2Fill } from "react-bootstrap-icons";

import like from "../assets/icons/emote/like.png";
import love from "../assets/icons/emote/love.png";
import insightful from "../assets/icons/emote/insightful.png";

import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import PostModal from "./PostModal";
import DeleteModal from "./DeleteModal";

function Post({ post }) {
  const currentProfile = useSelector((state) => state.profile.currentprofile);
  const myProfile = useSelector((state) => state.profile.myprofile);
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <Card className="mb-2">
      {myProfile._id !== post.user._id && (
        <>
          <div className="d-flex justify-content-between align-items-center py-2  px-3">
            <small className="text-muted"> Suggested</small>
            <div className="d-flex gap-4">
              <ThreeDots />
              <XLg />
            </div>
          </div>

          <div className="   px-3">
            <hr className="m-0" />
          </div>
        </>
      )}
      <Card.Body className="p-0">
        <div className="d-flex justify-content-between p-3">
          {currentProfile && (
            <div className="d-flex align-items-center ">
              <div>
                <img
                  src={`${post.user.image}`}
                  alt="postimage"
                  className="img-fluid rounded-circle "
                  style={{ width: "50px", height: "50px,", objectFit: "cover" }}
                />
              </div>
              <div className="ms-2 d-flex flex-column ">
                <p className="m-0 fs-6 fw-semibold lh-sm">{`${post.user.name} ${post.user.surname}`}</p>
                <small className="m-0 offset-5 lh-sm"> {`${post.user.title}`}</small>
                <div className="lh-sm">
                  <small className="m-0 lh-sm ">{post.createdAt} • </small>
                  <GlobeAmericasFill className="text-muted " size={15} />
                </div>
              </div>
              <div>
                <PostModal show={modalShow} actualPost={post} setModalShow={setModalShow} />
                <DeleteModal show={show} actualPost={post} setShow={setShow} />
                {myProfile._id == post.user._id && (
                  <>
                    <div
                      onClick={() => setModalShow(true)}
                      className="editButton2 position-absolute mt-3 me-3  d-flex align-items-center justify-content-center"
                    >
                      <Pencil fontSize={20} />
                    </div>
                    <div onClick={() => setShow(true)} className="position-absolute mt-3 me-5 editButton2   d-flex align-items-center justify-content-center">
                      <Trash2Fill className="text-muted" fontSize={20} />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          {myProfile._id !== post.user._id && (
            <div>
              <Button className="buttonPost2 myBlue ">
                <Plus size={25} /> <span className="align-bottom">Follow</span>
              </Button>
            </div>
          )}
        </div>

        <div className=" px-3">
          <p>{post.text} </p>
        </div>
        {post.image && <img src={post.image} style={{ width: "100%", height: "400px", objectFit: "cover" }} alt="" className="img-fluid" />}
        <div className="d-flex justify-content-between align-items-center py-2 ps-2 px-3">
          <div className="position-relative d-flex align-items-center">
            <img src={like} alt="emote" style={{ width: "15px" }} className=" position-absolute " />
            <img src={insightful} alt="emote" style={{ width: "15px" }} className="position-absolute ms-2" />
            <img src={love} alt="emote" style={{ width: "15px" }} className="position-absolute ms-3" />
            <small className="text-muted " style={{ marginLeft: "35px" }}>
              {" "}
              500
            </small>
          </div>
          <div className="d-flex gap-4">
            <small className="m-0 lh-sm text-muted">100 commenti • 192 diffusioni post </small>
          </div>
        </div>

        <div className="   px-3">
          <hr className="m-0" />
        </div>
      </Card.Body>
      <Row xs={4} className="justify-content-center px-2">
        <Col className="d-flex justify-content-center">
          <Button className="buttonPost  fw-semibold" size="sm">
            {" "}
            <HandThumbsUp /> <span className="align-middle">Like</span>
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button className="buttonPost  fw-semibold " size="sm">
            {" "}
            <ChatText /> <span className="align-middle">Comment</span>
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button className="buttonPost fw-semibold" size="sm">
            {" "}
            <ArrowDownUp /> <span className="align-middle">Report</span>
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button className="buttonPost fw-semibold " size="sm">
            {" "}
            <SendFill /> <span className="align-middle">Send</span>
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default Post;
