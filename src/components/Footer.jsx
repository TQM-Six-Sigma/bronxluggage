import { Link } from "react-router-dom";
import Ticker from "./Ticker";
import "../css/Footer.css";
const Footer = () => {
  return (
    <footer className="footer mt-3 py-3 bg-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 ">
            <img
              style={{ width: "auto", height: "200px" }}
              src={process.env.PUBLIC_URL + "/images/logoAptechFPT1999.png"}
              alt="logoAptech"
            />
          </div>
          <div className="col-md-4  d-flex justify-content-center">
            <ul className="list-unstyled">
              <li>
                <Link to="/sitemap">Site Map</Link>
              </li>
              <li>
                <Link to="/">- Home</Link>
              </li>
              <li>
                <Link to="/bronxFilter">- Search</Link>
              </li>
              <li>
                <Link to="/gallery">- Gallery</Link>
              </li>
              <li>
                <Link to="/blog">- Blog</Link>
              </li>
              <li>
                <Link to="/aboutUs">- About Us</Link>
              </li>
              <li>
                <Link to="/contactUs">- Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 ">
            <iframe
              title="FPT Aptech CMT8"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3241473192493!2d106.66363827688237!3d10.786466689362975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752feb31e24595%3A0xb3d6bce53f82a7c9!2sFPT%20Aptech!5e0!3m2!1sen!2sus!4v1728794961909!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              data-gtm-yt-inspected-6="true"
              data-gtm-yt-inspected-63="true"
            ></iframe>
          </div>
        </div>
        <br />
        <div className="row mt-auto">
          <div className="col-12 text-center text-white">
            Copyright &copy; 2024. All Rights Reserved.
          </div>
        </div>
        <div>
          <Ticker />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
