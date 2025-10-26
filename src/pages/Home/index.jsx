import React from "react";
import Banner from "./Components/banner";
import Services from "./Components/Services";
import AboutSection from "./Components/AboutSecction";
import DownloadApp from "./Components/DownloadApp";
import Products from "./Components/Products";
import Features from "./Components/Features";
import Screenshoots from "./Components/Screenshoots";
import Testimonials from "./Components/Testimonials";
import CallToAction from "./Components/CTA";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <AboutSection />
      <DownloadApp />
      <Products />
      <Features />
      <Screenshoots />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
