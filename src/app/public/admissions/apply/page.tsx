import React from "react";
import { ClipboardList, CheckCircle2, FileText, Users, Send } from "lucide-react";

export const metadata = {
  title: "Admissions Process | Apply Now",
  description: "A step-by-step guide to joining our school community.",
};

const steps = [
  {
    title: "Submit Online Inquiry",
    description: "Fill out our brief online form to express your interest and receive an application packet.",
    icon: <FileText className="text-blue-600" size={24} />,
  },
  {
    title: "Campus Tour & Interview",
    description: "Schedule a visit to see our facilities and meet with our admissions team to discuss your child's needs.",
    icon: <Users className="text-emerald-600" size={24} />,
  },
  {
    title: "Submit Application & Documents",
    description: "Complete the full application and provide past academic records, recommendations, and birth certificates.",
    icon: <ClipboardList className="text-purple-600" size={24} />,
  },
  {
    title: "Assessment",
    description: "Depending on the grade level, the student may be invited for an entrance assessment or trial day.",
    icon: <CheckCircle2 className="text-amber-600" size={24} />,
  },
];

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white py-16 px-6 md:px-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-sm text-slate-500 mb-6 font-medium flex justify-center gap-2">
            Admissions <span>/</span> <span className="text-blue-600">Apply</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Admissions Process
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are thrilled you are considering joining our community. Our admissions 
            process is designed to be transparent, supportive, and informative.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-100">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            <Send size={20} />
            Start Application Now
          </button>
        </div>
      </section>
    </main>
  );
}