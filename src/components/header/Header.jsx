import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Canva from "../canvas/Canva";
const Header = ({ category, setCategory, det, setDet }) => {
  function handleChange(event) {
    setCategory(event.target.value);
  }
  console.log(category);
  return (
    <div id="header" className="container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Bazaar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <select
                title="items"
                id="basic-nav-dropdown"
                value={category}
                onChange={(e) => handleChange(e)}
              >
                <option value={"category"}>select a category</option>
                <option value={"men's clothing"}>men's clothing</option>
                <option value={"jewelery"}>jewelery</option>
                <option value={"electronics"}>electronics</option>
                <option value={"women's clothing"}>women's clothing</option>
              </select>
              &nbsp;&nbsp;&nbsp;
              <Canva det={det} setDet={setDet} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
