import React from "react";
import { Palette, Music, Mic2, Clapperboard } from "lucide-react";

export const metadata = {
  title: "Arts & Performance | Facilities",
  description: "Creative spaces including art studios, music practice rooms, and a performance theater.",
};

const artsFeatures = [
  {
    title: "Visual Arts Studios",
    icon: <Palette className="text-pink-500" size={24} />,
    desc: "Spacious, naturally lit studios equipped for painting, sculpting, ceramics, and digital design."
  },
  {
    title: "The Grand Auditorium",
    icon: <Mic2 className="text-purple-500" size={24} />,
    desc: "A 500-seat professional theater with state-of-the-art acoustics, lighting rigs, and backstage dressing rooms."
  },
  {
    title: "Music & Practice Rooms",
    icon: <Music className="text-indigo-500" size={24} />,
    desc: "Soundproofed individual practice booths and large ensemble rooms featuring grand pianos and percussion kits."
  },
  {
    title: "Media Production Lab",
    icon: <Clapperboard className="text-rose-500" size={24} />,
    desc: "A modern green-screen studio and editing suite for film, photography, and broadcasting students."
  }
];

export default function ArtsFacilitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <nav className="text-sm text-slate-500 mb-6 font-medium flex justify-center gap-2">
          Facilities <span>/</span> <span className="text-purple-600">Arts & Performance</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Creative Spaces
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-16">
          Where imagination takes center stage. Our arts facilities provide the perfect canvas for students to explore their creative potential.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {artsFeatures.map((feature, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:-translate-y-1 transition-transform">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}