import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cardData from "../databaseJSON/CardTemplate.json";
import { Link } from "react-router-dom";

const CardTemplate = () => {
  return (
    <Container>
      <Row className="g-4">
        {cardData.map((card, index) => (
          <Col key={index} xs={9} md={3} lg={3}>
            <Link to={`/${card.link}`}>
              <div
                className="card"
                style={{
                  width: "100%",
                  aspectRatio: "9/13", 
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={require(`../../public/images/${card.image}`)}
                  className="card-img-top"
                  alt={card.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  className="card-body"
                  style={{ flex: 1, padding: "1rem", display: "flex", justifyContent: "center", alignItems: "center" }}
                >
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
