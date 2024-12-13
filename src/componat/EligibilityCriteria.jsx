import React from 'react';

const EligibilityCriteria = () => {
  return (
    <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-extrabold text-center mb-6 text-blue-800">
        Eligibility Criteria for Home Loans in Jaipur
      </h1>
      <p className="md:w-[70%] mx-auto mb-8 text-sm md:text-base text-gray-600">
        The best banks in Jaipur offer easy home loans to both salaried and self-employed applicants based on certain eligibility criteria. While the criteria may vary from one bank or NBFC to another, they typically check the applicant's age, nationality, employment status, minimum income, and CIBIL score.
      </p>

      {/* Table for Eligibility Parameters */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-xl border-collapse">
          <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <tr>
              <th className="px-6 py-3 border border-blue-300 text-left text-sm font-medium">Eligibility Parameters</th>
              <th className="px-6 py-3 border border-blue-300 text-left text-sm font-medium">Salaried Individuals</th>
              <th className="px-6 py-3 border border-blue-300 text-left text-sm font-medium">Self-Employed Individuals</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-50">
              <td className="px-6 py-4 text-sm text-blue-700 border font-semibold border-blue-300">Citizenship</td>
              <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">Indian</td>
              <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">Indian</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 text-sm text-blue-700 border font-semibold border-blue-300">Professional Experience</td>
              <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">Total experience of more than 2 years and minimum 1 year in current employment</td>
              <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">Total experience of more than 2 years and minimum 1 year in current employment</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-6 py-4 text-sm text-blue-700 border font-semibold border-blue-300">Age</td>
              <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">Min: 21 years<br />Max: 70 years</td>
              <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">Min: 21 years<br />Max: 70 years</td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 text-sm text-blue-700 border font-semibold border-blue-300">Monthly Income</td>
              <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">Minimum Rs. 1,80,000 per annum</td>
              <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">Minimum Rs. 1,80,000 per annum</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-6 py-4 text-sm text-blue-700 border font-semibold border-blue-300">CIBIL Score</td>
              <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">750+ (preferred)</td>
              <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">750+ (preferred)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm md:text-base text-gray-700 mt-4">
        <strong>Note:</strong> Applicants are encouraged to declare any additional sources of income to boost their chances of getting a home loan approval.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Key Points to Remember</h3>
      <ul className="list-disc pl-6 text-sm md:text-base text-gray-700">
        <li>Applicants must be Indian residents.</li>
        <li>The ideal age range for both salaried and self-employed applicants is between 21 and 70 years.</li>
        <li>Salaried applicants must have more than 2 years of total experience and at least 1 year in the current employment.</li>
        <li>Self-employed applicants must show at least 3 years of business continuity.</li>
        <li>Both salaried and self-employed applicants must have a CIBIL score of more than 750 to qualify for a home loan.</li>
      </ul>

      <p className="text-sm md:text-base text-gray-700 mt-4">
        <strong>Note:</strong> The eligibility criteria defined above are subject to variation from one bank or NBFC to another. It is advisable to check the specific eligibility requirements with the bank or financial institution where you are applying for a home loan.
      </p>
    </div>
  );
};

export default EligibilityCriteria;
