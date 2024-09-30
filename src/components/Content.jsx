import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "./CarouselBrigg";
//import Slide2 from "./FBBriggRiley";
//import Slide3 from "./FBDelseyRicardo";
//import Slide4 from "./FBSamsonite";
//import Slide5 from "./FBTravelPro";
//import Slide6 from "./FBAffordableBrands";
//import Slide7 from "./AboutUs";
//import Slide8 from "./FeatureBrand";

const Content = () => {
  return (
    <Carousel>
      <Carousel.Item>
         <div className="container-fluid">
          <img style={{ width: "stretch", height: "480px" }}
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/CarouselBrics1.png"}
            alt="FBBrics"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="container-fluid">
          <img style={{ width: "auto", height: "480px" }}
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/CarouselBriggWide1.png"}
            alt="FBBrics"
          />
        </div>
      </Carousel.Item>
       <Carousel.Item>
         <div className="container-fluid">
          <img style={{ width: "auto", height: "480px" }}
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/CarouselTravelpro1.png"}
            alt="FBBrics"
          />
        </div>
      </Carousel.Item>
      
     {/* <Carousel.Item>
        <Slide3 />
      </Carousel.Item>
      <Carousel.Item>
        <Slide4 />
      </Carousel.Item>
      <Carousel.Item>
        <Slide5 />
      </Carousel.Item>
      <Carousel.Item>
        <Slide6 />
      </Carousel.Item>
      <Carousel.Item>
        <Slide7 />
      </Carousel.Item>
      <Carousel.Item>
        <Slide8 />
      </Carousel.Item> */}
    </Carousel>
  );
};
export default Content;
