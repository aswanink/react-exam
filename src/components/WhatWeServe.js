import React from "react";
import "./../styles/WhatWeServe.css";
import orderIcon from "./../assets/images/order.jpg"; 
import deliveryIcon from "./../assets/images/delivery.png"; 
import qualityIcon from "./../assets/images/quality.jpg"; 

const WhatWeServe = () => {
  return (
    <section className="what-we-serve">
      <h3 className="section-title">WHAT WE SERVE</h3>
      <h2 className="main-title">Your Favourite Food Delivery Partner</h2>
      
      <div className="services">
        <div className="service">
          <img src={orderIcon} alt="Easy To Order" />
          <h4>Easy To Order</h4>
          <p>You only need a few steps in ordering food.</p>
        </div>

        <div className="service">
          <img src={deliveryIcon} alt="Fastest Delivery" />
          <h4>Fastest Delivery</h4>
          <p>Delivery that is always on time, even faster.</p>
        </div>

        <div className="service">
          <img src={qualityIcon} alt="Best Quality" />
          <h4>Best Quality</h4>
          <p>Not only fast, but our quality is also number one.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeServe;
