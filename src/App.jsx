import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Donors from "./pages/Donors";
import Inventory from "./pages/Inventory";
import Requests from "./pages/Requests";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
