import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Carousel, Button } from "react-bootstrap";
import cardData from "../databaseJSON/BronxFilter.json";
import RatingStarFeedback from "./RatingStarFeedback";
import { Link, useLocation } from "react-router-dom";
import {Tooltip} from 'react-bootstrap';


const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [sort, setSort] = useState("asc");
  const [brandFilter, setBrandFilter] = useState([]);
  const [individualFilter, setIndividualFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get("keyword");
    if (keyword) {
      setSearchItem(keyword);
    }
  }, [location]);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  const filteredCards = cardData
    .filter((card) => {
      return (
        card.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.brand.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.individual.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.color.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.stat.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.price.toString().includes(searchItem)
      );
    })
    .filter(
      (card) => (brandFilter.length === 0 || brandFilter.includes(card.brand)) &&
               (colorFilter.length === 0 || colorFilter.includes(card.color)) &&
               (individualFilter.length === 0 || individualFilter.includes(card.individual))
    )
    
    .sort((a, b) => {
      if (sort === "ascByName") {
        return a.name.localeCompare(b.name);
      } else if (sort === "descByName") {
        return b.name.localeCompare(a.name);
      } else if (sort === "asc") {
        return a.price - b.price;
      } else if (sort === "desc") {
        return b.price - a.price;
      } else if (sort === "bestseller") {
        return b.stat.localeCompare(a.stat);
      } else if (sort === "color") {
        return a.color.localeCompare(b.color);
      } else if (sort === "individual") {
        return a.individual.localeCompare(b.individual);
      } else if (sort === "brand") {
        return a.brand.localeCompare(b.brand);
      }
      return 0;
    });

  const handleBrandFilterChange = (brand) => {
    if (brandFilter.includes(brand)) {
      setBrandFilter(brandFilter.filter((b) => b !== brand));
    } else {
      setBrandFilter([...brandFilter, brand]);
    }
  };
  const handleIndividualFilterChange = (individual) => {
    if (individualFilter.includes(individual)) {
      setIndividualFilter(individualFilter.filter((b) => b !== individual));
    } else {
      setIndividualFilter([...individualFilter, individual]);
    }
  };
const handleColorFilterChange = (color) => {
  if (colorFilter.includes(color)) {
    setColorFilter(colorFilter.filter((b) => b !== color));
  } else {
    setColorFilter([...colorFilter, color]);
  }
};

  return (
    <Container>
      <Row className="mb-2 col-12 ">
        <Col xs={12} md={12} lg={8} className={"d-flex justify-content-center"}>
          <Button 
            variant={
              brandFilter.includes("TravelPro") ? "primary" : "outline-primary"
            }
            onClick={() => handleBrandFilterChange("TravelPro")}
            className="me-2"
          >
            TravelPro
          </Button>
          <Button
            variant={
              brandFilter.includes("Briggs & Riley")
                ? "primary"
                : "outline-primary"
            }
            onClick={() => handleBrandFilterChange("Briggs & Riley")}
            className="me-2"
          >
            Briggs & Riley
          </Button>
          <Button
            variant={
              brandFilter.includes("Bric'S") ? "primary" : "outline-primary"
            }
            onClick={() => handleBrandFilterChange("Bric'S")}
            className="me-2"
          >
            Bric'S
          </Button>
          <Button
            variant={
              brandFilter.includes("Ricardo") ? "primary" : "outline-primary"
            }
            onClick={() => handleBrandFilterChange("Ricardo")}
            className="me-2"
          >
            Ricardo
          </Button>
          <Button
            variant={
              brandFilter.includes("Delsey") ? "primary" : "outline-primary"
            }
            onClick={() => handleBrandFilterChange("Delsey")}
            className="me-2"
          >
            Delsey
          </Button>
          <Button
            variant={
            individualFilter.includes("woman") ? "primary" : "outline-primary"
            }
            onClick={() => handleIndividualFilterChange("woman")}
            className="me-2"
          >
            Woman Style
          </Button>
          <Button
            variant={
            individualFilter.includes("gentleman") ? "primary" : "outline-primary"
            }
            onClick={() => handleIndividualFilterChange("gentleman")}
            className="me-2"
          >
            Gentle Man Style
          </Button>
          <Button
            variant={
              colorFilter.includes("Black") ? "primary" : "outline-primary"
            }
            onClick={() => handleColorFilterChange("Black")}
            className="me-2"
          >
            Black
          </Button>
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs={12} md={6} lg={4}>
          <Form>
            <Form.Control
              type="text"
              value={searchItem}
              onChange={handleInputChange}
              placeholder="Search by name, price, brand..."
            />
            <Form.Select
              className="mt-2"
              aria-label="Sort"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            >
              <option value="ascByName">Name: A-Z</option>
              <option value="descByName">Name: Z-A</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
              <option value="bestseller">Bestseller</option>
              <option value="color">Sort by Color</option>
              <option value="individual">Sort by Individual</option>
              <option value="brand">Sort by Brand</option>
            </Form.Select>
          </Form>
        </Col>
      </Row>
      <Row className="g-0">
        {filteredCards.map((card, index) => (
          <Col key={index} xs={6} md={4} lg={3}>
            <div
              className="card1"
              style={{
                width: "100%",
                aspectRatio: "9/13",
                backgroundImage: `url(${require(`../../public/images/${card.background}.png`)})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              
              <Link to={`/${card.link}`} data-bs-toggle="tooltip" data-bs-placement="top" title={card.description}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={require(`../../public/images/${card.image}1.png`)}
                      className="d-block w-100"
                      alt={card.name + " 1"}
                    />
                    <Tooltip/>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={require(`../../public/images/${card.image}2.png`)}
                      className="d-block w-100"
                      alt={card.name + " 2"}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={require(`../../public/images/${card.image}3.png`)}
                      className="d-block w-100"
                      alt={card.name + " 3"}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={require(`../../public/images/${card.image}4.png`)}
                      className="d-block w-100"
                      alt={card.name + " 4"}
                    />
                  </Carousel.Item>
                </Carousel>
              </Link>

              <div className="card-body text-black px-3 ">
                {/* <span>{card.serial}</span> */}
                <h6 className="card-title">{card.name}</h6>
                <div>
                  <RatingStarFeedback />
                </div>
                <p className="card-text">
                  {card.brand}
                  <br />
                  {card.price}
                  {"$"}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Search;
