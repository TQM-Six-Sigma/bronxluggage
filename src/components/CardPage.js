import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import config from "./config.json";
import "../css/CardPage.css";
import { CardGroup } from "react-bootstrap";
import { useState } from "react";

function CardPage() {
  let cardArr = config;

  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  return (
    <>
      <div className="text-center" style={{ marginTop: "5%" }}>
        <input
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Type to search"
          style={{ width: "40%" }}
        />
      </div>

      <div className="row" style={{ marginTop: "5%", marginLeft: "5%" }}>
        {cardArr.map((eachCard, index) => (
          <div
            className="col-xs-6 col-sm-4 col-md-3 col-lg-2 "
            style={{ marginBottom: "4%" }}
          >
            <CardGroup>
              <Card
                className="text-center"
                border="info"
                style={{ width: "50%", height: "50%" }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../public/images/" + eachCard.img + ".png")}
                  fluid
                  style={{ height: "100%" }}
                />

                <Card.Body>
                  <Card.Title>{eachCard.title}</Card.Title>
                  <Card.Text>{eachCard.text}</Card.Text>
                  <Button
                    className="text-bottom-0"
                    variant="primary"
                    size="sm"
                    href={eachCard.link}
                  >
                    Info
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardPage;
