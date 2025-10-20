import { Col, Container, Row } from "react-bootstrap";
import LinkNav from "../components/LinkNav";
import MainProfile from "../components/MainProfile";
import Suggestions from "../components/Suggestions";
import Analytics from "../components/Analytics";
function Profile() {
  return (
    <>
      <LinkNav />
      <Container>
        <Row className="mt-4">
          <Col xs={8}>
            <MainProfile />
            <Suggestions />
            <Analytics />
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
