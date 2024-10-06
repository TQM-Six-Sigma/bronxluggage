import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Carousel, } from "react-bootstrap";
import cardData from "../databaseJSON/Search.json";
import RatingStarFeedback from "./RatingStarFeedback";
import { Link, useLocation } from "react-router-dom";


const Search = () => {
  const [searchItem, setSearchItem] = useState("");
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

  const filteredCards = cardData.filter((card) => {
    return (
      card.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      card.brand.toLowerCase().includes(searchItem.toLowerCase()) ||
      card.individual.toLowerCase().includes(searchItem.toLowerCase()) ||
      card.color.toLowerCase().includes(searchItem.toLowerCase()) ||
      card.stat.toLowerCase().includes(searchItem.toLowerCase()) ||
      card.price.includes(searchItem)
    );
  });

  return (
    <Container>
      <Row className="g-0">
        <Col xs={12} md={6} lg={4}>
          <Form>
            <Form.Control
              type="text"
              value={searchItem}
              onChange={handleInputChange}
              placeholder="Search by name, price, brand..."
            />
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
              <Link to={`/${card.link}`}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={require(`../../public/images/${card.image}1.png`)}
                      className="d-block w-100"
                      alt={card.name + " 1"}
                    />
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
               <RatingStarFeedback />
                <h6 className="card-title">{card.name}</h6>
                <p className="card-text">
                  {card.brand}
                  <br />
                  {card.price}
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
