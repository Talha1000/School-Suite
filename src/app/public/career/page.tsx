import React from "react";
import { Briefcase, Users, Heart, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Careers | Join Our Team",
  description: "Explore career opportunities, teaching positions, and staff roles at our school.",
};

const openPositions = [
  { title: "High School Mathematics Teacher", department: "Academics", type: "Full-Time" },
  { title: "Middle School Science Teacher", department: "Academics", type: "Full-Time" },
  { title: "Admissions Counselor", department: "Administration", type: "Full-Time" },
  { title: "Part-Time Athletics Coach (Soccer)", department: "Athletics", type: "Part-Time" },
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Briefcase className="mx-auto text-blue-400 mb-6" size={48} />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Shape the Future</h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            We are always looking for passionate educators, visionary leaders, and dedicated support staff to join our vibrant academic community.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            View Open Positions
          </button>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-b border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Work With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Heart className="mx-auto text-rose-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Comprehensive Benefits</h3>
            <p className="text-slate-600">Competitive salaries, health insurance, retirement plans, and tuition discounts for dependents.</p>
          </div>
          <div className="p-6">
            <Sparkles className="mx-auto text-amber-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Professional Growth</h3>
            <p className="text-slate-600">Continuous professional development, conference stipends, and leadership tracks.</p>
          </div>
          <div className="p-6">
            <Users className="mx-auto text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Supportive Community</h3>
            <p className="text-slate-600">A collaborative culture that values diversity, well-being, and work-life balance.</p>
          </div>
        </div>
      </section>

      {/* Job Board */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Current Openings</h2>
        <div className="space-y-4">
          {openPositions.map((job, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                <div className="flex gap-3 text-sm font-medium">
                  <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded">{job.department}</span>
                  <span className="text-slate-500 bg-slate-100 px-2 py-1 rounded">{job.type}</span>
                </div>
              </div>
              <ArrowRight className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center bg-slate-50 p-6 rounded-xl border border-slate-200">
          <p className="text-slate-600 mb-2">Don't see a role that fits?</p>
          <button className="text-blue-600 font-bold hover:underline">Submit a General Application</button>
        </div>
      </section>
    </main>
  );
}