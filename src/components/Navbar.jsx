import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoBronx from "./LogoBronx";
import Counter from "./Counter";
import BLFeedback from "./BLFeedback";
import { FcGallery} from "react-icons/fc";
import { FaBlog,FaHome } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import { BsFillLuggageFill,BsFillHandbagFill,BsFillWalletFill } from "react-icons/bs";
import { MdLuggage } from "react-icons/md";
import { PiBackpackFill } from "react-icons/pi";


import "../css/BackToTop.css";
import BackToTopButton from "./BacktoTopButton";

function navBar() {
  return (
    <>
      <div className="d-none d-lg-block col-lg-12 bg-body-secondary d-flex  ">
        <LogoBronx />
      </div>
      <div>
        <Counter />
      </div>
      <BackToTopButton />

      <Navbar expand="lg" className="bg-body-tertiary">
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
                <FaHome style={{ fontSize: "45px" }} />
              </Nav.Link>
              <Nav.Link as={Link} to="/BronxFilter?keyword=luggage">
                <MdLuggage style={{ fontSize: "45px" }} /> LUGGAGE
              </Nav.Link>
              <Nav.Link as={Link} to="/BronxFilter?keyword=bag">
                <BsFillHandbagFill style={{ fontSize: "45px" }} /> BAGS
              </Nav.Link>
              <Nav.Link as={Link} to="/BronxFilter?keyword=backpack">
                <PiBackpackFill style={{ fontSize: "45px" }} />BACKPACKS
              </Nav.Link>
              <Nav.Link as={Link} to="/BronxFilter?keyword=accessories">
                <BsFillWalletFill style={{ fontSize: "45px" }} /> ACCESSORIES
              </Nav.Link>

              <NavDropdown
                title={
                  <span>
                    <BsFillLuggageFill style={{ fontSize: "45px" }} /> BRANDS
                    
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/fbBriggRiley"
                  className="text-center"
                >
                  BRIGG&RILEY
                </NavDropdown.Item>
                <NavDropdown.Divider />
                
                <NavDropdown.Item
                  as={Link}
                  to="/fbTravelPro"
                  className="text-center"
                >
                  Travel Pro®
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/fbBrics"
                  className="text-center"
                >
                  Bric'S
                </NavDropdown.Item>
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
                <NavDropdown.Item
                  as={Link}
                  to="/fbDelseyParis"
                  className="text-center"
                >
                  DELSEY PARIS
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/gallery">
                <FcGallery style={{ fontSize: "45px" }} /> GALLERY
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
              <FaBlog style={{ fontSize: "40px" }} /> BLOG
              </Nav.Link>
              <NavDropdown
                title={
                  <span>
                    <IoIosContacts style={{ fontSize: "45px" }} /> About Us
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/aboutUs"
                  className="text-center"
                >
                  About Bronx Luggage
                </NavDropdown.Item>
                <NavDropdown.Divider />
                
                <NavDropdown.Item
                  as={Link}
                  to="/contactUs"
                  className="text-center"
                >
                  Contact Us
                </NavDropdown.Item>
                </NavDropdown>
             
            </Nav>
            <Form className="d-flex">
              <BLFeedback>
                {(handleShow) => (
                  <Button variant="primary" onClick={handleShow}>
                    Feedback
                  </Button>
                )}
              </BLFeedback>
              <Button
                className="mx-2"
                variant="outline-success"
                as={Link}
                to="/bronxFilter"
              >
                Search <ImSearch />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navBar;
