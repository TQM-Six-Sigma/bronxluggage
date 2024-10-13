import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import FeatureBrand from "./components/FeatureBrand";
import FBBrics from "./components/FBBrics";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BronxFilter from "./components/BronxFilter";
import FBDelseyParis from "./components/FBDelseyParis";
import FBBriggRiley from "./components/FBBriggRiley";
import FBDelseyRicardo from "./components/FBDelseyRicardo";
import FBSamsonite from "./components/FBSamsonite";
import FBTravelPro from "./components/FBTravelPro";
import Sitemap from "./components/Sitemap";

const App = () => {
  return (
    <>
      <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/featuredBrands" element={<FeatureBrand />} />
            <Route path="/fbBrics" element={<FBBrics />} />
            <Route path="/fbDelseyParis" element={<FBDelseyParis />} />
            <Route path="/fbBriggRiley" element={<FBBriggRiley />} />
            <Route path="/fbDelseyRicardo" element={<FBDelseyRicardo />} />
            <Route path="/fbSamsonite" element={<FBSamsonite />} />
            <Route path="/fbTravelPro" element={<FBTravelPro />} />
            <Route path="/bronxFilter" element={<BronxFilter />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
};

export default App;
