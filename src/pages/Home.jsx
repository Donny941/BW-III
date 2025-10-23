import { Col, Container, Row } from "react-bootstrap";
import LinkNav from "../components/LinkNav";
import ProfileInfo from "../components/ProfileInfo";
import KnowPeople from "../components/KnowPeople";
import MainProfile from "../components/MainProfile";
import Suggestions from "../components/Suggestions";
import Analytics from "../components/Analytics";
import Activities from "../components/Activities";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import NewPost from "../components/NewPost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/action";
import HomeProfile from "../components/HomeProfile";
import Items from "../components/Items";
import SelectFeed from "../components/SelectFeed";
import PuzzleGames from "../components/PuzzleGames";

function Home() {
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
        <Row className="marginForNav">
          <Col xs={3} className="customWidth">
            <HomeProfile />
            <Items />
          </Col>
          <Col xs={5}>
            <NewPost />
            <SelectFeed />
          </Col>
          <Col xs={4} className="customWidth">
            <PuzzleGames />
            <KnowPeople people={3} />
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
