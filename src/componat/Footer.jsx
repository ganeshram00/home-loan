import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Details */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-lg">Phone: +91 123 456 7890</p>
          <p className="text-lg">Email: support@yourcompany.com</p>
        </div>

        {/* Policy Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Policies</h3>
          <ul>
            <li>
              <a href="/privacy-policy" className="text-blue-300 hover:text-blue-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-conditions" className="text-blue-300 hover:text-blue-500">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-800"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-400">
          © 2024 YourCompany. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
