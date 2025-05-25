import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4" style={{ backgroundColor: "#3B2F26" }}>
      <h1 className="text-2xl font-bold" style={{ color: "#FAF5E5" }}>
        Unmask.ai<sup className="text-xs">®</sup>
      </h1>
      <div className="flex gap-6">
        <a
          href="https://www.pagi.ai/"
          className="text-sm font-semibold hover:underline"
          style={{ color: "#FAF5E5" }}
        >
          PAGI GEN
        </a>
        <a
          href="/deepware-scanner"
          className="text-sm font-semibold hover:underline"
          style={{ color: "#FAF5E5" }}
        >
          UNMASK.AI SCANNER
        </a>
        <a
          href="/about-us"
          className="text-sm font-semibold hover:underline"
          style={{ color: "#FAF5E5" }}
        >
          ABOUT US
        </a>
      </div>
      <a
        href="/contact-us"
        className="px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90"
        style={{
          backgroundColor: "#3B2F26",
          border: "1px solid #FAF5E5",
          color: "#FAF5E5",
        }}
      >
        CONTACT US
      </a>
    </nav>
  );
};

export default Navbar;
