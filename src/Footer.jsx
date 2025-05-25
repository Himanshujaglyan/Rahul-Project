import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-gray-300 py-8"
      style={{ backgroundColor: "#3B2F26" }} // Matching navbar dark brown background
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-[#FAF5E5]">Unmask.ai</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="text-[#FAF5E5] font-semibold">COMPANY</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-[#FAF5E5]">About Us</a></li>
                <li><a href="#" className="hover:text-[#FAF5E5]">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#FAF5E5]">Blog</a></li>
                <li><a href="#" className="hover:text-[#FAF5E5]">Deepfakes Timeline</a></li>
                <li><a href="#" className="hover:text-[#FAF5E5]">Knowledge Center</a></li>
                <li><a href="#" className="hover:text-[#FAF5E5]">FAQ</a></li>
                <li><a href="#" className="hover:text-[#FAF5E5]">Media Center</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-[#FAF5E5] pt-4 text-xs flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-[#FAF5E5]">
            Address: Icerenkoy Mah. Quick Tower No:8-10d Atasehir/Istanbul - 2025 &copy; Unmask.ai A.S. All rights reserved.
          </p>
          <div className="flex gap-1 text-[#FAF5E5]">
            <a
              href="https://www.instagram.com/unmask.ai1?igsh=eHE3MDB3ZWQxdzBy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF5E5] text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@codeprojects220?si=zNla50H4BDBV8syj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF5E5] text-xl"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#FAF5E5]">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF5E5]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
