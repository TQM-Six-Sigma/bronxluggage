import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const pages = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    { title: "Gallery", path: "/gallery" },
    { title: "Blog", path: "/blog" },
    { title: "Brands", path: "/brands" },
    { title: "Samsonite", path: "/brands/samsonite" },
    { title: "Delsey Paris", path: "/brands/delsey-paris" },
    { title: "TravelPro", path: "/brands/travelpro" },
    { title: "Brics", path: "/brands/brics" },
    { title: "Delsey Ricardo", path: "/brands/delsey-ricardo" },
    { title: "Search", path: "/search" },
  ];
  return (
    <Container className="bg-primary">
      <Row>
        <Col>
          <h1>Sitemap</h1>
          <ul>
            {pages.map((page) => (
              <li  key={page.path}>
                <Link to={page.path}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Sitemap;
