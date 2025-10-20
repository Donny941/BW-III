import { Col, Container, Row } from "react-bootstrap";
import LinkNav from "../components/LinkNav";
import MainProfile from "../components/MainProfile";

function Profile() {
  return (
    <>
      <LinkNav />
      <Container>
        <Row className="mt-4">
          <Col xs={8}>
            <MainProfile />
            <MainProfile />
          </Col>
          <Col xs={4}>
            <div> dsjkhfdklsfjkldsjfkldj</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
