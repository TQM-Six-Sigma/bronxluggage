import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cardData from "../databaseJSON/CardTemplate.json";
import { Link } from "react-router-dom";

const CardTemplate = () => {
  return (
    <Container>
      <Row className="g-4">
        {cardData.map((card, index) => (
          <Col key={index} xs={6} md={3} lg={3}>
            <Link to={`/${card.link}`}>
              <div className="card">
                <img
                  src={require(`../../public/images/${card.image}`)}
                  className="card-img-top"
                  alt={card.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.name}</h5>
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

