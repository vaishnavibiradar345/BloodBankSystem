import React, { useState } from "react";

export default function Requests() {
  const [requests, setRequests] = useState([
    { patient: "Emma Wilson", blood: "A+", date: "Mar 12, 2025", status: "Pending" },
    { patient: "Liam Brown", blood: "O-", date: "Mar 5, 2025", status: "Fulfilled" },
    { patient: "Sophia Johnson", blood: "B+", date: "Feb 25, 2025", status: "Pending" },
  ]);

  const addRequest = () => {
    setRequests([
      ...requests,
      { patient: "New Patient", blood: "AB-", date: "Today", status: "Pending" },
    ]);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-rose-700">Requests</h1>
        <button
          onClick={addRequest}
          className="bg-rose-500 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-600"
        >
          + Add Request
        </button>
      </div>

      <table className="w-full text-left bg-white rounded-xl shadow">
        <thead className="text-sm text-gray-500">
          <tr>
            <th className="py-3 px-4">Patient</th>
            <th className="py-3 px-4">Blood Type</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((r, i) => (
            <tr key={i} className="border-t hover:bg-rose-50">
              <td className="py-3 px-4">{r.patient}</td>
              <td>{r.blood}</td>
              <td>{r.date}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    r.status === "Fulfilled"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
