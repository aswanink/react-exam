import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-red-500">Fudo</h1>
      <ul className="flex space-x-6">
        <li className="hover:text-red-500 cursor-pointer">Why Fudo?</li>
        <li className="hover:text-red-500 cursor-pointer">Services</li>
        <li className="hover:text-red-500 cursor-pointer">Menu</li>
        <li className="hover:text-red-500 cursor-pointer">Contact</li>
      </ul>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Login</button>
    </nav>
  );
};

export default Navbar;
