import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-blue-800 mb-6">About Us</h2>

        {/* Introduction Section */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-4">
            We are a leading company dedicated to providing the best home loan services in Jaipur. Our team is committed to making the process of securing a home loan easy and efficient.
          </p>
          <p className="text-lg text-gray-600">
            With years of experience, we ensure our clients get personalized support throughout their loan application journey.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600">
            Our mission is to empower individuals and families to achieve their dream of owning a home. We provide transparent, flexible, and hassle-free home loan solutions, backed by a team of experts who understand your needs.
          </p>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-700 mb-2">John Doe</h4>
            <p className="text-lg text-gray-600">CEO & Founder</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Jane Smith</h4>
            <p className="text-lg text-gray-600">Lead Loan Officer</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Michael Lee</h4>
            <p className="text-lg text-gray-600">Customer Support Head</p>
          </div>
        </div>

        {/* Company History Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Journey</h3>
          <p className="text-lg text-gray-600">
            Founded in 2010, we started with a mission to simplify the home loan process. Over the years, we have grown into a trusted partner for thousands of customers seeking home loans in Jaipur. We continue to innovate and offer the best solutions for every customer.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default AboutUs;
