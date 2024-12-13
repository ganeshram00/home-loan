import React, { useState } from 'react';
// Import icons from react-icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form submitted', formData);
  };

  return (
    <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-indigo-800 mb-6">Contact Us</h2>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold w-full hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Our Contact Information</h3>
          <p className="text-lg text-gray-600 mb-4">
            We would love to hear from you! Feel free to reach out to us using the details below:
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-lg text-indigo-700 font-semibold mr-4">📍</span>
              <span className="text-lg text-gray-600">1234, ABC Street, Jaipur, India</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg text-indigo-700 font-semibold mr-4">📞</span>
              <span className="text-lg text-gray-600">+91 9876543210</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg text-indigo-700 font-semibold mr-4">✉️</span>
              <span className="text-lg text-gray-600">info@yourcompany.com</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              <FaFacebook size={32} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              <FaTwitter size={32} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              <FaLinkedin size={32} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
