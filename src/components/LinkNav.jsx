import { Button, Container, Form, InputGroup, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { Search, HouseDoorFill, PeopleFill, SuitcaseLgFill, ChatDotsFill, BellFill, Grid3x3GapFill } from "react-bootstrap-icons";
import { NavLink } from "react-router";
import userPlace from "../assets/user.png";

function LinkNav() {
  return (
    <Navbar expand="lg" className="bg-white py-0 shadow-sm">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} width="30" height="30" className="d-inline-block align-top logo" alt="logo" />
        </Navbar.Brand>
        <Form className="d-flex">
          <InputGroup>
            <InputGroup.Text className="border-0 ">
              <Search className="searchIcon" fontSize={14} />
            </InputGroup.Text>
            <Form.Control type="search" placeholder="Search" className="me-2 rounded-pill inputPad" aria-label="Search" />
          </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 mx-4 gap-4 my-lg-0 align-items-center " style={{ maxHeight: "100px" }} navbarScroll>
            <NavLink to="/" className="linkColor ">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <HouseDoorFill fontSize={20} />
                <p className="pNav">Home</p>
              </div>
            </NavLink>
            <NavLink to="/" className="linkColor">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <PeopleFill fontSize={20} />
                <p className="pNav">My Network</p>
              </div>
            </NavLink>
            <NavLink to="/" className="linkColor">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <SuitcaseLgFill fontSize={20} />
                <p className="pNav">Jobs</p>
              </div>
            </NavLink>
            <NavLink to="/" className="linkColor">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <ChatDotsFill fontSize={20} />
                <p className="pNav">Messaging</p>
              </div>
            </NavLink>
            <NavLink to="/" className="linkColor">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <BellFill fontSize={20} />
                <p className="pNav">Notifications</p>
              </div>
            </NavLink>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={userPlace} alt="" className="img-fluid rounded-circle mt-1" style={{ width: "22px" }} />
              <div className="d-flex gap-1">
                <p className="pNav">Me</p>
                <NavDropdown id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center border-start border-2 ps-2">
              <Grid3x3GapFill className=" mt-2" fontSize={20} />
              <div className="d-flex gap-1">
                <p className="pNav ">For Business</p>
                <NavDropdown id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LinkNav;
