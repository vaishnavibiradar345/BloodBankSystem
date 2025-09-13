import React from "react";

function Requests() {
  return (
    <div className="min-h-screen bg-[#FBF8F8] p-8">
      <h1 className="text-2xl font-bold mb-6">Blood Requests</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full text-left">
          <thead className="text-sm text-gray-500">
            <tr>
              <th className="py-2">Hospital / Clinic</th>
              <th className="py-2">Blood Type</th>
              <th className="py-2">Units</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t hover:bg-rose-50">
              <td className="py-2">City Hospital</td>
              <td>B-</td>
              <td>3</td>
              <td>
                <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="border-t hover:bg-rose-50">
              <td className="py-2">Sunrise Clinic</td>
              <td>O+</td>
              <td>5</td>
              <td>
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                  Approved
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Requests;
