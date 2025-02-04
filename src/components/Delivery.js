import React from "react";
import { FaPlay, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import profileImage from "./../assets/images/profile.jpg";
import foodDelivery from "./../assets/images/food-delivery.jpg";
import burger from "./../assets/images/burger.jpg";
import pizza from "./../assets/images/pizza.jpg";
import cupcake from "./../assets/images/cupcake.jpg";
import "../styles/Delivery.css"; // Importing CSS

const Delivery = () => {
  return (
    <section className="delivery-container">
      {/* Left Side */}
      <div className="delivery-left">
        <span className="download-text">DOWNLOAD APP</span>
        <h1 className="delivery-title">
          Get Started With <span>Fudo</span> Today!
        </h1>
        <p className="delivery-description">
          Discover food wherever and whenever, and get your food delivered quickly.
        </p>

        {/* Buttons */}
        <div className="delivery-buttons">
          <button className="app-button">Get The App</button>
        </div>

        {/* Delivery Person Info */}
        <div className="courier-info">
          <img src={profileImage} alt="Courier" />
          <div>
            <p className="courier-name">Richard Watson</p>
            <p className="courier-role">Food Courier</p>
          </div>
          <FaPhone className="phone-icon" />
        </div>
      </div>

      {/* Right Side */}
      <div className="delivery-right">
        <div className="delivery-card">
          <div className="location">
            <FaMapMarkerAlt />
            <span>California, US</span>
            <img src={profileImage} alt="User" className="profile-icon" />
          </div>
          <div className="fast-delivery">
            <img src={foodDelivery} alt="Food Delivery" />
            <div className="fast-delivery-text">
              <h3>The Fastest In Delivery Food</h3>
              <button className="order-now">Order Now</button>
            </div>
          </div>

          {/* Categories */}
          <div className="categories">
            <div className="category">
              <img src={burger} alt="Burger" />
              <span>Burger</span>
            </div>
            <div className="category">
              <img src={pizza} alt="Pizza" />
              <span>Pizza</span>
            </div>
            <div className="category">
              <img src={cupcake} alt="Cupcake" />
              <span>Cupcake</span>
            </div>
          </div>

          {/* Popular Items */}
          <div className="popular-items">
            <span>Popular Now</span>
            <div className="popular-food">
              <img src={burger} alt="Burger" />
              <img src={burger} alt="Burger" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
