import React, { useState } from 'react';
import { FaDollarSign, FaPercentage, FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';

const HomeLoan = () => {
    const [loanAmount, setLoanAmount] = useState(10000000); // Default loan amount ₹1 crore
    const [interestRate, setInterestRate] = useState(6); // Default interest rate 6%
    const [loanTenure, setLoanTenure] = useState(1); // Default loan tenure 1 year

    const calculateEMI = () => {
        const principal = loanAmount;
        const rate = interestRate / 12 / 100;
        const tenure = loanTenure * 12;

        const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
        const totalPayment = emi * tenure;
        const totalInterest = totalPayment - principal;

        return {
            emi: emi.toFixed(2),
            totalPayment: totalPayment.toFixed(2),
            totalInterest: totalInterest.toFixed(2),
        };
    };

    const { emi, totalPayment, totalInterest } = calculateEMI();

    // Calculate progress based on the total payment, with ₹1 billion as the max value.
    const progress = Math.min((parseFloat(totalPayment) / 1000000000) * 100, 100);

    return (
        <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-blue-200 rounded-xl shadow-xl">
            <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-900">Home Loans in Jaipur</h2>

            <p className="text-lg md:w-[70%] m-auto text-gray-700 mb-6">
                Jaipur, the Pink City, is home to a booming real estate industry. Affordable residential properties, rapidly growing infrastructure, and appealing rentals make it a prime location for aspiring homeowners. With top banks and NBFCs offering home loans starting at an interest rate of 8.45% per annum, buying a dream home in Jaipur has become more accessible. The maximum repayment tenure is up to 30 years, with processing fees typically ranging between 0.25% - 0.50% of the loan amount.
            </p>

            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
                {/* Left Section - Form */}
                <div className="flex-1 bg-white shadow-2xl rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-center text-blue-800 mb-4 lg:text-3xl">Home Loan EMI Calculator</h3>
                    <p className='text-center p-2 text-lg text-gray-500 mb-6'>Avoid confusion. Get it right with BASIC.</p>
                    <div className="flex flex-col space-y-6">
                        {/* Loan Amount */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="loanAmount" className="text-lg text-blue-700">Loan Amount (₹)</label>
                                <div className="flex items-center border-b-2 border-blue-300">
                                    <FaRupeeSign className="text-gray-700 mr-2" />
                                    <input
                                        type="number"
                                        id="loanAmount"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                                        className="p-3 mt-2 bg-transparent border-none focus:outline-none focus:ring-0 transition-all w-full text-right text-lg"
                                        min="100000"
                                        max="100000000"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 mt-2">
                                <input
                                    type="range"
                                    id="loanAmountSlider"
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                                    className="w-full"
                                    min="100000"
                                    max="100000000"
                                />
                            </div>
                            <div className="text-gray-700 mt-2 text-center flex justify-between text-sm">
                                <span>₹1 Lac </span> <span>₹10 crore</span>
                            </div>
                        </div>

                        {/* Interest Rate */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="interestRate" className="text-lg text-blue-700">Interest Rate (% P.A.)</label>
                                <div className="flex items-center border-b-2 border-blue-300">
                                    <FaPercentage className="text-gray-700 mr-2" />
                                    <input
                                        type="number"
                                        id="interestRate"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                                        className="p-3 bg-transparent mt-2 border-none focus:outline-none focus:ring-0 transition-all w-full text-right text-lg"
                                        step="0.1"
                                        min="0"
                                        max="20"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mt-2">
                                <input
                                    type="range"
                                    id="interestRateSlider"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                                    className="w-full"
                                    min="0"
                                    max="20"
                                    step="0.1"
                                />
                            </div>
                            <div className="text-gray-700 mt-2 text-center flex justify-between text-sm">
                                <span>0% </span> <span>20% </span>
                            </div>
                        </div>

                        {/* Loan Tenure */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="loanTenure" className="text-lg text-blue-700">Loan Tenure (Years)</label>
                                <div className="flex items-center border-b-2 border-blue-300">
                                    <FaCalendarAlt className="text-gray-700 mr-2" />
                                    <input
                                        type="number"
                                        id="loanTenure"
                                        value={loanTenure}
                                        onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                                        className="p-3 bg-transparent mt-2 border-none focus:outline-none focus:ring-0 transition-all w-full text-right text-lg"
                                        min="1"
                                        max="30"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mt-2">
                                <input
                                    type="range"
                                    id="loanTenureSlider"
                                    value={loanTenure}
                                    onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                                    className="w-full"
                                    min="1"
                                    max="30"
                                    step="1"
                                />
                            </div>
                            <div className="text-gray-700 mt-2 text-center flex justify-between text-sm">
                                <span>1 </span> <span>30</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Output */}
                <div className="flex-1 bg-white shadow-2xl rounded-xl p-6">
                    <h4 className="text-xl md:text-2xl font-bold text-center text-blue-800 underline mb-4">Break up of Total Payment</h4>

                    <div className="flex flex-col gap-4 sm:w-[300px] m-auto">
                        <p className="text-lg text-gray-700">Your monthly EMI is <strong>₹ {emi}</strong></p>
                        <p className="text-lg text-gray-700">Total Interest: <strong>₹{totalInterest}</strong></p>
                        <p className="text-lg text-gray-700">Principal Amount: <strong>₹{loanAmount}</strong></p>
                    </div>

                    {/* Circular Progress Bar */}
                    <div className="mt-6 flex flex-col items-center">
                        <p className="text-lg font-semibold md:text-xl pb-3">Progress towards Total Payable</p>
                        <svg
                            className="w-[50%] h-[50%] sm:w-[300px] sm:h-[300px]"
                            viewBox="0 0 36 36"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="18"
                                cy="18"
                                r="15.915"
                                fill="none"
                                stroke="#e6e6e6"
                                strokeWidth="3"
                            />
                            <circle
                                cx="18"
                                cy="18"
                                r="15.915"
                                fill="none"
                                stroke="#1E3A8A"
                                strokeWidth="3"
                                strokeDasharray={`${progress * 2 * Math.PI * 15.915 / 100}, ${2 * Math.PI * 15.915}`}
                                strokeLinecap="round"
                                transform="rotate(-90 18 18)"
                            />
                            <text
                                x="50%"
                                y="50%"
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                fontSize="3"
                                fill="black"
                                dy=".3em"
                            >
                                ₹{totalPayment}
                            </text>
                        </svg>

                        <p className="text-center mt-2">{progress.toFixed(2)}% of ₹1 billion</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLoan;
