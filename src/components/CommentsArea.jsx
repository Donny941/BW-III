import { useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { SendFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getComments, postComment } from "../redux/action";
import avatarPlace from "../assets/user.png";

const CommentArea = ({ post }) => {
  const myProfile = useSelector((state) => state.profile.myprofile);
  const commentPost = useSelector((state) => state.comments.comments);

  const dispatch = useDispatch();

  const postComments = commentPost ? commentPost.filter((commento) => post._id === commento.elementId) : [];

  console.log(postComments);

  useEffect(() => {
    let URL_COMMENTS = `https://striveschool-api.herokuapp.com/api/comments/`;
    dispatch(getComments(URL_COMMENTS));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("elementId", post._id);
    formData.append("rate", "1");

    const formValues = Object.fromEntries(formData);
    console.log("values", formValues);

    const URL = "https://striveschool-api.herokuapp.com/api/comments/";
    dispatch(postComment(URL, formValues));

    event.target.reset();
  };

  return (
    <>
      <div className="d-flex py-1 align-items-center px-3 gap-2 mt-3">
        <div>
          <img src={myProfile.image} alt="" style={{ width: "40px" }} className=" avatarProfile img-fluid rounded-circle  border border-4 border-white " />
        </div>

        <Form onSubmit={handleSubmit} className="d-flex w-100 position-relative">
          <InputGroup className="">
            <Form.Control type="search" name="comment" placeholder="Write a comment" className="me-2 w-100   rounded-pill inputPad" aria-label="Search" />
          </InputGroup>
          <Button type="submit" className="editButton2  d-flex align-items-center justify-content-center">
            <SendFill />
          </Button>
        </Form>
      </div>
      <hr />
      <div className="d-flex flex-column px-4">
        {postComments.map((comment) => (
          <div key={comment._id}>
            <div className="d-flex">
              <img src={avatarPlace} alt="avatar" style={{ width: "30px" }} />
              <h6 className="ms-2">{comment.author}</h6>
              <small className="ms-auto">{comment.createdAt.split("T")[0]}</small>
            </div>
            <p className="ms-5">{comment.comment}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentArea;
