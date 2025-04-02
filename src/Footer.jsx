import React from "react";
const Footer = ()=> {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-400">deepware</h2>
          </div>
          
          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 className="text-white font-semibold">COMPANY</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Deepfakes Timeline</a></li>
                <li><a href="#" className="hover:text-white">Knowledge Center</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Media Center</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Address and Legal Links */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-xs flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">Adress: Icerenkoy Mah. Quick Tower No:8-10d Atasehir/Istanbul - 2025 &copy; Deepware A.S. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
