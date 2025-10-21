import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function ExperiencesModal(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add New Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 flex-column gap-4 px-3">
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className="text-muted">Role</Form.Label>
              <Form.Control required type="text" placeholder="Your Role" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label className="text-muted">Company</Form.Label>
              <Form.Control required type="text" placeholder="Your Company" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <div className="d-flex gap-5">
              <Form.Group md="6" controlId="validationCustom03">
                <Form.Label className="text-muted">Start Date</Form.Label>
                <Form.Control type="date" placeholder="AAAA/MM/GG" required />
                <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationCustom04">
                <Form.Label className="text-muted">End Date</Form.Label>
                <Form.Control type="date" placeholder="AAAA/MM/GG" required />
                <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
              </Form.Group>
            </div>
            <Form.Group md="3" controlId="validationCustom05">
              <Form.Label className="text-muted">Description</Form.Label>
              <Form.Control style={{ height: "100px" }} as="textarea" type="text" placeholder="Your Description" required />
            </Form.Group>
            <Form.Group className="position-relative mb-3">
              <Form.Label>File</Form.Label>
              <Form.Control type="file" required name="file" />
              <Form.Control.Feedback type="invalid" tooltip></Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
            </Form.Group>
          </Row>
          <Modal.Footer>
            <Button type="submit" className="buttonFill mt-3  px-3 rounded-pill text-bold" size="sm">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ExperiencesModal;
