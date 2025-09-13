import React from "react";

const Drives = () => {
  const upcoming = [
    { name: "Clinic Drive", date: "Mar 15, 2025", time: "09:00 AM" },
    { name: "University Drive", date: "Apr 2, 2025", time: "10:00 AM" },
  ];

  const past = [
    { name: "Community Hall Drive", date: "Jan 20, 2025", collected: 120 },
    { name: "Corporate Drive", date: "Dec 10, 2024", collected: 90 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-rose-600">Blood Donation Drives</h2>

      {/* Upcoming Drives */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="font-semibold text-lg mb-3">Upcoming Drives</h3>
        <ul className="space-y-2 text-gray-700">
          {upcoming.map((drive, index) => (
            <li key={index} className="p-3 border rounded-lg hover:bg-rose-50">
              <div className="font-semibold">{drive.name}</div>
              <div className="text-sm text-gray-500">
                {drive.date} • {drive.time}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Past Drives */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="font-semibold text-lg mb-3">Past Drives</h3>
        <ul className="space-y-2 text-gray-700">
          {past.map((drive, index) => (
            <li key={index} className="p-3 border rounded-lg hover:bg-gray-50">
              <div className="font-semibold">{drive.name}</div>
              <div className="text-sm text-gray-500">
                {drive.date} • Collected: {drive.collected} units
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drives;
