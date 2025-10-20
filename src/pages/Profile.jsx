import { Col, Container, Row } from "react-bootstrap";
import LinkNav from "../components/LinkNav";
import MainProfile from "../components/MainProfile";
import Suggestions from "../components/Suggestions";
import Analytics from "../components/Analytics";

import Activities from "../components/Activities";
import Experiences from "../components/Experiences";
import ProfileInfo from "../components/ProfileInfo";
import KnowPeople from "../components/KnowPeople";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <LinkNav />
      <Container className="myContainer">
        <Row className="mt-4">
          <Col xs={8}>
            <MainProfile />
            <Suggestions />
            <Analytics />
            <Activities />
            <Experiences />
          </Col>
          <Col xs={4}>
            <ProfileInfo />
            <KnowPeople />
          </Col>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default Profile;
