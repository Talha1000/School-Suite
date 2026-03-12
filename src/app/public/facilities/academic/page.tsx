import React from "react";
import { MonitorPlay, Microscope, BookOpen, Cpu } from "lucide-react";

export const metadata = {
  title: "Academic Facilities | Our Campus",
  description: "State-of-the-art classrooms, science labs, and innovation centers.",
};

const facilities = [
  {
    title: "Smart Classrooms",
    description: "Equipped with interactive whiteboards, ergonomic seating, and high-speed Wi-Fi to support dynamic learning.",
    icon: <MonitorPlay className="text-blue-600 mb-4" size={32} />,
  },
  {
    title: "Advanced Science Labs",
    description: "Purpose-built laboratories for Physics, Chemistry, and Biology, featuring university-grade safety equipment.",
    icon: <Microscope className="text-emerald-600 mb-4" size={32} />,
  },
  {
    title: "Innovation & Robotics Hub",
    description: "A collaborative makerspace with 3D printers, coding stations, and robotics kits for hands-on STEM education.",
    icon: <Cpu className="text-purple-600 mb-4" size={32} />,
  },
];

export default function AcademicFacilitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-slate-500 mb-6 font-medium">
            Facilities <span className="mx-2">/</span> <span className="text-blue-600">Academic</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <BookOpen size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Academic Facilities</h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Our learning environments are purposefully designed to inspire curiosity, facilitate collaboration, and integrate seamlessly with modern technology.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
              {fac.icon}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{fac.title}</h3>
              <p className="text-slate-600 leading-relaxed">{fac.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight Image Placeholder */}
        <div className="mt-16 bg-slate-900 rounded-3xl aspect-[21/9] flex flex-col items-center justify-center text-center p-8 border-4 border-slate-100 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Spaces Designed for Success</h2>
          <p className="text-slate-300 max-w-2xl relative z-10">Experience a 360° view of our flagship learning commons and collaborative study pods.</p>
          <button className="mt-8 bg-white text-slate-900 px-6 py-3 rounded-full font-bold relative z-10 hover:bg-slate-100">
            View Image Gallery
          </button>
        </div>
      </section>
    </main>
  );
}