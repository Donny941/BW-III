import Card from "react-bootstrap/Card";
import { EyeFill, PeopleFill, BarChartLineFill, Search, ArrowRight, Pencil, PlusLg } from "react-bootstrap-icons";
import suggestPlace from "../assets/suggplace.svg";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getExperiences } from "../redux/action";

function Experiences() {

  const experiences = useSelector((state) =>
    state.experiences.allexperiences
  );
  const Dispatch = useDispatch()

  const URL = "https://striveschool-api.herokuapp.com/api/profile/667079932b4f140015b37466/experiences"


  useEffect(() => {
    Dispatch(getExperiences(URL))
  }, [])

  return (
    <Card className="mt-2 mb-5">
      <Card.Body className="border border-bottom border-tertiary">
        <div className="d-flex justify-content-between align-items-top">
          <div>
            {" "}
            <Card.Title>Experience</Card.Title>
          </div>
          <div className="d-flex gap-2 align-items-top position-relative">
            <div className="plusBtn position-absolute   d-flex align-items-center justify-content-center">
              <PlusLg fontSize={25} />
            </div>
            <div className="editButton2 position-absolute   d-flex align-items-center justify-content-center">
              <Pencil fontSize={20} />
            </div>
          </div>
        </div>
        {experiences.map((experience) => {
          if (experience.startDate || experience.endDate === null) {
            return
          } else {
            let startDate = new Date(experience.startDate)
            let endDate = new Date(experience.endDate)
            let startDateFormatted = startDate.toLocalDateString("it-IT")
            let endDateFormatted = endDate.toLocalDateString("it-IT")
          }

          return (
            <div key={experience._id} className="d-flex">
              <div>
                <img src={experience.image} alt="" style={{ width: "50px" }} />
              </div>
              <div className="ms-2">
                <p className="m-0 fw-semibold">{experience.role}</p>
                <p className="m-0">{experience.company}</p>
                <small className="text-muted">{`${startDateFormatted}-${endDateFormatted}`}</small>
              </div>
            </div>
          );
        })}

      </Card.Body>
    </Card >
  );
}

export default Experiences;


