import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoBronx from "./LogoBronx";
import Counter from "./Counter";

function navBar() {
  return (
    <>
      <div className="d-none d-lg-block col-lg-12 bg-body-secondary d-flex ">
        <LogoBronx />
      </div>
      <div>
        <Counter />
      </div>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container fluid>
          <div className="d-block d-lg-none navbar-brand">
            <LogoBronx />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <NavDropdown title="FEATURED BRANDS" id="navbarScrollingDropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/fbBriggRiley"
                  className="text-center"
                >
                  BRIGG&RILEY
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown
                  title="TRAVELPRO"
                  id="navbarScrollingDropdown"
                  className="text-center"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/fbTravelPro"
                    className="text-center"
                  >
                    Platinum Elite
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/fbTravelPro"
                    className="text-center"
                  >
                    Maxlite 5
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/fbTravelPro"
                    className="text-center"
                  >
                    Crew
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>

                <NavDropdown.Divider />
                <NavDropdown
                  title="BRICS'S"
                  id="navbarScrollingDropdown"
                  className="text-center"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/fbBrics"
                    className="text-center"
                  >
                    Bellagio
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/fbBrics"
                    className="text-center"
                  >
                    Venezia
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/fbBrics"
                    className="text-center"
                  >
                    X-Travel
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  as={Link}
                  to="/fbSamsonite"
                  className="text-center"
                >
                  SAMSONITE
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/fbDelseyRicardo"
                  className="text-center"
                >
                  DELSEY | RICARDO
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown
                  title="AFFORDABLE BRANDS"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/fbAffordableBrands"
                    className="text-center"
                  >
                    IT
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/fbAffordableBrands"
                    className="text-center"
                  >
                    Gabbiano
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/fbAffordableBrands"
                    className="text-center"
                  >
                    Wisdom
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </NavDropdown>
              <Nav.Link as={Link} to="/gallery">
                GALLERY
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                BLOG
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                ABOUT US
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              onClick={() => {
                window.location.href = "/search";
              }}
              />{""}
              <Button variant="outline-success" as={Link} to="/search">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navBar;
