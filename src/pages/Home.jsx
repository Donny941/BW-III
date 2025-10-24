import { Col, Container, Row } from "react-bootstrap";
import LinkNav from "../components/LinkNav";

import KnowPeople from "../components/KnowPeople";

import Footer from "../components/Footer";
import NewPost from "../components/NewPost";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getPosts } from "../redux/action";
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
    n1 = Math.floor(Math.random() * 200);
    n2 = n1 + 10;
    return n1, n2;
  };

  randomPost();

  useEffect(() => {
    console.log(URL);
    dispatch(getProfile(URL, "TAKE_PROFILE"));
    dispatch(getPosts(URL_POST, n1, n2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <LinkNav />
      <Container className="myContainer2">
        <Row className="marginForNav">
          <Col xs={3} className="sticky-column-container">
            <div className="sticky-content">
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
          <Col xs={3} className="customWidth sticky-column-container">
            <PuzzleGames />
            <KnowPeople people={3} />
            <div className="sticky-content">
              <Footer />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
