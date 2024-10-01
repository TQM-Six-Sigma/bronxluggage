import NavBar from "./Navbar";
import '../css/FBBriggRiley.css';
import Footer from "./Footer";
const FBBriggRiley = () => {
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/briggs-and-riley-line-plum-1206x1206.jpg"
              }
              alt="BriggRileySize"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-3 col-sm-12">
            <h3>BRIGGS & RILEY®</h3>
            <h6>
              <b>There's just no comparison!</b>
            </h6>
            <p style={{ textAlign: "justify" }}>
              From bumps and scrapes to tears and wheels gone astray, we've got
              your back… and your bag. Unlike other brands, we don't take our
              lifetime guarantee lightly. We stand behind our bags—both
              hard-sided and soft-sided—and through doing so, we believe we
              stand behind you during every leg of your travel. Our simple as
              that&reg; guarantee means we repair your bag free of charge if
              it's ever broken or damaged—even if it was damaged by an airline.
              Peace of mind is as Simple As That&reg;. Integrity, innovation and
              incredible travels should last a lifetime.
            </p>
          </div>
          <div className="col-lg-3 col-sm-12">
            <p style={{ textAlign: "justify" }}>
              Other brands may claim to have a lifetime warranty, but as you can
              see, no one compares to Briggs. Briggs & Riley will guarantee
              their luggage from manufacturing defect, Airline damage and even
              for any reason whatsoever. The guarantee is transferable and
              requires no proof of purchase. No other company offers the perfect
              guarantee other then Briggs & Riley. Bronx Luggage, located in the
              Festival Marketplace in Pompano Beach, Florida proudly stocks an
              excellent inventory of this fantastic product line.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="card">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/briggs-and-riley-international-600x600.jpg"
                }
                className="card-img-top"
                alt="BriggRiley1"
                
              />
              <div className="card-body text-center">
                <h5 className="card-title">Brigg & Riley</h5>
                <p className="card-text">
                  INTERNATIONAL EXPANDABLE ROLLING CARRY-ON SUITCASE
                </p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/briggs-and-riley-suiter-600x600.jpg"
                }
                className="card-img-top"
                alt="BriggRiley2"
                
              />
              <div className="card-body text-center">
                <h5 className="card-title">Brigg & Riley</h5>
                <p className="card-text">SUITER</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/briggs-and-riley-large-784x1035.jpg"
                }
                className="card-img-top"
                alt="BriggRiley3"
                              />
              <div className="card-body text-center">
                <h5 className="card-title">Brigg & Riley</h5>
                <p className="card-text">LARGE SUITCASE</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
          <div className="container col-lg-12 col-sm-12">
            <div className="ratio ratio-16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bMCrIfQJsG8?si=DTzNCju5flar9DNe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
          <br />
          <div className="container col-lg-12 col-sm-12">
            <div className="ratio ratio-16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0horaDXNmLM?si=kTUc1nDd9RyFLRom" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        <br />
        <div>
            <Footer />
        </div>
      </div>
    </>
  );
};

export default FBBriggRiley;
