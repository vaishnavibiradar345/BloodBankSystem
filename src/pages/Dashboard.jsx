// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white/90 backdrop-blur border-r p-6 flex flex-col shadow-lg">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-rose-200 flex items-center justify-center shadow">
            <span className="text-rose-700 font-bold text-lg">💉</span>
          </div>
          <div>
            <div className="font-bold text-xl text-rose-700">LifeLine</div>
            <div className="text-xs text-gray-400">Blood Bank</div>
          </div>
        </div>

        <nav className="flex-1 space-y-3">
          <Link to="/" className="block p-3 rounded-lg bg-rose-100 text-rose-700 font-medium shadow-sm">
            Dashboard
          </Link>
          <Link to="/donors" className="block p-3 rounded-lg hover:bg-pink-50">
            Donors
          </Link>
          <Link to="/inventory" className="block p-3 rounded-lg hover:bg-pink-50">
            Inventory
          </Link>
          <Link to="/requests" className="block p-3 rounded-lg hover:bg-pink-50">
            Requests
          </Link>
          <Link to="/drives" className="block p-3 rounded-lg hover:bg-pink-50">
            Drives
          </Link>
          <Link to="/register" className="block p-3 rounded-lg hover:bg-pink-50">
            Register Donor
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-100"></div>
            <div>
              <div className="text-sm font-semibold">Clinic Admin</div>
              <button className="text-xs text-rose-600">Logout</button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-8">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-rose-700">Dashboard</h1>
            <p className="text-sm text-gray-500">Monitor donors, inventory, and requests</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white border px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50">
              🔔 Notifications
            </button>
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
              <div className="h-32 bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg flex items-center justify-center text-gray-400">
                [Chart Placeholder]
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
