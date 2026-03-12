import React from "react";
import { Calendar, User, ArrowRight, Newspaper } from "lucide-react";

export const metadata = {
  title: "School Blog & News | Latest Updates",
  description: "Stay up-to-date with the latest school news, events, and educational articles.",
};

const blogPosts = [
  {
    title: "Our Robotics Team Wins State Championship",
    excerpt: "After months of rigorous preparation, our high school robotics team secured first place at the regional qualifiers.",
    date: "March 10, 2026",
    author: "STEM Department",
    category: "Student Success",
    image: "bg-blue-100" // Placeholder for actual image
  },
  {
    title: "Understanding the New Math Curriculum",
    excerpt: "A deep dive into how our new inquiry-based mathematics approach helps students build practical problem-solving skills.",
    date: "March 05, 2026",
    author: "Sarah Jenkins",
    category: "Academics",
    image: "bg-emerald-100"
  },
  {
    title: "Highlights from the Spring Arts Festival",
    excerpt: "View the gallery of student artwork and performances from our annual celebration of the creative arts.",
    date: "February 28, 2026",
    author: "Arts Council",
    category: "Campus Life",
    image: "bg-purple-100"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white py-16 px-6 border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Newspaper size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                School News & Blog
              </h1>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Stories from our classrooms, updates from our community, and insights from our educators.
            </p>
          </div>
          
          {/* Categories Dropdown */}
          <select className="bg-slate-50 border border-slate-300 text-slate-700 py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 font-medium">
            <option>All Categories</option>
            <option>Student Success</option>
            <option>Academics</option>
            <option>Campus Life</option>
            <option>Principal's Desk</option>
          </select>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              {/* Image Placeholder */}
              <div className={`aspect-video ${post.image} flex items-center justify-center relative overflow-hidden`}>
                 <span className="text-slate-500/50 font-medium z-10">Image Placeholder</span>
                 {/* Simulate image zoom on hover */}
                 <div className="absolute inset-0 bg-black/5 group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 block">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1 font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-full font-bold hover:border-slate-300 hover:bg-slate-50 transition-colors">
            Load More Articles
          </button>
        </div>
      </section>
    </main>
  );
}