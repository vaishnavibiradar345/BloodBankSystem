// src/pages/Drives.jsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const drives = {
  current: [
    { id: 1, name: "Red Cross Mega Camp", date: "2025-09-20", location: "Delhi" },
    { id: 2, name: "Youth Club Donation Drive", date: "2025-09-25", location: "Mumbai" },
  ],
  past: [
    { id: 3, name: "College Blood Drive", date: "2025-07-10", location: "Bangalore" },
    { id: 4, name: "Independence Day Camp", date: "2025-08-15", location: "Chennai" },
  ],
};

export default function Drives() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Current Drives</CardTitle>
        </CardHeader>
        <CardContent>
          {drives.current.length > 0 ? (
            <ul className="list-disc ml-5">
              {drives.current.map((drive) => (
                <li key={drive.id}>
                  <strong>{drive.name}</strong> — {drive.date} ({drive.location})
                </li>
              ))}
            </ul>
          ) : (
            <p>No current drives</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Past Drives</CardTitle>
        </CardHeader>
        <CardContent>
          {drives.past.length > 0 ? (
            <ul className="list-disc ml-5">
              {drives.past.map((drive) => (
                <li key={drive.id}>
                  <strong>{drive.name}</strong> — {drive.date} ({drive.location})
                </li>
              ))}
            </ul>
          ) : (
            <p>No past drives</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
