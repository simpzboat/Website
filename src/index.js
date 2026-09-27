import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Animals
} from "./components";
// Blog and Skills pages are hidden for now.
// import { Blog } from "./components";
// import Skills from "./components/Skills";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/animals" element={<Animals />} />
      {/* Blog and Skills pages are hidden for now.
      <Route path="/blog" element={<Blog />} />
      <Route path="/skills" element={<Skills />} />
      */}
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
