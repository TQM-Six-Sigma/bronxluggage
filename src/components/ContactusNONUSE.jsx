import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Rating from "react-rating-stars-component";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
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
    <>
      <div className="d-block text-primary " variant="primary" onClick={handleShow}>        ContactUs      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
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
              <Form.Label>Please help us to understand you more</Form.Label>
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
              Send ContactUs
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactUs;

