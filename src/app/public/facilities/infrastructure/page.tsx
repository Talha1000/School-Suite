import React from "react";
import { Utensils, HeartPulse, Bus, ShieldCheck, Map } from "lucide-react";

export const metadata = {
  title: "Campus & Welfare | Facilities",
  description: "Essential campus infrastructure including dining, health, and transport services.",
};

const infrastructureList = [
  {
    title: "Dining Hall & Cafeteria",
    icon: <Utensils className="text-amber-600" size={28} />,
    desc: "Serving nutritious, chef-prepared hot meals daily, with options catering to various dietary requirements and allergies.",
  },
  {
    title: "Health & Wellness Center",
    icon: <HeartPulse className="text-rose-600" size={28} />,
    desc: "A fully equipped on-campus clinic staffed by registered nurses during all school hours to handle medical needs and emergencies.",
  },
  {
    title: "Transportation Services",
    icon: <Bus className="text-blue-600" size={28} />,
    desc: "A modern fleet of GPS-tracked, air-conditioned school buses providing safe and reliable transport across major city routes.",
  },
  {
    title: "Campus Security",
    icon: <ShieldCheck className="text-emerald-600" size={28} />,
    desc: "24/7 security personnel, comprehensive CCTV coverage, and secure, ID-gated entry points ensuring a safe learning environment.",
  },
];

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white py-16 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-slate-500 mb-6 font-medium">
            Facilities <span className="mx-2">/</span> <span className="text-blue-600">Campus & Welfare</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <Map size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Campus & Welfare</h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Beyond academics, we provide comprehensive infrastructure designed to ensure the health, safety, and daily comfort of our entire student body.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="space-y-6">
          {infrastructureList.map((item, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-start gap-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}