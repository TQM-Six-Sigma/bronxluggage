import React from "react";
/* import ReactDOM from 'react-dom'
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Blog from './Blog';
import FeatureBrand from './FeatureBrand' */
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "./HomeCarousel";
import Ticker from "./Ticker";
const Home = () => {
  return (
    <>
      <div class="container-fluid">
        <div className="row">
          <div>
            <Navbar />
          </div>

          <div>
            <Content />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p>
              <h2>Our Story</h2>
              BRONX LUGGAGE HAS BEEN IN BUSINESS FOR 27 YEARS WITH OVER 60 YEARS
              OF EXPERIENCE. THE OWNERS AND MANAGEMENT OF BRONX LUGGAGE WILL
              MATCH YOU WITH ONE OF THE MANY BRANDS THAT WILL BEST FILL YOUR
              LUGGAGE NEEDS. WE ARE AN AUTHORIZED BRIGGS & RILEY REPAIR CENTER
              AND THE ONLY AUTHORIZED DEALER IN THE FESTIVAL MARKETPLACE. WE
              STAND BEHIND OUR PRODUCTS AND TREAT OUR CUSTOMERS LIKE FAMILY.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img
              src={process.env.PUBLIC_URL + "/images/ourstory-1206x678.jpg"}
              alt="ourStory"
              className="img-fluid"
            />
          </div>
        </div>
        <div>
          <Ticker />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
