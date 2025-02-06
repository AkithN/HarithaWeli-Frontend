import React from "react";
import {
    ShoppingCartOutlined,
    TeamOutlined,
    UndoOutlined,
} from "@ant-design/icons";

const CallCenterDash = () => {
    return (
        <div className="bg-[#0A1025] min-h-screen text-white p-10">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Call Center Dashboard</h1>
               
            </div>

            {/* Metrics Section */}
            <div className="grid grid-cols-4 gap-6 mb-10">
                <div className="bg-[#121A3A] p-5 rounded-lg shadow-md text-center">
                    <ShoppingCartOutlined className="text-4xl text-green-400" />
                    <p className="text-lg">Monthly Sales</p>
                    <p className="text-green-400">LKR 100000</p>
                </div>

                <div className="bg-[#121A3A] p-5 rounded-lg shadow-md text-center">
                    <ShoppingCartOutlined className="text-4xl text-red-400" />
                    <p className="text-lg">Today Sales</p>
                    <p className="text-red-400">LKR 10000</p>
                </div>

                <div className="bg-[#121A3A] p-5 rounded-lg shadow-md text-center">
                    <TeamOutlined className="text-4xl text-green-400" />
                    <p className="text-lg">Visitors</p>
                </div>

                <div className="bg-[#121A3A] p-5 rounded-lg shadow-md text-center">
                    <UndoOutlined className="text-4xl text-red-400" />
                    <p className="text-lg">Refunded</p>
                    <p className="text-red-400">LKR 10000</p>
                </div>
            </div>

            {/* Stock Section */}
            <div className="grid grid-cols-4 gap-6">
                {[
                    { name: "PUTTY", stock: 100, color: "text-red-400" },
                    { name: "BRICK BOND", stock: 50000, color: "text-green-400" },
                    { name: "TILE BOND", stock: 55000, color: "text-green-400" },
                    { name: "READY MIX PLASTER", stock: 65000, color: "text-green-400" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#121A3A] p-5 rounded-lg shadow-md text-center"
                    >
                        <img src={`/${item.name}.png`} alt={item.name} className="h-20 mx-auto mb-3" />
                        <p className="text-lg font-semibold">{item.name}</p>
                        <p className={`${item.color} font-medium`}>Available Stock {item.stock}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CallCenterDash;
