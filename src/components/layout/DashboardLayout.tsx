"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Menu, X, Bell, Search, User, Home, BookOpen, Calendar, 
  Settings, LogOut, ChevronRight, ChevronDown, Users, 
  ShieldCheck, FileSpreadsheet, GraduationCap, MessageSquare, 
  LayoutDashboard, Database, UserPlus, Activity, Presentation, 
  Receipt, Landmark, Building, Grid, ClipboardCheck, FileText, 
  Layers, ClipboardList
} from "lucide-react";

// Import your new Navigation Menu components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DashboardLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  role: "Admin" | "Teacher" | "Parent" | "Super Admin" | "Accountant" | "Student";
}

export default function DashboardLayout({ children, pageTitle, role }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  // Strictly mapped to your Modules
  const navigation = {
    "Super Admin": [
      { name: "System Config", icon: <Settings size={18} />, href: "/config", mod: "18" },
      { name: "User Control", icon: <ShieldCheck size={18} />, href: "/users", mod: "3" },
      { name: "Audit Logs", icon: <Activity size={18} />, href: "/logs", mod: "19" },
      { name: "Backup/Export", icon: <Database size={18} />, href: "/backup", mod: "20" },
    ],
    Admin: [
      { name: "Home", icon: <Home size={18} />, href: "/home", mod: "1" },
      { name: "Admission Panel", icon: <UserPlus size={18} />, href: "/admission", mod: "2" },
      { name: "Admin Dashboard", icon: <LayoutDashboard size={18} />, href: "/admin", mod: "3" },
      { name: "Teacher Dashboard", icon: <Presentation size={18} />, href: "/teacher", mod: "4" },
      { name: "Schedule Calendar", icon: <Calendar size={18} />, href: "/schedule", mod: "5" },
      { name: "Exam & Result", icon: <FileText size={18} />, href: "/exam", mod: "6" },
      { name: "Others", icon: <Layers size={18} />, href: "/others", mod: "7" },
      { name: "Attendance", icon: <ClipboardCheck size={18} />, href: "/attendance", mod: "8" },
      { name: "Bill", icon: <Receipt size={18} />, href: "/bill", mod: "9" },
      { name: "Accounts", icon: <Landmark size={18} />, href: "/accounts", mod: "10" },
      { name: "Org Settings", icon: <Building size={18} />, href: "/settings/org", mod: "11" },
      { name: "Academic Settings", icon: <BookOpen size={18} />, href: "/settings/academic", mod: "12" },
      { name: "ERP Applications", icon: <Grid size={18} />, href: "/erp", mod: "13" },
    ],
    Teacher: [
      { name: "My Portal", icon: <Home size={18} />, href: "/teacher", mod: "13" },
      { 
        name: "Class & Routine", 
        icon: <Calendar size={18} />, 
        subItems: [
          { name: "Weekly Routine Calendar", href: "/teacher/routine/calendar" },
          { name: "Weekly Routine Print", href: "/teacher/routine/print" },
        ]
      },
      { 
        name: "Attendance", 
        icon: <Users size={18} />, 
        subItems: [
          { name: "Mark Student Attendance", href: "/teacher/attendance/mark" },
          { name: "Attendance Reports", href: "/teacher/attendance/reports" },
          { name: "My Leave Application", href: "/teacher/attendance/leave" },
        ]
      },
      { 
        name: "Examinations", 
        icon: <ClipboardList size={18} />, 
        subItems: [
          { name: "Exam Schedule", href: "/teacher/exams/schedule" },
          { name: "Exam Schedule Entry", href: "/teacher/exams/schedule-entry" },
          { name: "Mark Entry", href: "/teacher/exams/mark-entry" },
        ]
      },
      { 
        name: "Reports & Results", 
        icon: <GraduationCap size={18} />, 
        subItems: [
          { name: "Subject Wise Result", href: "/teacher/reports/subject-wise" },
          { name: "Term Wise Result", href: "/teacher/reports/term-wise" },
          { name: "Result Card / Mark sheet", href: "/teacher/reports/result-card" },
          { name: "Student Progress Report", href: "/teacher/reports/progress" },
        ]
      },
      { 
        name: "Academics", 
        icon: <BookOpen size={18} />, 
        subItems: [
          { name: "Homework & Assignments", href: "/teacher/academics/assignments" },
          { name: "Study Materials", href: "/teacher/academics/materials" },
          { name: "Lesson Plan", href: "/teacher/academics/lesson-plan" },
        ]
      },
      { name: "Messages", icon: <MessageSquare size={18} />, href: "/teacher/messages", mod: "15" },
      { name: "My Profile", icon: <User size={18} />, href: "/teacher/profile", mod: "99" },
    ],
    Student: [
      { name: "My Portal", icon: <Home size={18} />, href: "/student", mod: "13" },
      { name: "Attendance", icon: <Calendar size={18} />, href: "/student/attendance", mod: "6" },
      { name: "Exam Marks", icon: <FileSpreadsheet size={18} />, href: "/student/exams", mod: "9" },
      { name: "Report Cards", icon: <GraduationCap size={18} />, href: "/student/reports", mod: "10" },
    ],
    Parent: [],
    Accountant: [],
  };

  const navLinks = navigation[role as keyof typeof navigation] || [];

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans">
      {/* --- SIDEBAR --- */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 shadow-xl lg:shadow-none transform transition-transform duration-300 flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="h-20 flex items-center px-8 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-primary/20">
              <span className="text-white font-black text-xl italic">H</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-800">HORIZON<span className="text-primary">.</span></span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden ml-auto text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Core Operations</p>
          
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.subItems ? (
                <div className="mb-1">
                  <button 
                    onClick={() => toggleSubMenu(link.name)}
                    className="w-full flex items-center justify-between px-4 py-3 text-slate-600 font-bold rounded-xl hover:bg-slate-50 hover:text-primary transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                      <span className="text-sm">{link.name}</span>
                    </div>
                    {openSubMenu === link.name ? (
                       <ChevronDown size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                    ) : (
                       <ChevronRight size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                    )}
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubMenu === link.name ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-12 pr-4 py-1 space-y-1">
                      {link.subItems.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          href={subItem.href}
                          className="block py-2 text-xs font-semibold text-slate-500 hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={link.href} className="flex items-center justify-between px-4 py-3 text-slate-600 font-bold rounded-xl hover:bg-slate-50 hover:text-primary transition-all group mb-1">
                  <div className="flex items-center gap-3">
                    <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="text-sm">{link.name}</span>
                  </div>
                  {link.mod && (
                    <span className="text-[9px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      M{link.mod}
                    </span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 flex-shrink-0">
          <div className="bg-slate-50 p-4 rounded-2xl mb-4">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse"></div>
               <div>
                 <p className="text-xs font-black text-slate-700">System Secure</p>
                 <p className="text-[10px] text-slate-500">JWT / SSL Active</p>
               </div>
             </div>
          </div>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-black text-xs uppercase tracking-widest">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN WRAPPER --- */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8 border-b border-slate-100">
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg"><Menu size={20}/></button>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:inline">{role} Portal</span>
            <ChevronRight size={14} className="text-slate-300 hidden sm:inline" />
            <span className="text-sm font-black text-slate-800 tracking-tight">{pageTitle}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-primary transition-colors" />
              <input type="text" placeholder="Jump to module..." className="h-10 pl-10 pr-4 w-48 focus:w-64 rounded-xl border-none bg-slate-100 text-xs font-bold transition-all outline-none focus:ring-2 focus:ring-primary/20" />
            </div>

            {/* HEADER NAVIGATION MENU (Notifications & Profile) */}
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                
                {/* Notifications Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="!bg-transparent hover:!bg-slate-100 p-2.5 rounded-xl h-10 w-10 data-[state=open]:!bg-slate-100 [&>svg]:hidden">
                    <div className="relative">
                      <Bell size={20} className="text-slate-400" />
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-72 p-2 bg-white flex flex-col gap-1">
                      <div className="px-3 py-2 border-b border-slate-100 mb-1 flex justify-between items-center">
                        <p className="text-sm font-bold text-slate-800">Notifications</p>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">2 New</span>
                      </div>
                      <div className="px-3 py-2.5 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                        <p className="text-xs font-bold text-slate-700">System Update</p>
                        <p className="text-[10px] text-slate-500">ERP Version 2.4 deployed successfully.</p>
                      </div>
                      <div className="px-3 py-2.5 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                        <p className="text-xs font-bold text-slate-700">New Admission</p>
                        <p className="text-[10px] text-slate-500">John Doe submitted an application.</p>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* User Profile Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="!bg-transparent hover:!bg-slate-100 p-2 rounded-xl h-10 data-[state=open]:!bg-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <User size={14} className="font-bold" />
                      </div>
                      <span className="hidden sm:inline text-xs font-bold tracking-wide">{role}</span>
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-56 p-2 bg-white flex flex-col gap-1">
                      <div className="px-3 py-2 border-b border-slate-100 mb-1">
                        <p className="text-sm font-bold text-slate-800">My Account</p>
                        <p className="text-xs text-slate-500">Logged in as {role}</p>
                      </div>
                      
                      <NavigationMenuLink asChild>
                        <Link href="/profile" className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                          <User size={16} /> Profile Settings
                        </Link>
                      </NavigationMenuLink>
                      
                      <NavigationMenuLink asChild>
                        <Link href="/preferences" className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                          <Settings size={16} /> Preferences
                        </Link>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer mt-1">
                          <LogOut size={16} /> Sign Out
                        </button>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
              </NavigationMenuList>
            </NavigationMenu>
            
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-700">
            {children}
          </div>
        </main>
      </div>
      
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}