import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/FBDelseyRicardo.css";
const FBDelseyRicardo = () => {
  return (
    <>
      <div className="container-fluid">
        <div>
          <Navbar />
        </div>
        <h1 align="center">DELSEY PARIS | RICARDO BEVERLY HILLS</h1>
        <section class=" features5 " id="features5-y">
          <div class="container-fluid">
            <div class="row justify-content-center content-row">
              <div class="card first-card col-12 col-lg-6">
                <div class="card-wrapper">
                  <div class="card-box">
                    <h2 class="first-card-title display-2">
                      New Arrivals
                    </h2>
                    <p class=" first-card-text display-7">
                      Bronx Luggage proudly has been selling luggage collections
                      from Samsonite, Ricardo Beverly Hills, and Delsey luggage
                      for decades. These high quality luggage collections offer
                      soft-sided and hard luggage at a more affordable price
                      point.
                    </p>
                  </div>
                </div>
              </div>

              <div class="media-container-column col-lg-6">
                <div class="row first-row">
                  <div class="card col-sm-12 col-md-6 first-child">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/samsonite-voltage-a-183x275.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card col-sm-12 col-md-6">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/delsey-a-601x601.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row second-row">
                  <div class="card col-sm-12 col-md-6 first-child">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/ricardo-a-300x300.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card col-sm-12 col-md-6">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/ricardo-b-601x799.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class=" features5"
          id="features5-v"
        >
          <div class="container-fluid">
            <h2 class=" main-title align-center pb-5 display-2">
              DELSEY PARIS
            </h2>
            <div class="row justify-content-center content-row">
              <div class="card first-card col-12 col-lg-6">
                <div class="card-wrapper">
                  <div class="card-box">
                    <p class=" first-card-text">
                      Since 1946, DELSEY has been accompanying travelers from
                      all around the world on both their personal and
                      professional travel. The reason for this longevity is
                      quite simply that our irreverent French luggage brand has
                      been combining expertise, design, innovation, elegance and
                      audacity for 7 decades. Discover our world: suitcases,
                      travel bags, backpacks, toiletries bags, satchels and
                      school bags.Bronx Luggage sells a large selection of
                      Delsey luggage.&nbsp; We stock both hard-sided and
                      soft-sided collections in different sizes and multiple
                      colors.&nbsp; Come to the store located at the Festival
                      Marketplace to look at this incredible product line.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div class="media-container-column col-lg-6">
                <div class="row first-row">
                  <div class="card col-sm-12 col-md-6 first-child">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/delsey-a-601x601.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card col-sm-12 col-md-6">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/delsey-b-600x600.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row second-row">
                  <div class="card col-sm-12 col-md-6 first-child">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/delsey-montrouge-2-183x275.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card col-sm-12 col-md-6">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/delsey-st-tropez-1-1-203x248.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="features2"
          id="features2-w"
        >
          <div class="container-fluid">
            <div class="row main align-items-center">
              <div class="col-lg-8">
                <figure class="mbr-figure align-center pt-3">
                  <div class="video-block">
                    <div>
                      <iframe
                        width="725"
                        height="408"
                        src="https://www.youtube.com/embed/f4FC6oHx7cw"
                        title="DELSEY MONTROUGE"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </figure>
              </div>
              <div class="col-lg-4 text-element">
                <div class="text-content">
                  <h3 class="-title align-left display-2">
                    Delsey Montrouge
                  </h3>
                  <div class=" -text">
                    <p class=" first-card-text display-7">
                      Elegant, functional and lightweight, the MONTROUGE
                      collection will make fashion forward travelers feel and
                      look fabulous on the go! The gold metal accents,
                      vegan-leather trim and stylish interior print bring the
                      perfect touches to this feminine collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="features2"
          id="features2-10"
        >
          <div class="container-fluid">
            <div class="row main align-items-center">
              <div class="col-lg-8">
                <figure class="align-center pt-3">
                  <div class="video-block">
                    <div>
                      <iframe
                        width="725"
                        height="408"
                        src="https://www.youtube.com/embed/yewLDYuRi7k"
                        title="DELSEY AIR - the iconic and timeless range!"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </figure>
              </div>
              <div class="col-lg-4 text-element">
                <div class="text-content">
                  <h3 class="-title align-left display-2">
                    Delsey Chatelet Air
                  </h3>
                  <div class=" -text">
                    <p class=" first-card-text display-7">
                      DELSEY CHÂTELET AIR is a complete range, offering
                      backpacks, duffles, suitcases and more. With its unique,
                      refined design, enjoy the perfect matching travel set full
                      of features. Secured with a well organized and deluxe
                      interior, this range will bring your travels experience at
                      an other level!&nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class=" features3 " id="features3-11">
          <div class="container-fluid">
            <h2 class=" main-title align-center pb-5 display-2">
              RICARDO BEVERLY HILLS
            </h2>
            <div class="row justify-content-center content-row">
              <div class="card first-card col-12 col-lg-6">
                <div class="card-wrapper">
                  <div class="card-box">
                    <h2 class="first-card-title display-2">
                      Your Jewelry
                    </h2>
                    <p class=" first-card-text display-7">
                      Ricardo Beverly Hills is a travel lifestyle company on a
                      mission to inspire people to explore the world.&nbsp;
                      Every day and in every way, they work to ensure that they
                      bring joy to the traveling experience.Ricardo Beverly
                      Hills provides durable, extraordinary luggage and travel
                      accessories at a competitive price point to keep you and
                      your family exploring.They offer everything from sizable
                      Ricardo luggage to small cosmetic bags and everything in
                      between. They also carry a large assortment of Stephanie
                      Johnson travel accessories for the chic, fashion-forward
                      traveler. Be sure to check out the many Stephanie Johnson
                      collections that are inspired by beautiful destinations
                      around the globe.Their goal is to inspire each one of
                      their customers to travel the world in which we live, and
                      with our extensive collection of Ricardo luggage,
                      traveling is easier than ever before. No matter where
                      you're going, let them help you get there as your beloved
                      high-end luggage brand.At Bronx Luggage, if we don't have
                      what you are looking for in stock we can order directly
                      from Ricardo and get it within a week.
                    </p>
                  </div>
                </div>
              </div>

              <div class="media-container-column col-lg-6">
                <div class="row first-row">
                  <div class="card col-sm-12 col-md-6 first-child">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/ricardo-malibu-1-225x225.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card col-sm-12 col-md-6">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/ricardo-malibu-2-176x286.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row second-row">
                  <div class="card col-sm-12 col-md-6 first-child">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/ricardo-montecito-3-225x225.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card col-sm-12 col-md-6">
                    <div class="card-wrapper">
                      <div class="card-img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/ricardo-montecito-2-225x225.jpg"
                          }
                          alt="DelseyRicardo"
                          loading="lazy"
                        
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div><Footer /></div>
      </div>
    </>
  );
};

export default FBDelseyRicardo;
