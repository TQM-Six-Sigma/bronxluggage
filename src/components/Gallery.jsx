
import React from 'react';
import GalleryLayout from "./GalleryLayout";
import ContentData from "../databaseJSON/Gallery.json"

const Gallery
 = () => {
  return (
    <>
      <div>
        <GalleryLayout data={ContentData}
         />
      </div>
    </>
  );
};

export default Gallery
;
