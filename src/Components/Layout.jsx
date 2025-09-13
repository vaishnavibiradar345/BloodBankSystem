import React from "react";
import Sidebar from "./Sidebar"; // 👈 we’ll also move sidebar into its own file

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <Sidebar />
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
