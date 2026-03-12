import React from "react";
import { 
  GraduationCap, 
  Search, 
  Laptop, 
  BookMarked, 
  Clock,
  Archive
} from "lucide-react";

export const metadata = {
  title: "Library & Media Center | Academics",
  description: "Our comprehensive research hub and digital resources for students.",
};

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-slate-50 py-16 px-6 md:px-24 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-slate-500 mb-6 font-medium">
            Academics <span className="mx-2">/</span> <span className="text-blue-600">Library</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <GraduationCap size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Library & Media Center
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mt-4">
            A modern research hub providing access to thousands of physical books, academic journals, and cutting-edge digital resources to support student learning.
          </p>

          {/* Quick Search Bar (Visual only) */}
          <div className="mt-8 flex items-center bg-white p-2 rounded-full border border-slate-300 shadow-sm max-w-2xl">
            <Search className="text-slate-400 ml-4 mr-2" size={20} />
            <input 
              type="text" 
              placeholder="Search books, articles, and digital media..." 
              className="flex-1 outline-none text-slate-700 bg-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Search Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* Digital Resources */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <Laptop className="text-blue-500 mb-4" size={32} />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Digital Databases</h2>
            <p className="text-slate-600 mb-6">
              Access JSTOR, EBSCO, and our proprietary school databases 24/7 from anywhere in the world.
            </p>
            <button className="text-blue-600 font-semibold hover:underline">Browse Databases →</button>
          </div>

          {/* Physical Collections */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <BookMarked className="text-emerald-500 mb-4" size={32} />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Print Collections</h2>
            <p className="text-slate-600 mb-6">
              Over 50,000 volumes including classic literature, modern fiction, and extensive reference materials.
            </p>
            <button className="text-emerald-600 font-semibold hover:underline">Reserve a Book →</button>
          </div>

          {/* Archives */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <Archive className="text-amber-500 mb-4" size={32} />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">School Archives</h2>
            <p className="text-slate-600 mb-6">
              Explore our institution's history with digitized yearbooks, past student newspapers, and historical photographs.
            </p>
            <button className="text-amber-600 font-semibold hover:underline">View Archives →</button>
          </div>

        </div>
      </section>

      {/* Hours & Info */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <Clock className="text-blue-400 mt-1" size={28} />
            <div>
              <h3 className="text-2xl font-bold mb-2">Operating Hours</h3>
              <p className="text-slate-300">Monday - Friday: 7:30 AM - 6:00 PM</p>
              <p className="text-slate-300">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-slate-400 text-sm mt-2">*Extended hours during exam weeks</p>
            </div>
          </div>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors">
            Book a Study Room
          </button>
        </div>
      </section>
    </main>
  );
}