import React from "react";
import "./../styles/CustomerReview.css";
import reviewerImage from "./../assets/images/review.jpg"; // Replace with actual image
import chefImage from "./../assets/images/chef.webp"; // Replace with actual image

const CustomerReview = () => {
  return (
    <section className="customer-review">
      <div className="review-left">
        <img src={chefImage} alt="Chef" className="chef-image" />
      </div>
      
      <div className="review-right">
        <span className="tag">WHAT THEY SAY</span>
        <h2>What Our Customer Say About Us</h2>
        <p>
          “Fudo is the best. Besides the many and delicious meals, 
          the service is also very good, especially in the very fast delivery. 
          I highly recommend Fudo to you.”
        </p>
        
        <div className="reviewer">
          <img src={reviewerImage} alt="Theresa Jordan" />
          <div>
            <h4>Theresa Jordan</h4>
            <span>Food Enthusiast</span>
          </div>
        </div>

        <div className="stars">⭐ 4.8</div>
      </div>
    </section>
  );
};

export default CustomerReview;
