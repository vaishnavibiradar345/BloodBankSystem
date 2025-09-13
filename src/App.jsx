import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Inventory from "./Inventory.jsx";
import Register from "./Register.jsx";
import Donors from "./Donors.jsx";
import Requests from "./Requests.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex bg-[#FBF8F8]">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r p-6 flex flex-col">
          <div className="mb-8 flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center">
              <span className="text-rose-600 font-bold">L</span>
            </div>
            <div>
              <div className="font-bold text-lg">LifeLine</div>
              <div className="text-xs text-gray-400">Blood Bank</div>
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            <Link to="/" className="block p-3 rounded-lg hover:bg-gray-50">
              Dashboard
            </Link>
            <Link to="/donors" className="block p-3 rounded-lg hover:bg-gray-50">
              Donors
            </Link>
            <Link to="/inventory" className="block p-3 rounded-lg hover:bg-gray-50">
              Inventory
            </Link>
            <Link to="/requests" className="block p-3 rounded-lg hover:bg-gray-50">
              Requests
            </Link>
            <Link to="/register" className="block p-3 rounded-lg hover:bg-gray-50">
              Register Donor
            </Link>
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

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
