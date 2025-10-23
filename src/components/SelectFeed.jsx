import { NavDropdown } from "react-bootstrap";

function SelectFeed() {
  return (
    <div className="d-flex justify-content-between align-items-center py-1">
      <div className="w-50">
        <hr />
      </div>
      <div className="d-flex gap-1">
        <p className="pNav m ">
          Select feed view:<strong> Most relevant first</strong>
        </p>
        <NavDropdown id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Most relevant first</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Most recent first</NavDropdown.Item>
          <NavDropdown.Divider />
          <div className="p-2">
            <small className="text-muted" style={{ fontSize: "12px" }}>
              This selection only affects your current feed view on this device. You can change your default view in Settings.
            </small>
          </div>
        </NavDropdown>
      </div>
    </div>
  );
}
export default SelectFeed;
