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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/action";
import { useParams } from "react-router";

function Profile() {
  // const URL = import.meta.env.VITE_URL;
  // const MY_TOKEN = import.meta.env.MY_TOKEN;
  const [isMyProfile, setIsMyProfile] = useState(true);
  const myProfile = useSelector((state) => state.profile.myprofile);
  const params = useParams();
  const dispatch = useDispatch();
  const URL = `https://striveschool-api.herokuapp.com/api/profile/${params.id}`;
  const rightProfile = () => {
    if (myProfile._id === params.id) {
      setIsMyProfile(true);
    } else {
      setIsMyProfile(false);
    }
  };

  useEffect(() => {
    rightProfile();
    console.log(URL);
    dispatch(getProfile(URL));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <>
      <LinkNav />
      <Container className="myContainer">
        <Row className="marginForNav">
          <Col xs={9}>
            <MainProfile isMyProfile={isMyProfile} />
            <Suggestions isMyProfile={isMyProfile} />
            {isMyProfile && <Analytics />}
            <Activities isMyProfile={isMyProfile} />
            <Experiences isMyProfile={isMyProfile} />
          </Col>
          <Col xs={3} className="customWidth">
            <ProfileInfo />
            <KnowPeople people={7} />
          </Col>
          <Footer display={true} />
        </Row>
      </Container>
    </>
  );
}

export default Profile;
