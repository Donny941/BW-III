import Card from "react-bootstrap/Card";
import { EyeFill, PersonFillAdd, BarChartLineFill, Search, ArrowRight, Pencil, PlusLg } from "react-bootstrap-icons";

import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProfiles } from "../redux/action";

function KnowPeople({ people }) {
  const allProfiles = useSelector((state) => state.allprofiles.profiles);
  const dispatch = useDispatch();
  const URL = "https://striveschool-api.herokuapp.com/api/profile/";

  // funzione random people
  let n1 = 0;
  let n2 = 0;
  const randomPeople = () => {
    n1 = Math.floor(Math.random() * 700);
    n2 = n1 + people;
    return n1, n2;
  };

  randomPeople();
  // console.log(n1, n2);

  useEffect(() => {
    dispatch(getAllProfiles(URL, n1, n2));
  }, []);

  return (
    <Card className="mt-2 mb-2">
      <Card.Body className="border border-bottom border-tertiary">
        {" "}
        <div className="d-flex justify-content-between align-items-top">
          <Card.Title className="mb-3">People you may know</Card.Title>
        </div>
        {allProfiles.map((profile, i) => {
          return (
            <div key={profile._id}>
              <div className="d-flex align-items-top ">
                <div>
                  <img
                    src={`${profile.image}`}
                    alt="profileimage"
                    className="img-fluid rounded-circle "
                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                  />
                </div>
                <div className="ms-2">
                  <p className="m-0 fs-5 fw-semibold">{`${profile.name} ${profile.surname}`}</p>
                  <p className="m-0">{`${profile.title}`}</p>
                  <Button className="buttonOutGrey mt-2 px-3 fs-6 rounded-pill text-bold" size="sm">
                    <PersonFillAdd size={20} /> <p className="m-0 d-inline-block align-middle">Connect</p>
                  </Button>
                </div>
              </div>
              {i !== people - 1 ? <hr /> : null}
            </div>
          );
        })}
      </Card.Body>
      <Button className="rounded-0 rounded-bottom btnCard fw-semibold" variant="light">
        Show all
      </Button>
    </Card>
  );
}

export default KnowPeople;
