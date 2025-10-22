import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import { handleExperiences } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function ExperiencesModal({ show, experience, onHide, setModalShow }) {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    area: "",
    company: "",
    description: "",
    endDate: "",
    image: "",
    role: "",
    startDate: "",
  });
  // const id = "68f738789c08b100153513bc";
  const userId = useSelector((state) => state.profile.currentprofile);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    const formData = new FormData(event.target);

    const formValues = Object.fromEntries(formData);
    console.log(formValues);
    if (experience) {
      const URL_PUT = `https://striveschool-api.herokuapp.com/api/profile/${userId._id}/experiences/${experience._id}`;
      dispatch(handleExperiences(URL_PUT, formValues, "PUT"));
      // console.log("Ho fatto la put");
    } else {
      const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId._id}/experiences`;
      dispatch(handleExperiences(URL, formValues, "POST"));
      // console.log("Ho fatto la post");
    }

    setFormData({
      area: "",
      company: "",
      description: "",
      endDate: "",
      image: "",
      role: "",
      startDate: "",
    });
  };

  useEffect(() => {
    if (!show) return;

    if (experience) {
      const ISOendDate = experience.endDate;
      console.log(ISOendDate);
      const endDate = ISOendDate.split("T")[0];
      const ISOstartDate = experience.startDate;
      console.log(ISOstartDate);
      const startDate = ISOstartDate.split("T")[0];

      setFormData({
        area: experience.area,
        company: experience.company,
        description: experience.description,
        endDate: endDate,
        image: experience.image,
        role: experience.role,
        startDate: startDate,
      });
    } else {
      setFormData({ area: "", company: "", description: "", endDate: "", image: "", role: "", startDate: "" });
    }
  }, [experience]);

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{!experience ? "Add New Experience" : "Edit Experiece"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 flex-column gap-4 px-3">
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label className="text-muted">Role</Form.Label>
              <Form.Control required type="text" name="role" defaultValue={formData.role} placeholder="Your Role" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label className="text-muted">Company</Form.Label>
              <Form.Control required type="text" name="company" defaultValue={formData.company} placeholder="Your Company" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label className="text-muted">Area</Form.Label>
              <Form.Control required type="text" name="area" defaultValue={formData.area} placeholder="City" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <div className="d-flex gap-5">
              <Form.Group md="6" controlId="validationCustom03">
                <Form.Label className="text-muted">Start Date</Form.Label>
                <Form.Control type="date" name="startDate" defaultValue={formData.startDate} placeholder="AAAA/MM/GG" required />
                <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationCustom04">
                <Form.Label className="text-muted">End Date</Form.Label>
                <Form.Control type="date" name="endDate" defaultValue={formData.endDate} placeholder="AAAA/MM/GG" required />
                <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
              </Form.Group>
            </div>
            <Form.Group md="3" controlId="validationCustom05">
              <Form.Label className="text-muted">Description</Form.Label>
              <Form.Control
                style={{ height: "100px" }}
                as="textarea"
                type="text"
                name="description"
                defaultValue={formData.description}
                placeholder="Your Description"
                required
              />
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label className="text-muted">Image</Form.Label>
              <Form.Control required type="text" name="image" defaultValue={formData.image} placeholder="http//...." />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {!experience && (
              <Form.Group className="mb-3">
                <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
              </Form.Group>
            )}
          </Row>
          <Modal.Footer>
            <Button type="submit" className="buttonFill mt-3  px-3 rounded-pill text-bold" size="sm" onClick={() => setModalShow(false)}>
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ExperiencesModal;
