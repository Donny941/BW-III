import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { handlePost } from "../redux/action";

function PostModal({ show, setModalShow }) {
  const myProfile = useSelector((state) => state.profile.myprofile);

  const dispatch = useDispatch();
  const URL = "https://striveschool-api.herokuapp.com/api/posts/";
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const formValues = Object.fromEntries(formData);
    console.log("values", formValues);
    dispatch(handlePost(URL, formValues, "POST"));
  };

  return (
    <>
      <Modal show={show} size="lg" onHide={() => setModalShow(false)}>
        <Modal.Header closeButton style={{ border: "none" }}>
          {myProfile && (
            <>
              <div className="me-2">
                <img src={myProfile.image} alt="" className="avatarProfile2 img-fluid rounded-circle" style={{ width: "60px" }} />
              </div>

              <div>
                <p className="m-0 fs-5 fw-semibold lh-1">{`${myProfile.name}  ${myProfile.surname}`}</p>
                <small>Post to: Anyone</small>
              </div>
            </>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group md="3" controlId="validationCustom05">
              <Form.Control
                style={{ height: "300px", outline: "none", border: "none" }}
                as="textarea"
                type="text"
                name="text"
                // defaultValue={formData.description}
                placeholder="What do you want to talk about?"
                required
              />
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label className="text-muted">Image</Form.Label>
              <Form.Control required type="text" name="image" placeholder="http//...." />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Modal.Footer className="mt-4">
              <Button type="submit" className="buttonFill mt-3  px-3 rounded-pill text-bold" onClick={() => setModalShow(false)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostModal;
