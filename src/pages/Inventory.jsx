import React from "react";

function Inventory() {
  return (
    <div className="min-h-screen bg-[#FBF8F8] p-8">
      <h1 className="text-2xl font-bold mb-6">Blood Inventory</h1>

      {/* Cards showing blood units */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow text-center">
          <div className="text-sm text-gray-500">O+</div>
          <div className="text-2xl font-bold text-rose-600">120</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow text-center">
          <div className="text-sm text-gray-500">A+</div>
          <div className="text-2xl font-bold text-rose-600">95</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow text-center">
          <div className="text-sm text-gray-500">B+</div>
          <div className="text-2xl font-bold text-rose-600">65</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow text-center">
          <div className="text-sm text-gray-500">AB+</div>
          <div className="text-2xl font-bold text-rose-600">40</div>
        </div>
      </div>

      {/* Expiry table */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold mb-4">Expiry Details</h3>
        <table className="w-full text-left">
          <thead className="text-sm text-gray-500">
            <tr>
              <th className="py-2">Blood Type</th>
              <th className="py-2">Units</th>
              <th className="py-2">Expiry Date</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t">
              <td className="py-2">O+</td>
              <td>12</td>
              <td>Mar 25, 2025</td>
            </tr>
            <tr className="border-t">
              <td className="py-2">A+</td>
              <td>8</td>
              <td>Apr 2, 2025</td>
            </tr>
            <tr className="border-t">
              <td className="py-2">B+</td>
              <td>5</td>
              <td>Apr 15, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
