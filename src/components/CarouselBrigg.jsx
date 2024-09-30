const CarouselBrigg = () => {
  return (
    <>
      <div className="row no-gutters justify-content-center">
        <div className="col-md-6">
          <img
            style={{ width: "auto", height: "auto" }}
            className="card-img-top"
            src={
              process.env.PUBLIC_URL + "/images/CarouselBrigg1.jpg"
            }
            alt="FBBrics"
          />
        </div>
        <div className="col-md-6">
          <img
            style={{ width: "auto", height: "auto" }}
            className="card-img-top"
            src={
              process.env.PUBLIC_URL + "/images/CarouselBrigg2.jpg"
            }
            alt="FBBrics"
          />
        </div>
      </div>
    </>
  );
};

export default CarouselBrigg;
