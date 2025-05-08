"use client";

import AdminDashboardPage from "@/components/dashboard/admin-dashboard/admin-dashboard";
import LearnerDashboardPage from "@/components/dashboard/learner-dashboard/learner-dashboard";
import TrainerDashboardPage from "@/components/dashboard/trainer-dashboard/trainer-dashboard";
import React, { useState } from "react";

const Dashboard = () => {
  const [role, setRole] = useState("ADMIN"); // Set default role to ADMIN

  if (role === "ADMIN") {
    return <AdminDashboardPage />;
  } else if (role === "TRAINER") {
    return <TrainerDashboardPage />;
  } else if (role === "LEARNER") {
    return <LearnerDashboardPage />;
  }
  return null;
};

export default Dashboard;
