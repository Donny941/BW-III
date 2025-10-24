import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteExperiences, getExperiences } from "../redux/action";

function DeleteModal({ show, setShow, experience, actualPost }) {
  const handleClose = () => setShow(false);
  const userId = useSelector((state) => state.profile.currentprofile);
  const dispatch = useDispatch();
  const handleDeleteExperience = (id) => {
    const URL_DELETE = ` https://striveschool-api.herokuapp.com/api/profile/${userId._id}/experiences/${id} `;
    dispatch(deleteExperiences(URL_DELETE));
    handleClose();
    setTimeout(() => {
      const URL_GET = `https://striveschool-api.herokuapp.com/api/profile/${userId._id}/experiences`;
      dispatch(getExperiences(URL_GET));
    }, 1000);
  };
  const handleDeletePost = () => {
    const URL_DELETE = ` https://striveschool-api.herokuapp.com/api/posts/${actualPost._id} `;
    dispatch(deleteExperiences(URL_DELETE));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title> Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure do you want to delete this {experience ? `experience` : `post`} ? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={() => (experience ? handleDeleteExperience(experience._id) : handleDeletePost())}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
