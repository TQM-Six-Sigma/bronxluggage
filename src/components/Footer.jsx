import Ticker from "./Ticker";
import '../css/Footer.css';
const Footer = () => {
    return ( 
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <ul className="list-unstyled">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <ul className="list-unstyled">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <ul className="list-unstyled">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className="row mt-auto">
                    <div className="col-12 text-center text-white">
                        Copyright &copy; 2024. All Rights Reserved.
                        <br /><br /><br />
                        <Ticker />
                    </div>
                </div>
            </div>
        </footer>    );
}
export default Footer;