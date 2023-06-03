import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@app/App/HomePage";
import AppLayout from "@app/shared-components/AppLayout";
import SideBar from "@app/App/SideBar";
import Navbar from "@app/App/Navbar";

export default function AppRouter() {
  return (
    <AppLayout
      Navbar={<Navbar />}
      SideBar={<SideBar />}
      Pages={
        <Routes>
          <Route path="/" index element={<HomePage />} />
        </Routes>
      }
    />
  );
}
