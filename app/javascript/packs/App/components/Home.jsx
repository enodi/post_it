import React from "react";

import Header from "./Common/Header";
import Hero from "./Common/Hero";
import Footer from "./Common/Footer";
import MainSection from "./LandingPage/MainSection";
import AboutSection from "./LandingPage/AboutSection";

const Home = () => (
  <div>
    <Header />
    <Hero />
    <MainSection />
    <AboutSection />
    <Footer />
  </div>
)

export default Home;
