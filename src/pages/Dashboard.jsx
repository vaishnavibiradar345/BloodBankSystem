// src/pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Bell, UserPlus, Activity, Droplet, ClipboardList, Calendar } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col shadow-sm">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center">
            <Droplet className="text-white w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-xl text-red-700">LifeLine</div>
            <div className="text-xs text-gray-500">Blood Bank</div>
          </div>
        </div>

        <nav className="flex-1 space-y-2 text-gray-700 font-medium">
          <Link to="/" className="block p-2 rounded hover:bg-red-50 text-red-700 font-semibold">
            Dashboard
          </Link>
          <Link to="/donors" className="block p-2 rounded hover:bg-gray-100">Donors</Link>
          <Link to="/inventory" className="block p-2 rounded hover:bg-gray-100">Inventory</Link>
          <Link to="/requests" className="block p-2 rounded hover:bg-gray-100">Requests</Link>
          <Link to="/drives" className="block p-2 rounded hover:bg-gray-100">Drives</Link>
          <Link to="/register" className="block p-2 rounded hover:bg-gray-100">Register</Link>
        </nav>

        <div className="mt-auto pt-6 border-t">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div>
              <div className="text-sm font-semibold">Clinic Admin</div>
              <button className="text-xs text-red-600 hover:underline">Logout</button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-8">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">Monitor donors, inventory, and requests</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded hover:bg-gray-50">
              <Bell className="w-4 h-4 text-gray-600" /> Notifications
            </button>
            <Link
              to="/register"
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              <UserPlus className="w-4 h-4" /> Add Donor
            </Link>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded p-6 border shadow-sm">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Activity className="w-4 h-4 text-red-600" /> Total Donors
            </div>
            <div className="text-3xl font-bold text-red-700 mt-2">1,234</div>
          </div>
          <div className="bg-white rounded p-6 border shadow-sm">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Droplet className="w-4 h-4 text-red-600" /> Blood Units
            </div>
            <div className="text-3xl font-bold text-red-700 mt-2">584</div>
          </div>
          <div className="bg-white rounded p-6 border shadow-sm">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <ClipboardList className="w-4 h-4 text-red-600" /> Pending Requests
            </div>
            <div className="text-3xl font-bold text-red-700 mt-2">23</div>
          </div>
          <div className="bg-white rounded p-6 border shadow-sm">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Calendar className="w-4 h-4 text-red-600" /> Upcoming Drives
            </div>
            <div className="text-3xl font-bold text-red-700 mt-2">3</div>
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-red-50 border border-red-200 rounded p-6">
          <div className="font-semibold text-red-700 flex items-center gap-2">
            ⚠️ Critical Alerts
          </div>
          <ul className="mt-3 text-sm text-red-700 space-y-1">
            <li>Low stock alert: B-</li>
            <li>Low stock alert: AB-</li>
          </ul>
        </div>

        {/* Donor Table + Right Column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table */}
          <div className="lg:col-span-2 bg-white rounded border shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Donor List</h3>
              <input
                className="border rounded p-2 text-sm"
                placeholder="Search donors..."
              />
            </div>

            <table className="w-full text-left border-t">
              <thead className="text-sm text-gray-600">
                <tr>
                  <th className="py-3">Name</th>
                  <th className="py-3">Blood</th>
                  <th className="py-3">Last Donation</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-t hover:bg-gray-50">
                  <td className="py-4">Alice Donor</td>
                  <td>A+</td>
                  <td>Oct 10, 2025</td>
                  <td>
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-50">
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
            <div className="bg-white rounded border shadow-sm p-6">
              <div className="font-semibold mb-2 text-gray-800">
                Blood Type Distribution
              </div>
              <div className="h-32 flex items-center justify-center text-gray-400 border rounded">
                [Chart Placeholder]
              </div>
            </div>

            <div className="bg-white rounded border shadow-sm p-6">
              <div className="font-semibold mb-2 text-gray-800">Upcoming Drives</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>City Hospital • Mar 15 • 09:00</li>
                <li>University Drive • Apr 2 • 10:00</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
