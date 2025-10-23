import { Fragment, useState } from "react";
import { Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function PostModal({ show, setModalShow }) {

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const myProfile = useSelector((state) => state.profile.myprofile);

  return (
    <>


      <Modal show={show} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          {myProfile && (


            <>
              <div className="me-2">
                <img
                  src={myProfile.image}
                  alt=""
                  className="avatarProfile2 img-fluid rounded-circle"
                  style={{ width: "60px" }}
                />
              </div>


              <div>
                <p className="m-0 fs-5 fw-semibold lh-1">{`${myProfile.name}  ${myProfile.surname}`}</p>
                <small>Post to: Anyone</small>
              </div>
            </>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form noValidate>
            <Form.Group md="3" controlId="validationCustom05">
              <Form.Control
                style={{ height: "200px" }}
                as="textarea"
                type="text"
                name="description"
                // defaultValue={formData.description}
                placeholder="What do you want to talk about?"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setModalShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostModal;
