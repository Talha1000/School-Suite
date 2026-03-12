import React from "react";
import { BookOpen, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Curriculum | Academics",
  description: "Explore our core academic standards and diverse elective programs designed to foster excellence.",
};

export default function CurriculumPage() {
  return (
    <main className="min-h-screen py-16 px-6 md:px-24 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <nav className="text-sm text-slate-500 mb-6 font-medium">
            Academics <span className="mx-2">/</span> <span className="text-blue-600">Curriculum</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <BookOpen size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Our Curriculum
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We provide a rigorous, forward-thinking curriculum that blends core academic standards with engaging electives to prepare students for the future.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Core Academic Standards */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Core Standards</h2>
            <p className="text-slate-600 mb-6">
              Our foundational subjects ensure every student builds strong analytical, critical thinking, and communication skills.
            </p>
            <ul className="space-y-3">
              {["Advanced Mathematics", "Comprehensive Sciences", "Language Arts & Literature", "Global History & Geography"].map((subject, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Elective Programs */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Elective Programs</h2>
            <p className="text-slate-600 mb-6">
              Students are encouraged to explore their passions through our diverse range of specialized elective courses.
            </p>
            <ul className="space-y-3">
              {["Computer Science & Coding", "Visual & Performing Arts", "Creative Writing", "Robotics & Engineering"].map((subject, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}