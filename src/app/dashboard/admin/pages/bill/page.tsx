import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout"; // Adjust path as needed

export default function BillPage() {
  // In a real application, fetch this from your auth provider/session
  const currentRole = "Admin";

  return (
    <DashboardLayout pageTitle="Bill Management" role={currentRole}>
      {/* The DashboardLayout already handles the main padding and container width, 
        so we just drop your header and card directly in here! 
      */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-2">
          Bill Management
        </h1>
        <p className="text-slate-500">
          Generate student fee invoices and manage payment records.
        </p>
      </div>

      {/* Your shadcn-style card */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 bg-white">
        <p className="text-slate-600">
          Billing data tables, invoice generation forms, and payment histories will go here...
        </p>
      </div>
    </DashboardLayout>
  );
}