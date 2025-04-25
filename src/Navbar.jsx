import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800">Unmask.ai<sup className="text-xs">®</sup></h1>
      <div className="flex gap-6">
        <a href="https://www.pagi.ai/" className="text-sm font-semibold text-gray-600 hover:text-red-500">PAGI GEN</a>
        <a href="/deepware-scanner" className="text-sm font-semibold text-gray-600 hover:text-red-500">UNMASK.AI SCANNER</a>
        <a href="/about-us" className="text-sm font-semibold text-gray-600 hover:text-red-500">ABOUT US</a>
      </div>
      <a href="/contact-us" className="border border-gray-600 px-4 py-2 rounded-md text-sm font-semibold text-gray-800 hover:bg-gray-100">
        CONTACT US
      </a>
    </nav>
  );
};

export default Navbar;