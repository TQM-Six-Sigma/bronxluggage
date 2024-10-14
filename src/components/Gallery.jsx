
import React from 'react';
import GalleryLayout from "./GalleryLayout";
import ContentData1 from "../databaseJSON/GalleryLayout1.json"
import ContentData2 from "../databaseJSON/GalleryLayout2.json"
const Gallery
 = () => {
  return (
    <>
      <div>
        <h1 className="dtp-titleShadow">GALLERY</h1>
        <GalleryLayout data={ContentData1} />
        <GalleryLayout data={ContentData2} />
      </div>
    </>
  );
};

export default Gallery
;
