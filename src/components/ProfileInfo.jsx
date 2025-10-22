import Card from "react-bootstrap/Card";
import { EyeFill, PeopleFill, BarChartLineFill, Search, ArrowRight, Pencil, PlusLg } from "react-bootstrap-icons";

import { Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

function ProfileInfo() {
  const currentProfile = useSelector((state) => state.profile.currentprofile);

  return (
    <Card className="mt-2">
      <Card.Body className="pb-0">
        <div className="d-flex justify-content-between align-items-top">
          <div>
            <Card.Title>Profile Language</Card.Title>
            <p className="text-muted m-0">English</p>
          </div>
          <div className="d-flex gap-2 align-items-top position-relative">
            <div className="editButton2 position-absolute   d-flex align-items-center justify-content-center">
              <Pencil fontSize={20} />
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex "></div>
      </Card.Body>
      <Card.Body className="pt-0">
        <div className="d-flex justify-content-between align-items-top">
          <div className="overflow-hidden">
            <Card.Title>Public profile & URL</Card.Title>
            {currentProfile && (
              <p className="truncate text-muted m-0">{`www.linkedin.com/in/${currentProfile.name}-${currentProfile.surname}/${currentProfile._id}`}</p>
            )}
          </div>
          <div className="d-flex gap-2 align-items-top position-relative">
            <div className="editButton2 position-absolute right-0 me-3 d-flex align-items-center justify-content-center">
              <Pencil fontSize={20} />
            </div>
          </div>
        </div>

        <div className="d-flex "></div>
      </Card.Body>
    </Card>
  );
}

export default ProfileInfo;
