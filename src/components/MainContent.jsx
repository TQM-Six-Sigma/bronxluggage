import React from 'react';
import '../css/MainContent.css';
import YouTube from 'react-youtube';

const MainContent = ({data}) => {
  return (
    <>
      {data.map((item, index) => (
        <div className="dtp-content-container col-12" key={index}>
          <h2 className="dtp-title-brand">{item.brandTitle}</h2>
          <h3 className="dtp-subtitle-brand">{item.subBrandTitle}</h3>
          <p className="dtp-title-article">{item.articleTitle}</p>
          <p className="dtp-content-article">{item.articleContent}</p>
          <div className="dtp-row-1s col-12">
            <div className="dtp-col-1 col-md-6">
              <img src={require(`../../public/images/${item.image1}.png`)} alt={item.name + " 1"} />
            </div>

            <div className="dtp-row-2s col-md-6">
              <div className="dtp-col-2">
                <img src={require(`../../public/images/${item.image2}.png`)} alt={item.name + " 2"} />
              </div>
              <div className="dtp-col-2 col-md-3">
                <img src={require(`../../public/images/${item.image3}.png`)} alt={item.name + " 3"} />
              </div>
              <div className="dtp-col-2 col-md-3">
                <img src={require(`../../public/images/${item.image4}.png`)} alt={item.name + " 4"} />
              </div>
              <div className="dtp-col-2 col-md-3">
                <img src={require(`../../public/images/${item.image5}.png`)} alt={item.name + " 5"} />
              </div>
            </div>
            
          </div>
          <div className="dtp-row-3s col-12">
            <img src={require(`../../public/images/${item.image6}.png`)} alt={item.name + " 6"} />
            </div>
          <div className="dtp-row-1s col-12">
            <div className="dtp-col-1 col-md-6">
              <img src={require(`../../public/images/${item.image7}.png`)} alt={item.name + " 7"} />
            </div>

            <div className="dtp-row-2s col-md-6">
              <div className="dtp-col-2">
                <img src={require(`../../public/images/${item.image8}.png`)} alt={item.name + " 8"} />
              </div>
              <div className="dtp-col-2 col-md-3">
                <img src={require(`../../public/images/${item.image9}.png`)} alt={item.name + " 9"} />
              </div>
              <div className="dtp-col-2 col-md-3">
                <img src={require(`../../public/images/${item.image10}.png`)} alt={item.name + " 10"} />
              </div>
              <div className="dtp-col-2 col-md-3">
                <img src={require(`../../public/images/${item.image11}.png`)} alt={item.name + " 11"} />
              </div>
            </div>
          </div>
            <div className="dtp-row-3s col-12">
            <img src={require(`../../public/images/${item.image12}.png`)} alt={item.name + " 12"} />
            </div>
            <div className="dtp-youtube-container">
            <iframe
              width="1200px"
              height="600px"
              src={item.video}
              title="Samsonite Magnum Product Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
           
          </div>

        </div>
      ))}
    </>
  );
};

export default MainContent;