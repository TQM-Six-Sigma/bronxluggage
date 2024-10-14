const GalleryLayout = ({ data }) => {
    return (
      <div className="dtp-wrapper dtp-GalleryImgHover">
        <h1 className="dtp-titleShadow">Gallery</h1>
        {data.map((item, index) => (
          <div key={index} className="dtp-content-container">
            
  
            <div className="dtp-row-1 col-md-12 g-0">
              <div className="dtp-col-left col-md-6">
                <img
                  src={require(`../../public/images/${item.image1}.png`)}
                  alt={item.name + " 1"}
                />
              </div>
              <div className="dtp-col-right col-md-6 col-sm-8">
                <div className="dtp-col-right-row-1 col-md-6 col-sm-8">
                  <div className="dtp-col-right-row-img">
                    <img
                      src={require(`../../public/images/${item.image2}.png`)}
                      alt={item.name + " 2"}
                    />
                  </div>
                  <div className="dtp-col-right-row-img">
                    <img
                      src={require(`../../public/images/${item.image3}.png`)}
                      alt={item.name + " 3"}
                    />
                  </div>
                </div>
                <div className="dtp-col-right-row-2 col-md-6">
                  <div className="dtp-col-right-row-img">
                    <img
                      src={require(`../../public/images/${item.image4}.png`)}
                      alt={item.name + " 4"}
                    />
                  </div>
                  <div className="dtp-col-right-row-img">
                    <img
                      src={require(`../../public/images/${item.image5}.png`)}
                      alt={item.name + " 5"}
                    />
                  </div>
                </div>
              </div>
            </div>
  
            <div className="dtp-row-2">
              <img
                src={require(`../../public/images/${item.image6}.png`)}
                alt={item.name + " 6"}
              />
            </div>
  
            <div className="dtp-row-1 col-md-12 g-0">
              <div className="dtp-col-left col-md-6">
                <img
                  src={require(`../../public/images/${item.image7}.png`)}
                  alt={item.name + " 7"}
                />
              </div>
              <div className="dtp-col-right col-md-6 col-sm-8">
                <div className="dtp-col-right-row-1 col-md-6 col-sm-8">
                  <div className="dtp-col-right-row-img">
                    <img
                      src={require(`../../public/images/${item.image8}.png`)}
                      alt={item.name + " 8"}
                    />
                  </div>
                  <div className="dtp-col-right-row-img">
                    <img
                      src={require(`../../public/images/${item.image9}.png`)}
                      alt={item.name + " 9"}
                    />
                  </div>
                </div>
                <div className="dtp-col-right-row-2 col-md-6">
                  <div className="dtp-col-right-row-img">
                    <img
                      src={require(`../../public/images/${item.image10}.png`)}
                      alt={item.name + " 10"}
                    />
                  </div>
                  <div className="dtp-col-right-row-img">
                    <img
                      src={require(`../../public/images/${item.image11}.png`)}
                      alt={item.name + " 11"}
                    />
                  </div>
                </div>
              </div>
            </div>
  
            <div className="dtp-row-2">
              <img
                src={require(`../../public/images/${item.image12}.png`)}
                alt={item.name + " 12"}
              />
            </div>
  
           
          </div>
        ))}
      </div>
    );
  };
  
  export default GalleryLayout;