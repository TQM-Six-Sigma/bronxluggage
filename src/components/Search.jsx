import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Carousel, Modal } from "react-bootstrap";
import cardData from "../databaseJSON/Search.json";
import Rating from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const location = useLocation();
  

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get('keyword');
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
  
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [ContactUs, setContactUs] = useState("");
  const [rating, setRating] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email && ContactUs && rating) {
      // Call API to send ContactUs
      console.log("Send ContactUs");
      alert("Thank you. We will contact you as soon as possible!");
      handleClose();
    } else {
      alert("Please fill all fields");
    }
  };
  
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

              <div className="card-body text-black px-3 " >
                {" "}
                <h6 className="card-title">{card.name}</h6>
                <div onClick={() => handleShow(card)}>

                <Rating
                  count={5}
                  size={25}
                  value={rating}
                  onChange={(newRating) => setRating(newRating)}
                  required
                  z-index={10}
                  
                />
                </div>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sending Feedback and Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ContactUsForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ContactUsForm.ControlInput2">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ContactUsForm.ControlInput3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ContactUsForm.ControlTextarea1"
            >
              <Form.Label>ContactUs textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={ContactUs}
                onChange={(e) => setContactUs(e.target.value)}
                required
              />
            </Form.Group>
            <Rating
              count={5}
              size={30}
              value={rating}
              onChange={(newRating) => setRating(newRating)}
              required
            />
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Search;

