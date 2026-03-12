import React from "react";
import { CreditCard, ShieldCheck, Landmark, FileText, Lock } from "lucide-react";

export const metadata = {
  title: "Online Payment Portal | Your School",
  description: "Securely pay tuition, meal plans, and extracurricular fees online.",
};

const paymentMethods = [
  {
    title: "Credit / Debit Card",
    description: "Instant processing via our secure Stripe gateway. Accepts Visa, MasterCard, and Amex.",
    icon: <CreditCard className="text-blue-600 mb-4" size={32} />,
    action: "Pay via Card",
  },
  {
    title: "Bank Transfer (ACH)",
    description: "Direct transfer from your checking or savings account. Zero processing fees.",
    icon: <Landmark className="text-emerald-600 mb-4" size={32} />,
    action: "View Bank Details",
  },
  {
    title: "Parent Portal",
    description: "Log in to view your complete invoice history, set up auto-pay, and manage balances.",
    icon: <FileText className="text-purple-600 mb-4" size={32} />,
    action: "Log In to Portal",
  },
];

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white py-16 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Lock size={16} /> Secure 256-bit Encryption
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Payment Portal
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Manage your student's account securely. Choose your preferred payment method below to settle tuition, transport, or meal plan invoices.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {paymentMethods.map((method, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              {method.icon}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{method.title}</h3>
              <p className="text-slate-600 mb-8 flex-1">{method.description}</p>
              <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 flex items-center gap-6">
          <ShieldCheck className="text-blue-500 shrink-0 hidden md:block" size={48} />
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Need billing assistance?</h3>
            <p className="text-slate-600 mb-4 md:mb-0">
              Our finance office is open Monday to Friday, 8:00 AM to 4:00 PM. 
              Contact us at <span className="font-semibold text-blue-600">billing@yourschool.edu</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}