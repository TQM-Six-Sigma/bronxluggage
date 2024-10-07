import React from "react";
import Content from "./HomeCarousel";
import HomeIntroduction from "./HomeIntroduction";
const Home = () => {
  return (
    <>
      <div class="container-fluid">
        <div className="row">
          <div>
            <Content />
            <br />
          </div>
        </div>
        <div>
          <HomeIntroduction />
        </div>
      </div>
    </>
  );
};

export default Home;
