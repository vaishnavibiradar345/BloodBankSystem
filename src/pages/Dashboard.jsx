import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FBF8F8] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 flex flex-col">
        <div className="mb-8 flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-rose-600">{/* icon */}</svg>
          </div>
          <div>
            <div className="font-bold text-lg">LifeLine</div>
            <div className="text-xs text-gray-400">Blood Bank</div>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          <a className="flex items-center gap-3 p-3 rounded-lg bg-rose-50 text-rose-700">
            Dashboard
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            Donors
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            Inventory
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            Requests
          </a>
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
            Drives
          </a>
        </nav>

        <div className="mt-auto pt-6 border-t">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100"></div>
            <div>
              <div className="text-sm font-semibold">Clinic Admin</div>
              <div className="text-xs text-gray-400">Logout</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Top bar */}
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#0F172A]">Dashboard</h1>
            <p className="text-sm text-gray-500">
              Monitor inventory, donations and requests
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white border rounded-lg px-4 py-2">
              Notifications
            </button>
            <button className="bg-rose-500 text-white px-4 py-2 rounded-lg">
              + Add Donor
            </button>
          </div>
        </header>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-sm text-gray-500">Total Donors</div>
            <div className="text-2xl font-bold">1,234</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-sm text-gray-500">Blood Units</div>
            <div className="text-2xl font-bold">584</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-sm text-gray-500">Pending Requests</div>
            <div className="text-2xl font-bold">23</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-sm text-gray-500">Upcoming Drives</div>
            <div className="text-2xl font-bold">3</div>
          </div>
        </div>

        {/* Critical Alerts */}
        <div className="bg-rose-50 border border-rose-100 rounded-lg p-6 mb-6">
          <div className="font-semibold text-rose-700">Critical Alerts</div>
          <ul className="mt-3 text-sm text-rose-600">
            <li>Low stock alert: B-</li>
            <li>Low stock alert: AB-</li>
          </ul>
        </div>

        {/* Main grid (table + side cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table (span 2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Donor List</h3>
              <input
                className="border rounded-lg p-2"
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
                {/* more rows */}
              </tbody>
            </table>
          </div>

          {/* Right column cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="font-semibold mb-2">Blood Type Distribution</div>
              {/* small chart placeholder */}
              <div className="h-32 bg-gray-50 rounded"></div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="font-semibold mb-2">Upcoming Drives</div>
              <ul className="text-sm text-gray-600">
                <li>Clinic Drive • Mar 15 • 09:00</li>
                <li>University Drive • Apr 2 • 10:00</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
