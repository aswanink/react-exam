import React from "react";
import "./../styles/HeroSection.css";
import playIcon from "./../assets/images/play-icon.png"; 
import profileImage from "./../assets/images/img6.jpg";
import pizzaImage from "./../assets/images/img5.webp";
import WhatWeServe from "./WhatWeServe";
import MenuSection from "./MenuSection";
import CustomerReview from "./CustomerReview";
import Delivery from "./Delivery";
import Footer from "./Footer";



const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="tag">More than Faster 🍒</span>
          <h1>Be The Fastest In Delivering Your <span className="highlight">Food</span></h1>
          <p>
            Our job is to fill your tummy with delicious food and with fast and free delivery.
          </p>
          <div className="cta-buttons">
            <button className="get-started">Get Started</button>
            <button className="watch-video">
              <img src={playIcon} alt="Play Video" />
              Watch Video
            </button>
          </div>
          <div className="customer-info">
            <img src={profileImage} alt="Customer" />
            <span>Our Happy Customer</span>
            <span className="rating">⭐ 4.8 (12.5k Review)</span>
          </div>
        </div>
        <div className="hero-image">
          <img src={pizzaImage} alt="Italian Pizza" className="pizza-card" />
          <img src="./../assets/images/girl.png" alt="Eating Girl" className="girl-image" />
        </div>
      </section>

      {/* New Section: What We Serve */}
      <WhatWeServe />  
        {/* New Section: Menu */}
        <MenuSection />
        <CustomerReview />
        <Delivery />
        <Footer />
    
    </>
  );
};

export default HeroSection;
