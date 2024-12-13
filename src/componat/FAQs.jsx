import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing the icons

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const faqs = [
    {
      question: "Can I get a 100% home loan from a bank in Jaipur?",
      answer: "No bank or NBFC offers a 100% home loan in Jaipur. An eligible applicant can expect a home loan of up to 90% of the property cost from the top banks in Jaipur."
    },
    {
      question: "How to get a home loan easily in Jaipur?",
      answer: "You can apply for a home loan in Jaipur online by visiting the lender's official website or by visiting the nearest branch. Alternatively, you may contact the  Home Loan team to get assistance in the home loan application procedure."
    },
    {
      question: "What is the maximum home loan allowed in Jaipur?",
      answer: "Some top banks and NBFCs in Jaipur offer home loans up to Rs. 5 crores based on the eligibility and repayment history of the applicant."
    },
    {
      question: "What is the age limit for a home loan?",
      answer: "Generally, many banks and NBFCs offer home loans to applicants aged between 21 to 70 years. However, this may vary depending on whether the applicant is salaried or self-employed."
    },
    {
      question: "How do banks decide loan amounts in Jaipur?",
      answer: "Banks in Jaipur have their pre-determined eligibility criteria for lending home loans to applicants. These are general eligibility criteria like age, nationality, CIBIL score, employment status, and minimum income of the applicant."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle FAQ visibility
  };

  return (
    <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-center mb-4 text-blue-800 underline">
       FAQs
      </h2>
      <div className="space-y-4 sm:w-[80%] m-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl">
            <button
              className="w-full text-left px-6 py-4 text-lg font-semibold text-blue-700 bg-white hover:bg-blue-200 focus:outline-none rounded-t-xl flex items-center justify-between"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              {/* Add the dropdown icon */}
              {openIndex === index ? (
                <FaChevronUp className="text-blue-700" />
              ) : (
                <FaChevronDown className="text-blue-700" />
              )}
            </button>
            {openIndex === index && (
              <div className="md:px-6 px-2 py-4 text-gray-600 bg-white text-[16px] rounded-b-xl">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
