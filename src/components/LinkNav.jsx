import { Button, Container, Form, InputGroup, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { Search, HouseDoorFill, PeopleFill, SuitcaseLgFill, ChatDotsFill, BellFill, Grid3x3GapFill, PersonFillAdd } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router";
import userPlace from "../assets/user.png";
import search from "../assets/icons/search.svg";
import { useSelector } from "react-redux";

function LinkNav() {
  const currentProfile = useSelector((state) => state.profile.currentprofile);
  return (
    <Navbar expand="lg" className="bg-white py-0 shadow-sm fixed-top">
      <Container className="myContainer2">
        <Navbar.Brand href="#">
          <img src={logo} width="40" height="40" className="d-inline-block align-top logo" alt="logo" />
        </Navbar.Brand>
        <Form className="d-flex">
          <InputGroup>
            <img src={search} className="searchIcon"></img>
            <Form.Control type="search" style={{ width: "300px" }} placeholder="Search" className="me-2 rounded-pill inputPad" aria-label="Search" />
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
                  <div className="p-3 ">
                    {currentProfile && (
                      <div className="d-flex align-items-center ">
                        <div>
                          <img src={`${currentProfile.image}`} alt="currentProfileimage" className="img-fluid rounded-circle " style={{ width: "50px" }} />
                        </div>
                        <div className="ms-2">
                          <p className="m-0 fs-6 fw-semibold">{`${currentProfile.name} ${currentProfile.surname}`}</p>
                          <small className="m-0 "> {`${currentProfile.title}`}</small>
                        </div>
                      </div>
                    )}
                    <div className="d-flex flex-column mt-3 gap-1">
                      <Button className="buttonOut  px-3 rounded-pill text-bold" size="sm">
                        <Link to="/profile">View profile</Link>
                      </Button>
                      <Button className="buttonFill  px-3 rounded-pill text-bold" size="sm">
                        Verify now
                      </Button>
                    </div>
                    <hr /> <h6 className="fw-semibold">Account</h6>
                    <div className="d-flex flex-column">
                      <p className="text-muted m-0"> Settings & Privacy</p>
                      <p className="text-muted m-0"> Help </p>
                      <p className="text-muted m-0"> Language</p>
                    </div>
                    <hr />
                    <h6 className="fw-semibold">Manage</h6>
                    <div className="d-flex flex-column">
                      <p className="text-muted m-0">Posts & Activity</p>
                      <p className="text-muted m-0"> Job Posting Account </p>
                    </div>
                    <hr />
                    <p className="text-muted m-0"> Sign Out</p>
                  </div>
                  {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item> */}
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
