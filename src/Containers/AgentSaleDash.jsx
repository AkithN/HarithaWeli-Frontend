import React, { useState } from "react";

const AgentSaleDash = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (selectedItem && quantity && price) {
      const total = (price - discount) * quantity;
      setItems([
        ...items,
        { item: selectedItem, quantity, price, discount, total },
      ]);
      // Clear input fields
      setSelectedItem("");
      setQuantity("");
      setPrice("");
      setDiscount("");
    } else {
      alert("Please fill all required fields!");
    }
  };

  return (
    <div className="p-8 bg-[#10172F] min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6">Add Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block mb-2">Select Item</label>
          <select
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
            className="w-full p-2 rounded bg-[#0A1025] border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select Items</option>
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 rounded bg-[#0A1025] border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Quantity"
          />
        </div>
        <div>
          <label className="block mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 rounded bg-[#0A1025] border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Price"
          />
        </div>
        <div>
          <label className="block mb-2">Discount</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full p-2 rounded bg-[#0A1025] border border-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Discount"
          />
        </div>
      </div>
      <button
        onClick={handleAddItem}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
      >
        Add
      </button>

      <h3 className="text-xl font-bold mt-10 mb-4">All Items</h3>
      <table className="w-full table-auto bg-[#0A1025] border border-gray-500 text-white">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-3">Item</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Price</th>
            <th className="p-3">Discount</th>
            <th className="p-3">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="p-3">{item.item}</td>
              <td className="p-3">{item.quantity}</td>
              <td className="p-3">LKR {item.price}</td>
              <td className="p-3">LKR {item.discount}</td>
              <td className="p-3">LKR {item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentSaleDash;
