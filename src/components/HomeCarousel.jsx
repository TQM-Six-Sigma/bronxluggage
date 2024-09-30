import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import imageList from "../databaseJSON/imageList.json";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imageList.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="container-fluid">
              <img
                style={{ width: "auto", height: "480px" }}
                className="d-block w-100"
                src={process.env.PUBLIC_URL + item.src}
                alt={item.alt}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default HomeCarousel;
