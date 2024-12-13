import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12">
          हमारा लोन प्राप्त करने की प्रक्रिया बहुत आसान और पारदर्शी है। यहाँ जानें कि कैसे आप हमारे लोन के लिए आवेदन कर सकते हैं।
        </p>

        {/* Step-by-step Process */}
        <div className="space-y-12">
          <div className="flex items-center justify-center space-x-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-48">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Step 1</h3>
              <p className="text-lg text-gray-600">आवेदन भरें।</p>
            </div>
            <div className="bg-gray-300 w-12 h-1"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-48">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Step 2</h3>
              <p className="text-lg text-gray-600">दस्तावेज़ जमा करें।</p>
            </div>
            <div className="bg-gray-300 w-12 h-1"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-48">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Step 3</h3>
              <p className="text-lg text-gray-600">अप्रूवल प्राप्त करें।</p>
            </div>
            <div className="bg-gray-300 w-12 h-1"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-48">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Step 4</h3>
              <p className="text-lg text-gray-600">फंड प्राप्त करें।</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
