import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Donors() {
  const [search, setSearch] = useState("");
  const donors = [
    { name: "Alice Donor", blood: "A+", lastDonation: "Oct 10, 2025", status: "Active" },
    { name: "John Smith", blood: "O-", lastDonation: "Sep 21, 2025", status: "Pending" },
    { name: "Mary Jane", blood: "B+", lastDonation: "Aug 11, 2025", status: "Active" },
  ];

  const filtered = donors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.blood.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-rose-700">Donors</h1>
        <Link
          to="/register"
          className="bg-rose-500 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-600"
        >
          + Add Donor
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search donors..."
        className="border rounded-lg p-2 w-full md:w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full text-left bg-white rounded-xl shadow">
        <thead className="text-sm text-gray-500">
          <tr>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Blood</th>
            <th className="py-3 px-4">Last Donation</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((d, i) => (
            <tr key={i} className="border-t hover:bg-rose-50">
              <td className="py-3 px-4">{d.name}</td>
              <td>{d.blood}</td>
              <td>{d.lastDonation}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    d.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {d.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
