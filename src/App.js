import { BrowserRouter,Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import FeatureBrand from "./components/FeatureBrand";
import FBBrics from "./components/FBBrics";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import FBAffordableBrands from "./components/FBAffordableBrands";
import FBBriggRiley from "./components/FBBriggRiley";
import FBDelseyRicardo from "./components/FBDelseyRicardo";
import FBSamsonite from "./components/FBSamsonite";
import FBTravelPro from "./components/FBTravelPro";

/**
 * The main app component, which handles client-side routing for the app.
 *
 * The app renders a BrowserRouter component, which wraps a Routes component.
 * The Routes component renders a series of Route components, which specify
 * the component to render for a given path. The paths are as follows:
 *
 * - /
 * - /about
 * - /gallery
 * - /blog
 * - /featuredBrands
 * - /fbBrics
 * - /fbAffordableBrands
 * - /fbBriggRiley
 * - /fbDelseyRicardo
 * - /fbSamsonite
 * - /fbTravelPro
 * - /content
 * - /footer
 * - /navbar
 *
 * If no path matches, the app renders the Home component.
 */
const App = () => {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/featuredBrands" element={<FeatureBrand />} />
          <Route path="/fbBrics" element={<FBBrics />} />
          <Route path="/fbAffordableBrands" element={<FBAffordableBrands />} />
          <Route path="/fbBriggRiley" element={<FBBriggRiley />} />
          <Route path="/fbDelseyRicardo" element={<FBDelseyRicardo />} />
          <Route path="/fbSamsonite" element={<FBSamsonite />} />
          <Route path="/fbTravelPro" element={<FBTravelPro />} />
          <Route path="/content" element={<Content />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/navbar" element={<Navbar />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
   </>
    
  );
};

export default App;


