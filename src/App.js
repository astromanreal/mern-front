import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Fixnav from "./components/Navbar/Navbar.js/Fixnav";
import Navbar from "./components/Navbar/Navbar.js/Navbar";
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import About from "./components/pages/About";
import Connect from "./components/pages/Connect";
import Nothing from "./components/pages/Nothing";
import Blogs from "./components/pages/Blogs";
import Footer from "./components/Navbar/Navbar.js/Footer";
import Admin from "./components/pages/Admin";
import Community from "./components/pages/Community";
import Templepage from "./components/temples/Templepage";
import Tirtankarpage from "./components/tirthankar/Tirthankarpage";
import TirthankarDetails from "./components/tirthankar/TirthankarDetails";
import TempleDetails from "./components/temples/TempleDetails";
import BlogDetails from "./components/Blogs/BlogDetails";
import CommunityDetails from "./components/community/CommunityDetails";
import Sikharji from "./components/pages/Sikharji";
import Jainism from "./components/pages/Jainism";
import {
  JainFeatureArt,
  JainFeaturePhilosophy,
  JainFeaturePractices,
  JainFeaturePrinciples,
} from "./components/jainism/JainFeaturePage";
import {
  SikharjiFeatureBlogSlider,
  SikharjiFeatureHotel,
  SikharjiFeatureMountain,
  SikharjiFeatureTemple,
  SikharjiFeatureTonk,
} from "./components/sikharji/SikharjiPage";
import Donate from "./components/pages/Donate";

function App() {
  return (
    <>
      <Navbar />
      <Fixnav />

      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="explore" element={<Explore />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="community" element={<Community />} />
        <Route path="temple" element={<Templepage />} />
        <Route path="tirthankar" element={<Tirtankarpage />} />

        <Route path="sikharji" element={<Sikharji />} />
        <Route path="sikharji/mountain" element={<SikharjiFeatureMountain />} />
        <Route path="sikharji/temples" element={<SikharjiFeatureTemple />} />
        <Route path="sikharji/tonks" element={<SikharjiFeatureTonk />} />
        <Route path="sikharji/hotels" element={<SikharjiFeatureHotel />} />
        <Route path="sikharji/blogs" element={<SikharjiFeatureBlogSlider />} />

        <Route path="jainism" element={<Jainism />} />
        <Route path="jainism/art" element={<JainFeatureArt />} />
        <Route path="jainism/philosophy" element={<JainFeaturePhilosophy />} />
        <Route path="jainism/practices" element={<JainFeaturePractices />} />
        <Route path="jainism/principle" element={<JainFeaturePrinciples />} />

        <Route path="tirthankar-details/:id" element={<TirthankarDetails />} />
        <Route path="temple-details/:id" element={<TempleDetails />} />
        <Route path="blog-details/:id" element={<BlogDetails />} />
        <Route path="community-details/:id" element={<CommunityDetails />} />

        <Route path="about" element={<About />} />
        <Route path="connect" element={<Connect />} />
        <Route path="donate" element={<Donate />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<Nothing />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
