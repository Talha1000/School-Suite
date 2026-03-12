import React from "react";
import { Dumbbell, Trophy, Activity, Medal } from "lucide-react";

export const metadata = {
  title: "Sports & Physical Ed | Facilities",
  description: "World-class athletic facilities, swimming pools, and sports fields.",
};

const sportsAreas = [
  "Olympic-size Indoor Swimming Pool",
  "Full-size FIFA Standard Turf Field",
  "Indoor Basketball & Volleyball Courts",
  "Professional Track & Field Complex",
  "Fully Equipped Fitness & Weight Room",
  "Dedicated Gymnastics & Dance Studio"
];

export default function SportsFacilitiesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-orange-600 py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-orange-200 mb-6 font-medium flex justify-center gap-2 uppercase tracking-wider">
            Facilities <span>/</span> <span className="text-white">Sports</span>
          </nav>
          <Trophy className="mx-auto mb-6 text-orange-300" size={48} />
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            Athletics Complex
          </h1>
          <p className="text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto">
            Fostering physical wellness, teamwork, and competitive excellence through premier sporting facilities.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* List Section */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Activity className="text-orange-500" /> Our Venues
            </h2>
            <div className="space-y-4">
              {sportsAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600 shrink-0">
                    <Medal size={20} />
                  </div>
                  <span className="font-semibold text-slate-700">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-200 aspect-square rounded-2xl flex items-center justify-center text-slate-500 italic">Court Photo</div>
            <div className="bg-slate-300 aspect-square rounded-2xl flex items-center justify-center text-slate-600 italic translate-y-8">Pool Photo</div>
            <div className="bg-slate-300 aspect-square rounded-2xl flex items-center justify-center text-slate-600 italic">Field Photo</div>
            <div className="bg-slate-200 aspect-square rounded-2xl flex items-center justify-center text-slate-500 italic translate-y-8">Gym Photo</div>
          </div>
        </div>
      </section>
    </main>
  );
}