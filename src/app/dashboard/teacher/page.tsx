
"use client";

import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout"; // Adjust path if needed
import { 
  Users, 
  BookOpen, 
  CheckSquare, 
  Bell, 
  Calendar, 
  Clock, 
  FileText, 
  MapPin,
  ArrowRight,
  CheckCircle2,
  PlusCircle,
  AlertCircle
} from "lucide-react";

export default function TeacherDashboard() {
  return (
    <DashboardLayout pageTitle="Teacher Overview" role="Teacher">
      
      {/* --- QUICK STATS ROW --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          icon={<BookOpen size={24} />} 
          title="Classes Today" 
          value="4" 
          subtitle="Next class in 15 mins"
          colorClass="text-blue-500"
          bgClass="bg-blue-500/10"
        />
        <StatCard 
          icon={<Users size={24} />} 
          title="Total Students" 
          value="142" 
          subtitle="Across 4 sections"
          colorClass="text-green-500"
          bgClass="bg-green-500/10"
        />
        <StatCard 
          icon={<CheckSquare size={24} />} 
          title="Pending Grading" 
          value="28" 
          subtitle="Grade 10 Science Test"
          colorClass="text-red-500"
          bgClass="bg-red-500/10"
          alert
        />
        <StatCard 
          icon={<Calendar size={24} />} 
          title="Upcoming Events" 
          value="2" 
          subtitle="PTM this Saturday"
          colorClass="text-purple-500"
          bgClass="bg-purple-500/10"
        />
      </div>

      {/* --- MAIN DASHBOARD GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Schedule & Academic Tasks (Takes up 2/3 width) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Today's Schedule Section */}
          <div className="glass rounded-2xl p-6 border shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                <Clock className="text-primary" size={24} /> 
                Today's Schedule
              </h2>
              <button className="text-sm font-medium text-primary hover:underline">View Full Routine</button>
            </div>
            
            <div className="space-y-4 relative z-10">
              {[
                { time: "09:00 AM - 09:45 AM", class: "Grade 10 - Section A", subject: "Physics", room: "Lab 2", status: "completed" },
                { time: "10:00 AM - 10:45 AM", class: "Grade 11 - Section B", subject: "Advanced Math", room: "Room 304", status: "current" },
                { time: "11:30 AM - 12:15 PM", class: "Grade 9 - Section A", subject: "Mathematics", room: "Room 201", status: "upcoming" },
              ].map((schedule, i) => (
                <div key={i} className={`flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center p-4 rounded-xl border transition-colors ${schedule.status === 'current' ? 'bg-primary/5 border-primary/30 shadow-sm' : 'bg-background/50 border-border/50 hover:border-primary/30'}`}>
                  
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center justify-center min-w-[100px] border-r border-border/50 pr-4">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Time</span>
                      <span className="text-sm font-black text-foreground mt-1 whitespace-nowrap">{schedule.time.split(' - ')[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base">{schedule.class}</h4>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-md">{schedule.subject}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><MapPin size={12}/> {schedule.room}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto flex justify-end">
                    {schedule.status === 'completed' && (
                      <span className="flex items-center gap-1 text-sm font-semibold text-green-500 bg-green-500/10 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 size={16} /> Completed
                      </span>
                    )}
                    {schedule.status === 'current' && (
                      <button className="w-full sm:w-auto px-4 h-9 bg-primary text-primary-foreground text-sm font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 animate-in fade-in">
                        Take Attendance <ArrowRight size={16} />
                      </button>
                    )}
                    {schedule.status === 'upcoming' && (
                      <span className="text-sm font-medium text-muted-foreground px-3 py-1.5 border border-border/50 rounded-lg">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Homework/Assignments */}
          <div className="glass rounded-2xl p-6 border shadow-soft">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                <FileText className="text-primary" size={24} /> 
                Recent Submissions
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Algebra Worksheet", class: "Grade 9A", submitted: 28, total: 30, due: "Yesterday" },
                { title: "Thermodynamics Lab Report", class: "Grade 11B", submitted: 15, total: 25, due: "Today, 5:00 PM" },
              ].map((task, i) => (
                <div key={i} className="bg-background/50 border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold bg-accent text-muted-foreground px-2 py-1 rounded-md">{task.class}</span>
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1"><Clock size={12}/> Due: {task.due}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-3 group-hover:text-primary transition-colors">{task.title}</h3>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-muted-foreground">Submitted: <span className="text-foreground">{task.submitted}/{task.total}</span></span>
                      <span className="text-primary">{Math.round((task.submitted / task.total) * 100)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-accent rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${(task.submitted / task.total) * 100}%` }} />
                    </div>
                  </div>
                  <button className="w-full mt-4 text-xs font-bold text-foreground border border-border/50 bg-background hover:bg-primary/5 hover:text-primary py-2 rounded-lg transition-colors">
                    Review & Grade
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Quick Actions, Notices */}
        <div className="space-y-8">
          
          {/* Quick Actions */}
          <div className="glass rounded-2xl p-6 border shadow-soft">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
              <PlusCircle className="text-primary" size={20} /> 
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Add Marks", icon: <FileText size={18} /> },
                { name: "Attendance", icon: <Users size={18} /> },
                { name: "Homework", icon: <BookOpen size={18} /> },
                { name: "Apply Leave", icon: <Calendar size={18} /> },
              ].map((action, i) => (
                <button key={i} className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-primary hover:text-primary-foreground hover:border-primary text-muted-foreground transition-all group">
                  <div className="group-hover:scale-110 transition-transform">{action.icon}</div>
                  <span className="text-xs font-bold">{action.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Notice Board */}
          <div className="glass rounded-2xl p-6 border shadow-soft">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-foreground">
              <Bell className="text-primary" size={20} /> 
              Staff Notices
            </h2>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-orange-500 relative">
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-1 border-2 border-background" />
                <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1"><Clock size={12}/> Today, 08:30 AM</p>
                <p className="text-sm font-semibold text-foreground">Staff Briefing at 1:00 PM</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">Mandatory meeting for all high school teachers in the main hall.</p>
              </div>
              <div className="pl-4 border-l-2 border-primary relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1 border-2 border-background" />
                <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1"><Clock size={12}/> Yesterday</p>
                <p className="text-sm font-semibold text-foreground">Submit Mid-Term Grades</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">Deadline to upload all grades to the portal is Friday.</p>
              </div>
              <button className="w-full text-center text-sm font-medium text-primary hover:underline mt-2">
                View all notices
              </button>
            </div>
          </div>

        </div>
      </div>

    </DashboardLayout>
  );
}

// Sub-component for Quick Stats (Reused exactly from your snippet)
function StatCard({ icon, title, value, subtitle, colorClass, bgClass, alert = false }: any) {
  return (
    <div className="glass p-5 rounded-2xl border shadow-soft hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
      {alert && <div className="absolute top-0 right-0 w-12 h-12 bg-red-500/10 rounded-bl-full" />}
      <div className="flex items-center gap-4 mb-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgClass} ${colorClass}`}>
          {icon}
        </div>
        <p className="font-bold text-muted-foreground text-sm">{title}</p>
      </div>
      <div>
        <h3 className="text-3xl font-black text-foreground">{value}</h3>
        <p className="text-xs font-medium text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  );
}