import React from "react";
import { 
  School, 
  Calculator, 
  FlaskConical, 
  Globe, 
  Languages, 
  Palette, 
  Activity 
} from "lucide-react";

export const metadata = {
  title: "Academic Departments | Your School",
  description: "Explore our specialized subject faculties and dedicated teaching staff.",
};

const departments = [
  {
    name: "Mathematics",
    description: "Developing logical reasoning through algebra, geometry, calculus, and advanced statistics.",
    icon: <Calculator className="text-blue-600 mb-4" size={32} />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    name: "Sciences",
    description: "Fostering discovery through hands-on biology, chemistry, physics, and environmental science labs.",
    icon: <FlaskConical className="text-emerald-600 mb-4" size={32} />,
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
  {
    name: "Humanities",
    description: "Understanding our world through history, geography, economics, and social studies.",
    icon: <Globe className="text-amber-600 mb-4" size={32} />,
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
  },
  {
    name: "Languages & Literature",
    description: "Mastering communication through English literature, creative writing, and world languages.",
    icon: <Languages className="text-purple-600 mb-4" size={32} />,
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
  },
  {
    name: "Fine & Performing Arts",
    description: "Cultivating creativity in visual arts, theater, choir, band, and digital media production.",
    icon: <Palette className="text-pink-600 mb-4" size={32} />,
    bgColor: "bg-pink-50",
    borderColor: "border-pink-100",
  },
  {
    name: "Physical Education",
    description: "Promoting lifelong health, wellness, team sports, and individual athletic development.",
    icon: <Activity className="text-orange-600 mb-4" size={32} />,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
  },
];

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-slate-50 py-16 px-6 md:px-24 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-slate-500 mb-6 font-medium">
            Academics <span className="mx-2">/</span> <span className="text-blue-600">Departments</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <School size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Academic Departments
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mt-4">
            Our dedicated faculties are composed of passionate educators and industry experts committed to delivering an exceptional learning experience across all disciplines.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl border ${dept.borderColor} ${dept.bgColor} hover:-translate-y-1 transition-transform duration-300 cursor-pointer`}
              >
                {dept.icon}
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  {dept.name}
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {dept.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-slate-900 group">
                  Meet the Faculty 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Highlight / Quote Section */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <School className="text-blue-400 mx-auto mb-6" size={48} opacity={0.5} />
          <h2 className="text-3xl font-bold mb-6">Interdisciplinary Excellence</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            "We believe that the best learning happens at the intersection of subjects. Our departments collaborate regularly to create cross-curricular projects that challenge students to apply their knowledge in real-world scenarios."
          </p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors">
            View Staff Directory
          </button>
        </div>
      </section>
    </main>
  );
}