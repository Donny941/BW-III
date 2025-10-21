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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/action";

function Profile() {
  // const URL = import.meta.env.VITE_URL;
  // const MY_TOKEN = import.meta.env.MY_TOKEN;

  const URL = "https://striveschool-api.herokuapp.com/api/profile/me";

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(URL);
    dispatch(getMyProfile(URL));
  }, []);

  return (
    <>
      <LinkNav />
      <Container className="myContainer">
        <Row className="mt-4 gap-2">
          <Col xs={8}>
            <MainProfile />
            <Suggestions />
            <Analytics />
            <Activities />
            <Experiences />
          </Col>
          <Col xs={4} className="customWidth">
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
