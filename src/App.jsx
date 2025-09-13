import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequestBlood from "./pages/RequestBlood";
import Donate from "./pages/Donate";
import Inventory from "./pages/Inventory";
import FAQ from "./pages/FAQ";
import Nearby from "./pages/Nearby";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-red-600 text-white p-4 flex justify-between">
        <div className="font-bold">SmartBBMS</div>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/request">Request</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/nearby">Nearby</Link>
        </div>
      </nav>

      {/* Pages */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/request" element={<RequestBlood />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/nearby" element={<Nearby />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        © 2025 Smart Blood Bank | Emergency: 1-800-BLOOD-HELP
      </footer>
    </div>
  );
}
