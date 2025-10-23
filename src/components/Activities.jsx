import Card from "react-bootstrap/Card";
import { EyeFill, PeopleFill, BarChartLineFill, Search, ArrowRight, Pencil } from "react-bootstrap-icons";

import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyPost } from "../redux/action";
import Post from "./Post";
import Slider from "react-slick";

function Activities() {
  const myProfile = useSelector((state) => state.profile.myprofile);
  const posts = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();
  const URL = "https://striveschool-api.herokuapp.com/api/posts/";

  useEffect(() => {
    dispatch(getMyPost(URL));
  }, []);

  const myPost = myProfile && posts ? posts.filter((post) => post.user._id === myProfile._id) : [];

  console.log("mypost", myPost);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Card className="mt-2 ">
      <Card.Body className="border border-bottom border-tertiary">
        <div className="d-flex justify-content-between align-items-top">
          <div>
            <Card.Title>Activity</Card.Title>
            <a href="#" style={{ textDecoration: "none" }}>
              1 followers
            </a>
          </div>
          <div className="d-flex gap-2 align-items-top position-relative">
            <div>
              <Button className="buttonOut me-5 px-3 rounded-pill text-bold" size="sm">
                Create a post
              </Button>
            </div>
          </div>
        </div>
        <div className="slider-container p-5">
          <Slider {...settings}>
            {myPost.map((post) => (
              <div>
                <Post key={post._id} post={post} />
              </div>
            ))}
          </Slider>
        </div>
      </Card.Body>
      <Button className="rounded-0 rounded-bottom btnCard  fw-semibold" variant="light">
        Show all activity <ArrowRight />{" "}
      </Button>
    </Card>
  );
}

export default Activities;
