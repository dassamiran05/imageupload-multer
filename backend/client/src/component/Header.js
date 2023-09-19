import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark" style={{height:"60px"}}>
      <Container>
        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
        <NavLink to="/register" className="text-decoration-none text-light">Sign up</NavLink>
      </Container>
    </Navbar>
  );
}

export default Header;
