import React from "react";
import { Map, Play, Camera, Building } from "lucide-react";

export const metadata = {
  title: "Virtual Campus Tour | Admissions",
  description: "Explore our state-of-the-art campus and facilities from anywhere.",
};

export default function VirtualTourPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <nav className="text-sm text-slate-500 mb-6 font-medium flex justify-center gap-2">
          Admissions <span>/</span> <span className="text-blue-600">Virtual Tour</span>
        </nav>
        <Map className="mx-auto text-blue-600 mb-4" size={40} />
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Explore Our Campus
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
          Take a guided virtual walk through our classrooms, sports facilities, and creative spaces. See where your child will learn, grow, and thrive.
        </p>

        {/* Video / 360 Viewer Placeholder */}
        <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer border-4 border-white">
          <img 
            src="/api/placeholder/1200/600" 
            alt="Campus aerial view placeholder" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play size={32} className="ml-2" />
            </div>
            <span className="mt-4 text-white font-semibold tracking-wide uppercase">Start Guided Tour</span>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Tour Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Science Labs", icon: <Camera />, desc: "State-of-the-art equipment for biology, chemistry, and physics." },
            { title: "Athletic Complex", icon: <Building />, desc: "Indoor gym, Olympic pool, and extensive outdoor fields." },
            { title: "Arts Center", icon: <Camera />, desc: "Dedicated studios, darkrooms, and a 500-seat theater." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="text-blue-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}