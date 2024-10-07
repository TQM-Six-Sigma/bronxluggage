import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import FeatureBrand from "./components/FeatureBrand";
import FBBrics from "./components/FBBrics";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import FBAffordableBrands from "./components/FBAffordableBrands";
import FBBriggRiley from "./components/FBBriggRiley";
import FBDelseyRicardo from "./components/FBDelseyRicardo";
import FBSamsonite from "./components/FBSamsonite";
import FBTravelPro from "./components/FBTravelPro";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/featuredBrands" element={<FeatureBrand />} />
            <Route path="/fbBrics" element={<FBBrics />} />
            <Route
              path="/fbAffordableBrands"
              element={<FBAffordableBrands />}
            />
            <Route path="/fbBriggRiley" element={<FBBriggRiley />} />
            <Route path="/fbDelseyRicardo" element={<FBDelseyRicardo />} />
            <Route path="/fbSamsonite" element={<FBSamsonite />} />
            <Route path="/fbTravelPro" element={<FBTravelPro />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
