import Card from "react-bootstrap/Card";
import { Pencil, PlusLg, Trash2Fill } from "react-bootstrap-icons";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getExperiences } from "../redux/action";
import ExperiencesModal from "./ExperiencesModal";
import DeleteModal from "./DeleteModal";

function Experiences({ isMyProfile }) {
  const [experience, setExperience] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  // const id = "68f738789c08b100153513bc";
  const userId = useSelector((state) => state.profile.currentprofile);
  console.log("user id", userId);
  const experiences = useSelector((state) => state.experiences.allexperiences);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId !== null) {
      const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId._id}/experiences`;
      dispatch(getExperiences(URL));
    } else {
      console.log("no user id");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleEdit = (experience) => {
    setExperience(experience);
  };

  // modale
  const [show, setShow] = useState(false);

  return (
    <Card className="mt-2 mb-5">
      <Card.Body className="border border-bottom border-tertiary">
        <div className="d-flex justify-content-between align-items-top">
          <div>
            {" "}
            <Card.Title>Experience</Card.Title>
          </div>
          {isMyProfile && (
            <div className="d-flex gap-2 align-items-top position-relative">
              <div
                className="plusBtn position-absolute   d-flex align-items-center justify-content-center"
                onClick={() => {
                  setModalShow(true);
                  setExperience(null);
                }}
              >
                <PlusLg fontSize={25} />
              </div>
              <ExperiencesModal show={modalShow} setModalShow={setModalShow} experience={experience} onHide={() => setModalShow(false)} />
              <div className="editButton2 position-absolute   d-flex align-items-center justify-content-center">
                <Pencil fontSize={20} />
              </div>
            </div>
          )}
        </div>
        {experiences.map((experience) => {
          const startDate = experience.startDate ? new Date(experience.startDate).toLocaleDateString() : "date unavailable";
          const endDate = experience.endDate ? new Date(experience.endDate).toLocaleDateString() : "date unavailable";
          return (
            <div key={experience._id} className="d-flex align-items-center gap-2 my-1">
              <div>
                <img src={experience.image} alt="experiecesimg" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
              </div>
              <div className="ms-2">
                <p
                  className="m-0 fw-semibold"
                  onClick={() => {
                    handleEdit(experience);
                    setModalShow(true);
                  }}
                >
                  {experience.role}
                </p>

                <p className="m-0">{experience.company}</p>
                <small className="text-muted">{`${startDate}-${endDate}`}</small>
              </div>

              <DeleteModal show={show} setShow={setShow} experience={experience} />

              {isMyProfile && (
                <div onClick={() => setShow(true)} className="ms-auto editButton2   d-flex align-items-center justify-content-center">
                  <Trash2Fill className="text-muted" fontSize={20} />
                </div>
              )}
            </div>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default Experiences;
