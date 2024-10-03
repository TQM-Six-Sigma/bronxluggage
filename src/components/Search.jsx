import React, { useState } from "react";
import { Container, Row, Col, Form, Carousel } from "react-bootstrap";
import cardData from "../databaseJSON/Search.json";
import { Link } from "react-router-dom";

const CardTemplate = () => {
  const [searchItem, setSearchItem] = useState("");

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
      card.price.includes(searchItem)
    );
  });

  return (
    <Container>
      <Row className="g-0">
        <Col xs={9} md={6} lg={4}>
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
          <Col key={index} xs={9} md={4} lg={3}>
            <Link to={`/${card.link}`} style={{ textDecoration: "none" }}>
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
                <div className="card-body">
                  <h5 className="card-title">{card.name}</h5>
                  <p className="card-text">
                    {card.brand}
                    <br />
                    {card.price}
                  </p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardTemplate;
