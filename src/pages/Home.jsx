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
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile, getPosts } from "../redux/action";
import HomeProfile from "../components/HomeProfile";
import Items from "../components/Items";
import SelectFeed from "../components/SelectFeed";
import PuzzleGames from "../components/PuzzleGames";
import Post from "../components/Post";

function Home() {
  const URL = "https://striveschool-api.herokuapp.com/api/profile/me";
  const URL_POST = "https://striveschool-api.herokuapp.com/api/posts/";
  const posts = useSelector((state) => state.posts.allposts);
  const dispatch = useDispatch();

  let n1 = 0;
  let n2 = 0;
  const randomPost = () => {
    n1 = Math.floor(Math.random() * 2400);
    n2 = n1 + 10;
    return n1, n2;
  };

  randomPost();

  useEffect(() => {
    console.log(URL);
    dispatch(getMyProfile(URL));
    dispatch(getPosts(URL_POST, n1, n2));
  }, []);

  return (
    <>
      <LinkNav />
      <Container className="myContainer2">
        <Row className="marginForNav ">
          <Col xs={3} className="customWidth position-realative">
            <div className=" position-sticky">
              <HomeProfile />
              <Items />
            </div>
          </Col>
          <Col xs={6}>
            <NewPost />
            <SelectFeed />
            {posts.map((post) => (
              <Post post={post} key={post._id} />
            ))}
          </Col>
          <Col xs={3} className="customWidth">
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
