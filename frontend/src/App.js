import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import "@/index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      <Toaster
        theme="dark"
        position="top-right"
        toastOptions={{
          style: {
            background: "#2C060A",
            color: "#F4EAD9",
            border: "1px solid rgba(201,162,39,0.4)",
            borderRadius: "2px",
          },
        }}
      />
    </BrowserRouter>
  );
}
