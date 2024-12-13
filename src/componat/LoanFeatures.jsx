import React from "react";

const LoanFeatures = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Loan Features Title */}
        <div className="mb-12">
          <h2 className="lg:text-3xl md:text-2xl text-[20px] font-extrabold text-center mb-6 text-blue-800">
            Loan Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Loan Benefits */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Loan Benefits</h3>
              <ul className="text-lg text-gray-600 space-y-4">
                <li>✔ Competitive Interest Rates</li>
                <li>✔ Flexible Repayment Options</li>
                <li>✔ Quick Approval</li>
                <li>✔ No Hidden Charges</li>
                <li>✔ Prepayment and Foreclosure Options</li>
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Eligibility Criteria</h3>
              <ul className="text-lg text-gray-600 space-y-4">
                <li>✔ Age between 21-65 years</li>
                <li>✔ Minimum monthly income of ₹25,000</li>
                <li>✔ Indian resident</li>
                <li>✔ Minimum 1 year in current employment (Salaried)</li>
                <li>✔ Minimum 3 years in business (Self-employed)</li>
              </ul>
            </div>

            {/* Documentation Requirements */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Documentation Requirements</h3>
              <ul className="text-lg text-gray-600 space-y-4">
                <li>✔ Proof of Identity (Aadhar/Passport/Driving License)</li>
                <li>✔ Address Proof (Utility Bill/Bank Statement)</li>
                <li>✔ Latest Salary Slips/Income Proof</li>
                <li>✔ Bank Statements (Last 6 months)</li>
                <li>✔ Property Documents (for Home Loans)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanFeatures;
