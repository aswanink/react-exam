import React, { useState } from "react";
import "./../styles/MenuSection.css";
import pizza1 from "./../assets/images/pizza1.jpg";
import pizza2 from "./../assets/images/pizza2.jpg";

const menuItems = [
  { name: "Burger", icon: "🍔" },
  { name: "Pizza", icon: "🍕" },
  { name: "Cupcake", icon: "🧁" },
  { name: "Ramen", icon: "🍜" },
  { name: "Ice Cream", icon: "🍦" },
];

const MenuSection = () => {
  const [activeItem, setActiveItem] = useState("Pizza");

  return (
    <section className="menu-section">
      <h3 className="section-title">OUR MENU</h3>
      <h2 className="main-title">Menu That Always </h2>
      <h2 className="main-title">Makes You Fall In Love</h2>

      <div className="menu-container">
        {/* Sidebar Menu */}
        <div className="menu-list">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`menu-item ${activeItem === item.name ? "active" : ""}`}
              onClick={() => setActiveItem(item.name)}
            >
              <span className="icon">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>

        {/* Food Cards */}
        <div className="menu-cards">
          <div className="menu-card">
            <img src={pizza1} alt="Italian Pizza" />
            <div className="menu-info">
              <h4>Italian Pizza</h4>
              <p>$7.49</p>
              <button className="order-now">Order Now </button>
            </div>
          </div>

          <div className="menu-card">
            <img src={pizza2} alt="Sausage Pizza" />
            <div className="menu-info">
              <h4>Sausage Pizza</h4>
              <p>$6.59</p>
              <button className="order-now">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
