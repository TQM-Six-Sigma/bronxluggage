import React from "react";
import CardPage from "./CardPage";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Gallery = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <CardPage />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
