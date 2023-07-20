import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./../layouts/ScrollToTop";
import Header from "./../layouts/Header";
import Footer from "./../layouts/Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Pricing from "./Pricing";
import BlogList from "./BlogList";
import BlogGrid from "./BlogGrid";
import BlogDetails from "./BlogDetails";
import ContactUs from "./ContactUs";
import BackToTopButton from "../components/BackToTopButton";
import Staking from "./Staking";
import Faq from "./Faq";

function Index() {
  return (
    <BrowserRouter>
      <div className="page-wraper">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/pricing" exact element={<Pricing />} />
          <Route path="/blog-list" exact element={<BlogList />} />
          <Route path="/staking" exact element={<Staking />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/blog" exact element={<BlogGrid />} />
          <Route path="/blog-details" exact element={<BlogDetails />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
        </Routes>
        {/* back to button here */}
        <BackToTopButton/>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
export default Index;
