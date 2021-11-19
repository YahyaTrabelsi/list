import { Navbar, Container, Nav } from "react-bootstrap";
import AddStudent from "../AddStudent/AddStudent";
import Filter from "../Filter/Filter";
import { NavLink } from "react-router-dom";

const Header = ({ addSudent, setTexFilter }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/features">Features</NavLink>

            <NavLink to="/studentslist">Students List</NavLink>
          </Nav>
          <span style={{ color: "white" }}> Search</span>
          <Filter setTexFilter={setTexFilter} />
          <AddStudent addSudent={addSudent} />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
