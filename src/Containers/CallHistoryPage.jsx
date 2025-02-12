import React, { useState } from "react";
import { Link } from "react-router-dom"; // Added for navigation

const CallHistoryPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [callDetails, setCallDetails] = useState(null);
    const [selectedItem, setSelectedItem] = useState("");
    const [price, setPrice] = useState(""); // Auto-filled price

    const calls = [
        { id: 1, status: "Answered", time: "2025-02-09 10:00 AM" },
        { id: 2, status: "Missed", time: "2025-02-09 10:30 AM" },
    ];

    // Item options with their corresponding prices
    const items = [
        { name: "Dog Food", price: 15.99 },
        { name: "Cat Food", price: 12.50 },
        { name: "Pet Shampoo", price: 8.75 },
        { name: "Chew Toy", price: 5.99 },
    ];

    const handleButtonClick = (call) => {
        setShowForm(true);
        setCallDetails(call);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted!");
    };

    const handleDownloadPDF = () => {
        alert("Download PDF");
    };

    // Handle item selection and auto-fill price
    const handleItemChange = (e) => {
        const selectedItemName = e.target.value;
        setSelectedItem(selectedItemName);

        // Find selected item's price and set it
        const item = items.find((item) => item.name === selectedItemName);
        setPrice(item ? item.price : "");
    };

    return (
        <div className="bg-[#1A1A1A] min-h-screen text-white p-10 rounded-t-2xl rounded-b-2xl relative max-w-[2100px] ml-[55px]">
            <h1 className="text-2xl font-bold text-orange-400 mt-1">Call History </h1>

            <div className="space-y-4">
                {calls.map((call) => (
                    <div key={call.id} className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow-sm bg-[#262626] mt-8">
                        <div>
                            <p className="font-semibold text-lg">{call.status}</p>
                            <p className="text-gray-500">{call.time}</p>
                        </div>
                        <div>
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mr-2"
                                onClick={() => handleButtonClick(call)}
                            >
                                Order confirmation
                            </button>
                            <button
                                className="px-4 py-2 bg-[#FFA500] text-white rounded-md hover:bg-orange-400"
                                onClick={() => handleButtonClick(call)}
                            >
                                Call Back
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showForm && callDetails && (
                <div className="mt-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-[#262626]">
                    <h2 className="text-xl font-semibold mb-4">
                        Inquiry Form for Call - {callDetails.status}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex space-x-4">
                            {/* Item Selection Dropdown */}
                            <div className="w-1/2">
                                <label className="block text-white">Item Name</label>
                                <select
                                    value={selectedItem}
                                    onChange={handleItemChange}
                                    className="w-full p-2 border border-gray-300 rounded-md bg-[#1A1A1A] text-white"
                                    required
                                >
                                    <option value="">Select an item</option>
                                    {items.map((item, index) => (
                                        <option key={index} value={item.name}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Quantity Input */}
                            <div className="w-1/4">
                                <label className="block text-white">Quantity</label>
                                <input
                                    type="number"
                                    className="w-full p-2 border border-gray-300 rounded-md bg-[#1A1A1A] text-white"
                                    min="1"
                                    required
                                />
                            </div>

                            {/* Auto-filled Price Input */}
                            <div className="w-1/4">
                                <label className="block text-white">Price</label>
                                <input
                                    type="text"
                                    value={price}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 rounded-md bg-[#1A1A1A] text-gray-400"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#FFA500] text-white rounded-md hover:bg-orange-400"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>

                    {/* Download PDF Button */}
                    <div className="mt-4 text-center">
                        <button
                            onClick={handleDownloadPDF}
                            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                            Download PDF
                        </button>
                    </div>
                </div>
            )}

            {/* "View Call History" Button Added Below the Inquiry Form (Left-Aligned) */}
            <div className="mt-6 text-left">
                <Link to="/call-history">
                    <button className="px-6 py-3 bg-[#FFA500] text-white rounded-md hover:bg-orange-400">
                        View Call History
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CallHistoryPage;
