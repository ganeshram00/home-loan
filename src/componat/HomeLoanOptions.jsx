import React from 'react';

const HomeLoanOptions = () => {
  const loanOptions = [
    {
      loanType: 'Home Purchase Loan',
      description: 'To purchase residential housing such as flat/apartment'
    },
    {
      loanType: 'Plot Purchase Loan',
      description: 'To purchase a land or plot, where construction will be completed within a fixed period'
    },
    {
      loanType: 'Home Construction Loan',
      description: 'To construct a home on an already purchased plot'
    },
    {
      loanType: 'Home Improvement Loan',
      description: 'To renovate the house by wiring, painting, and other activities'
    },
    {
      loanType: 'Home Extension Loan',
      description: 'To add another floor, room, or balcony in an already existing home'
    },
    {
      loanType: 'Pre-Approved Home Loan',
      description: 'To existing customers help meet financial obligations'
    },
    {
      loanType: 'Balance Transfer Home Loan',
      description: 'To transfer the existing loan amount to a new lending party offering a lower rate of interest'
    },
    {
      loanType: 'Top-Up Loan',
      description: 'To help the borrower meet personal and professional financial needs'
    }
  ];

  return (
    <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg">
      <h2 className="lg:text-3xl md:text-2xl text-[20px] font-extrabold text-center mb-4 text-blue-800">
        Home Loan Options Available in Jaipur
      </h2>
      <p className="md:w-[70%] mx-auto mb-8 text-[16px] text-gray-600">
        Options are galore when it comes to finding banks and housing finance companies in Jaipur for a home loan. The table below highlights the common types of home loan options available for aspiring homeowners who want to buy a home in Jaipur:
      </p>

      <div className="space-y-8">
        {/* Table for Home Loan Options */}
        <section className="my-3">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-lg rounded-xl border-collapse">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <tr>
                  <th className="px-6 py-3 border border-blue-300 text-left text-sm font-medium">Type of Document Required</th>
                  <th className="px-6 py-3 border border-blue-300 text-left text-sm font-medium">The Object of the Loan</th>
                </tr>
              </thead>
              <tbody>
                {loanOptions.map((loan, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                    <td className="px-6 py-4 text-sm text-blue-700 border font-semibold border-blue-300">{loan.loanType}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 border border-blue-300">{loan.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeLoanOptions;
