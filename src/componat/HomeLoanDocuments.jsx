import React from 'react';

const HomeLoanDocuments = () => {
    const salariedDocuments = [
        {
            items: [
                "KYC documents such as PAN card, Voter ID Card, Aadhaar Card, Driving License, and Passport",
                "Appointment letter, letter of promotion",
                "Proof of income such as salary slips of the previous 3 months, the latest Form 16, and the last year's IT return",
                "Bank statements for the last 3 months with salary credits",
                "A cheque for the processing fee for the loan application",
                "Property documents such as sale deed, NOC from the builder or housing society, advance payment receipt to the builder, and approved construction plan"
            ]
        }
    ];

    const selfEmployedDocuments = [
        {
            items: [
                "KYC documents such as Voter ID, Driving License, PAN card, Aadhaar Card, and Passport",
                "Business profile and license of the company",
                "Latest Form 26AS",
                "Savings account statement of previous 6 months",
                "ITR with computation of income for previous 3 years as proof of income",
                "Profit & Loss account statements and Balance Sheets for the last 3 years attested by a CA",
                "Memorandum and Articles of Association of the company"
            ]
        },
    ];

    const generalDocuments = [
        { category: "Proof Of Residency", items: ["Aadhaar Card", "Valid Passport"] },
        { category: "Proof Of Income", items: ["Bank Passbook", "Bank statement", "Last 3 years IT Return"] },
        { category: "Proof Of Age", items: ["PAN Card", "Voter ID", "Birth Certificate", "Registration Certificate Of Establishment"] },
        { category: "Proof Of Employment", items: ["Certified Letter from Employee", "Company Memorandum"] }
    ];

    return (
        <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-center mb-4 text-blue-800">
                Documents Required for Home Loans in Jaipur
            </h1>
            <p className=" md:w-[70%] mx-auto  mb-8 ">To avoid any disappointments in getting a housing loan, an applicant must arrange for essential documents for home loan in Jaipur. These are general KYC documents used by lenders to verify the credibility of the applicant based on their age, address, income, property to buy, and bank transaction history.</p>

            <div className="space-y-8 container mx-auto">
                {/* Salaried Applicants */}
                <section className="my-3">
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto bg-white shadow-lg rounded-xl border-collapse">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                <tr>
                                    <th colSpan="2" className="text-xl sm:text-2xl text-start font-semibold p-4">
                                        1. For Salaried Loan Applicants
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {salariedDocuments.map((doc, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                                        <td className="px-4 sm:px-6 py-4 text-base sm:text-lg text-gray-600">
                                            <ul className="list-disc pl-6">
                                                {doc.items.map((item, idx) => (
                                                    <li key={idx} className="text-sm sm:text-base mb-1">{item}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Self-Employed Applicants */}
                <section className="my-3">
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto bg-white shadow-lg rounded-xl border-collapse">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                <tr>
                                    <th colSpan="2" className="text-xl sm:text-2xl font-semibold text-start p-4">
                                        2. For Self-Employed Loan Applicants
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {selfEmployedDocuments.map((doc, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                                        <td className="px-4 sm:px-6 py-4 text-base sm:text-lg text-gray-600">
                                            <ul className="list-disc pl-6">
                                                {doc.items.map((item, idx) => (
                                                    <li key={idx} className="text-sm sm:text-base mb-1">{item}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* General Documents */}
                <section className='my-3'>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto bg-white shadow-lg rounded-xl border-collapse">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                <tr>
                                    <th className=" sm:text-[20px] font-semibold text-start  p-4">Type of Document Required</th>
                                    <th className=" sm:text-[20px]  font-semibold text-start p-4">Examples of Documents that can be Submitted</th>
                                </tr>
                            </thead>
                            <tbody>
                                {generalDocuments.map((doc, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                                        <td className="px-4 sm:px-6 py-4 text-base sm:text-[16px] text-gray-700">{doc.category}</td>
                                        <td className="px-4 sm:px-6 py-4 text-base sm:text-lg text-gray-600">
                                            <div className="flex flex-wrap gap-2 sm:gap-4">
                                                {doc.items.map((item, idx) => (
                                                    <span key={idx} className=" py-1 px-1 rounded-full text-xs sm:text-sm">{item}</span>
                                                ))}
                                            </div>
                                        </td>
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

export default HomeLoanDocuments;
