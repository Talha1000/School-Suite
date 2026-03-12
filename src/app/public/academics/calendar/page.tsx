import React from "react";
import { Calendar as CalendarIcon, Download, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Academic Calendar | Academics",
  description: "Stay updated on semesters, term dates, and school holidays.",
};

const upcomingEvents = [
  {
    date: "Aug 25",
    month: "August",
    title: "Fall Semester Begins",
    time: "8:00 AM",
    location: "Main Campus",
    type: "Academic",
  },
  {
    date: "Sep 04",
    month: "September",
    title: "Labor Day - No Classes",
    time: "All Day",
    location: "N/A",
    type: "Holiday",
  },
  {
    date: "Oct 12",
    month: "October",
    title: "Mid-Term Examinations Begin",
    time: "8:00 AM",
    location: "Testing Centers",
    type: "Academic",
  },
  {
    date: "Nov 23",
    month: "November",
    title: "Thanksgiving Break",
    time: "All Day",
    location: "N/A",
    type: "Holiday",
  },
  {
    date: "Dec 15",
    month: "December",
    title: "Winter Festival & Showcase",
    time: "6:00 PM",
    location: "Main Auditorium",
    type: "Event",
  },
];

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-white py-16 px-6 md:px-24 border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <nav className="text-sm text-slate-500 mb-6 font-medium">
              Academics <span className="mx-2">/</span> <span className="text-blue-600">Calendar</span>
            </nav>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <CalendarIcon size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Academic Calendar
              </h1>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mt-4">
              Plan ahead with our comprehensive schedule of term dates, holidays, examination periods, and major school events.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors shrink-0">
            <Download size={20} />
            Download PDF
          </button>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 px-6 md:px-24 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Key Dates & Events</h2>
          <select className="bg-white border border-slate-300 text-slate-700 py-2 px-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
            <option>2026-2027 Academic Year</option>
            <option>2025-2026 Academic Year</option>
          </select>
        </div>

        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center gap-6 hover:shadow-md transition-shadow"
            >
              {/* Date Box */}
              <div className="bg-blue-50 text-blue-700 rounded-xl p-4 text-center min-w-[100px] shrink-0">
                <span className="block text-sm font-bold uppercase">{event.month.slice(0, 3)}</span>
                <span className="block text-2xl font-black">{event.date.split(' ')[1]}</span>
              </div>

               {/* Event Details */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide
                    ${event.type === 'Holiday' ? 'bg-emerald-100 text-emerald-700' : 
                      event.type === 'Academic' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}
                  >
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}