import { useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/action";

const CommentArea = ({ post }) => {
  const myProfile = useSelector((state) => state.profile.myprofile);

  const dispatch = useDispatch();

  useEffect(() => {
    let URL_COMMENTS = `https://striveschool-api.herokuapp.com/api/comments/`;
    dispatch(getComments(URL_COMMENTS));
  }, []);

  return (
    <>
      <div className="d-flex py-1 align-items-center px-3 gap-2">
        <div>
          <img src={myProfile.image} alt="" style={{ width: "40px" }} className=" avatarProfile img-fluid rounded-circle  border border-4 border-white " />
        </div>

        <Form className="d-flex w-100 position-relative">
          <InputGroup className="">
            <Form.Control type="search" placeholder="Write a comment" className="me-2 w-100   rounded-pill inputPad" aria-label="Search" />
          </InputGroup>
          <div className="editButton2  d-flex align-items-center justify-content-center">
            <SendFill />
          </div>
        </Form>
      </div>

      {/* <div className="d-flex align-items-center ">
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
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CommentArea;
