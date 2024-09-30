import React from "react";
import imageList from "../databaseJSON/imageList.json";

const Gallery = () => {
  return (
    <div className="gallery">
      {imageList.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={process.env.PUBLIC_URL + image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

