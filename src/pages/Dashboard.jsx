// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const bloodData = [
  { name: "A+", value: 40 },
  { name: "O+", value: 35 },
  { name: "B+", value: 15 },
  { name: "AB+", value: 10 },
];

const COLORS = ["#ef4444", "#f97316", "#22c55e", "#3b82f6"];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex">
      {/* Main Content */}
      <main className="flex-1 p-10 space-y-8">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-rose-700">Dashboard</h1>
      
          </div>
          <div className="flex gap-3">
          
            <Link
              to="/register"
              className="bg-rose-500 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-600"
            >
              + Add Donor
            </Link>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
            <div className="text-sm text-gray-500">Total Donors</div>
            <div className="text-3xl font-bold text-rose-700">1,234</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
            <div className="text-sm text-gray-500">Blood Units</div>
            <div className="text-3xl font-bold text-rose-700">584</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
            <div className="text-sm text-gray-500">Pending Requests</div>
            <div className="text-3xl font-bold text-rose-700">23</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
            <div className="text-sm text-gray-500">Upcoming Drives</div>
            <div className="text-3xl font-bold text-rose-700">3</div>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-rose-100 border border-rose-200 rounded-xl p-6">
          <div className="font-semibold text-rose-700">⚠️ Critical Alerts</div>
          <ul className="mt-3 text-sm text-rose-600 space-y-1">
            <li>Low stock alert: B-</li>
            <li>Low stock alert: AB-</li>
          </ul>
        </div>

        {/* Donor Table + Right Column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Donor List</h3>
              <input
                className="border rounded-lg p-2 text-sm"
                placeholder="Search donors..."
              />
            </div>

            <table className="w-full text-left">
              <thead className="text-sm text-gray-500">
                <tr>
                  <th className="py-3">Name</th>
                  <th className="py-3">Blood</th>
                  <th className="py-3">Last Donation</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t hover:bg-rose-50">
                  <td className="py-4">Alice Donor</td>
                  <td>A+</td>
                  <td>Oct 10, 2025</td>
                  <td>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-t hover:bg-rose-50">
                  <td className="py-4">John Smith</td>
                  <td>O-</td>
                  <td>Sep 21, 2025</td>
                  <td>
                    <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="font-semibold mb-2 text-gray-800">
                Blood Type Distribution
              </div>
              <div className="h-48">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={bloodData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      label
                    >
                      {bloodData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <div className="font-semibold mb-2 text-gray-800">Upcoming Drives</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>🏥 Clinic Drive • Mar 15 • 09:00</li>
                <li>🎓 University Drive • Apr 2 • 10:00</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
