import React from "react";
/* import ReactDOM from 'react-dom'
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Blog from './Blog';
import FeatureBrand from './FeatureBrand' */
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "./HomeCarousel";
import HomeIntroduction from "./HomeIntroduction";
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
<div><HomeIntroduction /></div>
       
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
