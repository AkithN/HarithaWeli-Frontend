import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import clayPutty from "../Assets/Clay-putty.jpeg";
import clayPlaster from "../Assets/Clay-plaster.jpeg";

const salesData = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 700 },
    { name: "Mar", sales: 500 },
    { name: "Apr", sales: 800 },
    { name: "May", sales: 650 },
    { name: "Jun", sales: 900 },
];

const categoryData = [
    { name: "Clothing", value: 30 },
    { name: "Luggage & Bags", value: 25 },
    { name: "Backpacks", value: 15 },
    { name: "Electronics", value: 20 },
    { name: "Accessories", value: 10 },
];

const newsUpdates = [
    { id: 1, title: "New Order #A206034", time: "10 min ago" },
    { id: 2, title: "New Stock for Product", time: "30 min ago" },
    { id: 3, title: "New Order #A206036", time: "1 hr ago" },
];

const latestOffers = [
    { id: 1, name: "Clay-Putty", image: clayPutty, price: "$50.00" },
    { id: 2, name: "Clay Plaster", image: clayPlaster, price: "$35.00" },
];

const COLORS = ["#FF8042", "#00C49F", "#FFBB28", "#0088FE", "#FF4560"];

const WebDash = () => {
    return (
        <div className="bg-[#1A1A1A] min-h-screen text-white p-10 rounded-t-2xl rounded-b-2xl relative max-w-[2100px] ml-[55px]">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-orange-400">Web Dashboard</h1>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-6 mb-10">
                {["Total Revenue", "Visitors", "Transactions", "Inventory"].map((stat, index) => (
                    <div key={index} className="bg-[#262626] p-5 rounded-lg shadow-md text-center">
                        <h3 className="text-lg text-orange-400 font-medium">{stat}</h3>
                        <p className="text-2xl font-bold text-green-400">{["$2189", "512", "35", "268"][index]}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
                {/* News & Updates */}
                <div className="bg-[#262626] p-6 shadow-md rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg text-orange-400 font-medium">News & Updates</h3>
                        <button className="text-sm text-orange-400">See More</button>
                    </div>
                    <ul>
                        {newsUpdates.map((update) => (
                            <li key={update.id} className="border-b border-gray-600 py-2">
                                <p className="text-white">{update.title}</p>
                                <span className="text-gray-400 text-sm">{update.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Latest Offer Product */}
                <div className="bg-[#262626] p-6 shadow-md rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg text-orange-400 font-medium">Latest Offer Product</h3>

                    </div>
                    <div className="flex gap-6">
                        {latestOffers.map((offer) => (
                            <div key={offer.id} className="bg-[#1A1A1A] p-4 rounded-lg shadow-md text-center">
                                <img src={offer.image} alt={offer.name} className="w-32 h-32 mx-auto rounded-md" />
                                <h4 className="text-md mt-2">{offer.name}</h4>
                                <p className="text-green-400 font-bold">{offer.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Analytics Charts */}
            <div className="grid grid-cols-2 gap-6">
                {/* Sales Analytics */}
                <div className="p-6 bg-[#262626] shadow-md rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg text-orange-400 font-medium">Sales Analytics</h3>
                        <button className="text-sm text-orange-400">See More</button>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={salesData}>
                            <XAxis dataKey="name" stroke="#FFF" />
                            <YAxis stroke="#FFF" />
                            <Tooltip wrapperClassName="text-black" />
                            <Line type="monotone" dataKey="sales" stroke="#FF8042" strokeWidth={3} dot={{ r: 5 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Sales by Category */}
                <div className="p-6 bg-[#262626] shadow-md rounded-lg">
                    <h3 className="text-lg text-orange-400 font-medium mb-4">Sales by Category</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={80}
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend verticalAlign="bottom" wrapperStyle={{ color: "white" }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Order List */}
            <div className="mt-10 bg-[#262626] p-6 shadow-md rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg text-orange-400 font-medium">Order List</h3>
                    <button className="text-sm text-orange-400">See More</button>                </div>
                <table className="w-full text-white">
                    <thead>
                        <tr className="text-left border-b border-gray-600">
                            <th className="p-2">Order ID</th>
                            <th className="p-2">Customer</th>
                            <th className="p-2">Amount</th>
                            <th className="p-2">Payment</th>
                            <th className="p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ["#34132", "Anna Richards", "$450.00", "Card", "Shipped"],
                            ["#34133", "Richard Andrews", "$119.99", "PayPal", "Pending"],
                        ].map((item, index) => (
                            <tr key={index} className="border-b border-gray-600">
                                <td className="p-2">{item[0]}</td>
                                <td className="p-2">{item[1]}</td>
                                <td className="p-2 text-green-400">{item[2]}</td>
                                <td className="p-2">{item[3]}</td>
                                <td className="p-2 text-yellow-400">{item[4]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default WebDash;
