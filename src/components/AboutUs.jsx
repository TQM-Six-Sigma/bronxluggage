import React from "react";
import "../css/AboutUS.css";
import NavBar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="about-us">
        <div className="img-list">
          <h1
            style={{
              fontSize: "30pt",
              fontFamily: "serif;",
              color: "black",
              textAlign: "center",
              fontStyle: "oblique",
              margin: "25px",
              textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
              transform: "skew(-10deg)",
            }}
          >
            About US Bronx Luggage
          </h1>
        </div>
        <div className="ratio ratio-16x9">
          <iframe
            width="600"
            height="300"
            src="https://www.youtube.com/embed/4X15SWccQOc?autoplay=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <section className="header-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 header-content">
                <h4>SOUTH FLORIDA'S PREMIER LUGGAGE STORE</h4>
                <h3>LUGGAGE FOR EVERYONE</h3>
                <p>
                  <strong>
                    The beauty of receiving high quality luggage is a truly
                    amazing feeling. Great luggage can be passed down from
                    family members who are experienced travelers. A high-quality
                    set of luggage will last a lifetime.
                  </strong>
                  <br />
                  <br />
                  <strong>
                    Bronx Luggage, located in the Festival Marketplace, offers a
                    wide selection of luggage from affordable sets to the best
                    brands on the market for all of your travel needs. We also
                    stock Jansport Backpacks, travel accessories, briefcases and
                    much more.
                  </strong>
                </p>
              </div>
              <div className="col-md-6">
                <div className="hero-img">
                  <img
                    src="https://www.bronxluggage.com/assets/images/mbr-1920x1226.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-story">
          <div className="container">
            <div className="row">
              <div className="col-md-6 story-content">
                <h1>Our Story</h1>
                <p>
                  BRONX LUGGAGE HAS BEEN IN BUSINESS FOR 27 YEARS WITH OVER 60
                  YEARS OF EXPERIENCE. THE OWNERS AND MANAGEMENT OF BRONX
                  LUGGAGE WILL MATCH YOU WITH ONE OF THE MANY BRANDS THAT WILL
                  BEST FILL YOUR LUGGAGE NEEDS. WE ARE AN AUTHORIZED BRIGGS &
                  RILEY REPAIR CENTER AND THE ONLY AUTHORIZED DEALER IN THE
                  FESTIVAL MARKETPLACE.
                </p>
              </div>
              <div className="col-md-6">
                <div className="hero-img">
                  <img
                    src="https://www.bronxluggage.com/assets/images/mbr-1206x678.jpg "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="header3-1">
          <div className="row">
            <div className="col-md-4">
              <h2>Vision Statement</h2>
              <p>
                "To revolutionize global travel by creating the most innovative,
                durable, and sustainable luggage solutions, empowering travelers
                to journey with confidence and style."
              </p>
            </div>
            <div className="col-md-4">
              <h2>Core Values</h2>
              <p>
                <strong>Innovation</strong>: Constantly push the boundaries of
                luggage design and technology. <br />
                <strong>Sustainability</strong>: Commit to eco-friendly
                materials and processes. <br />
                <strong>Quality</strong>: Ensure every product meets high
                standards of durability. <br />
                <strong>Customer-Centricity</strong>: Place customer needs at
                the heart of development. <br />
                <strong>Style & Functionality</strong>: Combine design with
                practical features. <br />
                <strong>Integrity</strong>: Uphold ethical business practices
                and fairness.
              </p>
            </div>
            <div className="col-md-4">
              <h2>Mission Statement</h2>
              <p>
                "To design and deliver premium, innovative luggage that enhances
                the travel experience, providing customers with stylish,
                durable, and sustainable solutions."
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
