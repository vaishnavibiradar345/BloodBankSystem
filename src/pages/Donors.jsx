import React from "react";

function Donors() {
  return (
    <div className="min-h-screen bg-[#FBF8F8] p-8">
      <h1 className="text-2xl font-bold mb-6">Donors</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Registered Donors</h3>
          <input
            className="border rounded-lg p-2"
            placeholder="Search donors..."
          />
        </div>

        <table className="w-full text-left">
          <thead className="text-sm text-gray-500">
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Blood Type</th>
              <th className="py-2">Contact</th>
              <th className="py-2">Last Donation</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t hover:bg-rose-50">
              <td className="py-2">Alice Donor</td>
              <td>A+</td>
              <td>+91 9876543210</td>
              <td>Oct 10, 2025</td>
            </tr>
            <tr className="border-t hover:bg-rose-50">
              <td className="py-2">John Smith</td>
              <td>O-</td>
              <td>+91 9123456789</td>
              <td>Sep 20, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Donors;
