import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AdmissionPage() {
  // In a real app, fetch the role from your Auth state/session context
  const currentRole = "Admin";

  return (
    <DashboardLayout pageTitle="Admission Panel" role={currentRole}>
      {/* Main Content Rendered inside the standard layout */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">New Admissions</h2>
        <p className="text-slate-600">Admission form and data tables go here...</p>
      </div>
    </DashboardLayout>
  );
}