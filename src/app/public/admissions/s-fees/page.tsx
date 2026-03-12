import React from "react";
import { CreditCard, Award, Info } from "lucide-react";

export const metadata = {
  title: "Fees & Scholarships | Admissions",
  description: "Information on tuition fees, payment plans, and scholarship opportunities.",
};

const feeTiers = [
  { level: "Primary School", grades: "Grades 1-5", amount: "$12,500", color: "border-emerald-200 bg-emerald-50 text-emerald-700" },
  { level: "Middle School", grades: "Grades 6-8", amount: "$14,000", color: "border-blue-200 bg-blue-50 text-blue-700" },
  { level: "High School", grades: "Grades 9-12", amount: "$16,500", color: "border-purple-200 bg-purple-50 text-purple-700" },
];

export default function FeesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-slate-500 mb-6 font-medium">
            Admissions <span className="mx-2">/</span> <span className="text-blue-600">Fees & Scholarships</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <CreditCard size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Tuition & Fees</h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We view education as an investment in your child's future. Our tuition structure is comprehensive, covering core academics, standard extracurriculars, and technology access.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        {/* Tuition Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {feeTiers.map((tier, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className={`p-4 border-b ${tier.color}`}>
                <h3 className="text-xl font-bold">{tier.level}</h3>
                <span className="text-sm opacity-90">{tier.grades}</span>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl font-black text-slate-900 mb-2">{tier.amount}</div>
                <div className="text-slate-500 text-sm mb-6">per academic year</div>
                <button className="w-full py-2 px-4 rounded-lg border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 transition-colors">
                  View Breakdown
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scholarships Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8">
          <div className="p-6 bg-white/10 rounded-full shrink-0">
            <Award size={48} className="text-amber-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Scholarships & Financial Aid</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              We are committed to making our education accessible to talented students regardless of their financial background. We offer both merit-based scholarships and need-based financial aid.
            </p>
            <button className="bg-amber-400 text-amber-950 px-6 py-3 rounded-full font-bold hover:bg-amber-300 transition-colors">
              Learn About Financial Aid
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}