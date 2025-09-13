import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-rose-100 border-r p-6 flex flex-col">
      <div className="mb-8 flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-rose-200 flex items-center justify-center font-bold text-rose-700">
          L
        </div>
        <div>
          <div className="font-bold text-lg text-rose-800">LifeLine</div>
          <div className="text-xs text-gray-600">Blood Bank</div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        <Link className="block p-3 rounded-lg hover:bg-rose-200" to="/">
          Dashboard
        </Link>
        <Link className="block p-3 rounded-lg hover:bg-rose-200" to="/donors">
          Donors
        </Link>
        <Link className="block p-3 rounded-lg hover:bg-rose-200" to="/inventory">
          Inventory
        </Link>
        <Link className="block p-3 rounded-lg hover:bg-rose-200" to="/requests">
          Requests
        </Link>
        <Link className="block p-3 rounded-lg hover:bg-rose-200" to="/register">
          Register Donor
        </Link>
      </nav>
    </aside>
  );
}
