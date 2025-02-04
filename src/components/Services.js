import React from "react";

const Services = () => {
  const services = [
    { title: "Easy To Order", description: "Only a few steps to order." },
    { title: "Fastest Delivery", description: "Always on time." },
    { title: "Best Quality", description: "Premium food quality." },
  ];

  return (
    <section className="py-10">
      <h2 className="text-center text-3xl font-bold">Your Favourite Food Delivery Partner</h2>
      <div className="flex justify-center mt-6 space-x-10">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
