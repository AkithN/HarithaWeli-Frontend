import React from "react";
import { Link } from "react-router-dom";
import {
    ShoppingCartOutlined,
    TeamOutlined,
    UndoOutlined,
} from "@ant-design/icons";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, PieChart, Pie, Cell
} from "recharts";

const serviceLevelData = [
    { name: "Answerd Calls", value: 60, color: "#00C49F" }, // Green
    { name: "Missed Calls", value: 20, color: "#FFBB28" }, // Yellow

];

const callResolutionData = [
    { name: "Sun", value: 30 },
    { name: "Mon", value: 50 },
    { name: "Tue", value: 80 },
    { name: "Wed", value: 90 },
    { name: "Thu", value: 100 },
    { name: "Fri", value: 70 },
    { name: "Sat", value: 60 }
];

const outboundCallData = [
    { name: "Sat", value: 10 },
    { name: "Sun", value: 15 },
    { name: "Mon", value: 20 },
    { name: "Tue", value: 30 },
    { name: "Wed", value: 25 },
    { name: "Thu", value: 18 },
    { name: "Fri", value: 22 }
];

const holdTimeData = [
    { id: "ID-437B", inbound: 2, outbound: 11, internal: 2, total: 15, answered: 7, missed: 5, avgCallTime: "00:06:19" },
    { id: "ID-706C", inbound: 5, outbound: 18, internal: 5, total: 28, answered: 7, missed: 2, avgCallTime: "00:05:31" },
    { id: "ID-917A", inbound: 3, outbound: 4, internal: 3, total: 10, answered: 6, missed: 1, avgCallTime: "00:08:48" }
];

const CallCenterDash = () => {
    return (
        <div className="bg-[#1A1A1A] min-h-screen text-white p-10 rounded-t-2xl rounded-b-2xl relative max-w-[2100px] ml-[55px]">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-orange-400">Call Center </h1>
            </div>

            {/* Metrics Section */}
            <div className="grid grid-cols-4 gap-6 mb-10">
                <div className="bg-[#262626] p-5 rounded-lg shadow-md text-center">
                    <ShoppingCartOutlined className="text-4xl text-green-400" />
                    <p className="text-lg">Monthly Sales</p>
                    <p className="text-green-400">LKR 100000</p>
                </div>

                <div className="bg-[#262626] p-5 rounded-lg shadow-md text-center">
                    <ShoppingCartOutlined className="text-4xl text-orange-400" />
                    <p className="text-lg">Today Sales</p>
                    <p className="text-orange-400">LKR 10000</p>
                </div>

                <div className="bg-[#262626] p-5 rounded-lg shadow-md text-center">
                    <TeamOutlined className="text-4xl text-green-400" />
                    <p className="text-lg">Visitors</p>
                </div>

                <div className="bg-[#262626] p-5 rounded-lg shadow-md text-center">
                    <UndoOutlined className="text-4xl text-orange-400" />
                    <p className="text-lg">Refunded</p>
                    <p className="text-orange-400">LKR 10000</p>
                </div>
            </div>

            {/* Graph Sections */}
            <div className="grid grid-cols-2 gap-6">
                {/* First Call Resolution */}
                <div className="bg-[#262626] p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-orange-400 mb-4">First Call Resolution</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={callResolutionData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" stroke="#FFFFFF" />
                            <YAxis stroke="#FFFFFF" />
                            <Tooltip />
                            <Bar dataKey="value" fill="#FFA500" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Outbound Call Metrics */}
                <div className="bg-[#262626] p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-green-400 mb-4">Outbound Call Metrics</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={outboundCallData}>
                            <XAxis dataKey="name" stroke="#FFFFFF" />
                            <YAxis stroke="#FFFFFF" />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#FFA500" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Service Level */}
                <div className="bg-[#262626] p-6 rounded-lg shadow-md flex items-center">
                    <div className="w-1/2">
                        <h2 className="text-lg font-semibold text-white mb-4">Service Level</h2>
                        <ul className="text-sm">
                            <li className="text-[#00C49F] font-semibold">
                                ● <Link to="/call-history" className="underline hover:text-green-300">Answered Calls: 60%</Link>
                            </li>
                            <li className="text-[#FFBB28] font-semibold">
                                ● <Link to="/call-history" className="underline hover:text-yellow-300">Missed Calls: 20%</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="w-1/2">
                        <ResponsiveContainer width="100%" height={150}>
                            <PieChart>
                                <Pie
                                    data={serviceLevelData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%" cy="50%"
                                    outerRadius={50}
                                >
                                    {serviceLevelData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Hold Time Section - Keeping it as requested */}
                <div className="bg-[#262626] p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-white mb-4">Hold Time</h2>
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="text-[#FFA500]">
                                <th>ID</th>
                                <th>Inbound</th>
                                <th>Outbound</th>
                                <th>Internal</th>
                                <th>Total</th>
                                <th>Answered</th>
                                <th>Missed</th>
                                <th>Avg Call Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {holdTimeData.map((row, index) => (
                                <tr key={index} className="border-b border-gray-600">
                                    <td>{row.id}</td>
                                    <td>{row.inbound}</td>
                                    <td>{row.outbound}</td>
                                    <td>{row.internal}</td>
                                    <td>{row.total}</td>
                                    <td>{row.answered}</td>
                                    <td>{row.missed}</td>
                                    <td>{row.avgCallTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CallCenterDash;
