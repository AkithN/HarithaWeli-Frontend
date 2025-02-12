import React from "react";

const PaymentPage = () => {
  const handlePayment = () => {
    alert("Payment Successful! Thank you for your purchase.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Page</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700">Product 1</span>
            <span className="font-bold">$50</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Product 2</span>
            <span className="font-bold">$100</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>$150</span>
          </div>
        </div>
        <button
          onClick={handlePayment}
          className="w-full bg-blue-500 text-white py-3 rounded-md mt-6 hover:bg-blue-700 transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
