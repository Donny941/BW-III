import { NavDropdown } from "react-bootstrap";

function SelectFeed() {
  return (
    <div className="d-flex justify-content-between align-itmes-center">
      <div className="w-50">
        <hr />
      </div>
      <div className="d-flex gap-1">
        <p className="pNav m ">For Business sdasdasdasdadasdad </p>
        <NavDropdown id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  );
}
export default SelectFeed;
