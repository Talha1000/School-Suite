"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Bell, Search, User, Home, BookOpen, Calendar, 
  Settings, LogOut, ChevronRight, ChevronDown, Users, 
  ShieldCheck, FileSpreadsheet, GraduationCap, MessageSquare, 
  LayoutDashboard, Database, UserPlus, Activity, Presentation, 
  Receipt, Landmark, Building, Grid, ClipboardCheck, FileText, 
  Layers, ClipboardList
} from "lucide-react";

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
  role: "Admin" | "Teacher" | "Parent" | "Super Admin" | "Accountant" | "Student";
  hideNavbar?: boolean; 
  pageTitle?: string; // <-- Added back as optional to support manual overrides
}

export default function DashboardLayout({ 
  children, 
  role, 
  hideNavbar = false,
  pageTitle 
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const pathname = usePathname();
  
  // Uses manual prop if provided, otherwise auto-generates from URL
  const displayTitle = pageTitle || (pathname 
    ? pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ').toUpperCase() || "DASHBOARD"
    : "DASHBOARD");

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  const navigation = {
    // ... Keep your navigation object exactly as you had it ...
    Admin: [
      { name: "Home", icon: <Home size={20} />, href: "/home", mod: "1" },
      { name: "Admission Panel", icon: <UserPlus size={20} />, href: "/admin/pages/admission", mod: "2" },
      // ... rest of your links
    ],
    Teacher: [],
    Student: [],
    "Super Admin": [],
    Parent: [],
    Accountant: [],
  };

  const navLinks = navigation[role as keyof typeof navigation] || [];

  return (
    // Standard left-layout wrapper
    <div className="flex h-screen bg-[#F9FAFB] font-sans overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      {/* fixed on mobile, static on desktop (lg). Translates in and out. */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 shadow-xl lg:shadow-none transform transition-transform duration-300 flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="h-20 flex items-center px-8 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
              <span className="text-white font-black text-xl italic">H</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-800">HORIZON<span className="text-primary">.</span></span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden ml-auto p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto no-scrollbar">
          <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Modules</p>
          
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.subItems ? (
                <div className="mb-1">
                  <button 
                    onClick={() => toggleSubMenu(link.name)}
                    className={`w-full flex items-center justify-between px-4 py-3 font-bold rounded-xl transition-all group ${openSubMenu === link.name ? 'bg-primary/5 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                      <span className="text-sm">{link.name}</span>
                    </div>
                    {openSubMenu === link.name ? (
                       <ChevronDown size={16} className="text-primary transition-transform duration-200" />
                    ) : (
                       <ChevronRight size={16} className="text-slate-400 group-hover:text-primary transition-transform duration-200" />
                    )}
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubMenu === link.name ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-12 pr-4 py-2 space-y-1 relative before:absolute before:inset-y-0 before:left-6 before:w-[2px] before:bg-slate-100">
                      {link.subItems.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          href={subItem.href}
                          onClick={() => setIsSidebarOpen(false)}
                          className="block py-2.5 px-3 text-xs font-bold text-slate-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors relative before:absolute before:left-[-24px] before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-[2px] before:bg-slate-200 hover:before:bg-primary"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  href={link.href} 
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-slate-600 font-bold rounded-xl hover:bg-slate-50 hover:text-primary transition-all group mb-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="text-sm">{link.name}</span>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 flex-shrink-0">
          <button className="flex items-center justify-center gap-3 w-full px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all font-black text-xs uppercase tracking-widest group">
            <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" /> Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN WORKSPACE --- */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB] relative z-10 h-full overflow-hidden">
        
        {!hideNavbar && (
          <header className="h-20 bg-white/80 backdrop-blur-md z-30 flex items-center justify-between px-6 sm:px-10 border-b border-slate-200/60 shadow-sm flex-shrink-0">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
                <Menu size={20}/>
              </button>
              
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{role} Portal</span>
                <ChevronRight size={14} className="text-slate-300" />
                <span className="text-sm font-black text-slate-800 tracking-tight">{displayTitle}</span>
              </div>
            </div>

            {/* Header Right Side Data */}
            <div className="flex items-center gap-4">
               {/* Search & NavigationMenu keep exactly as you had them */}
            </div>
          </header>
        )}

        {/* Page Views (Children Content) */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-10 h-full">
          {hideNavbar && (
             <button 
               onClick={() => setIsSidebarOpen(true)} 
               className="lg:hidden p-3 bg-white shadow-sm border border-slate-200 text-slate-500 hover:bg-slate-50 rounded-xl mb-4 transition-colors inline-flex items-center gap-2"
             >
               <Menu size={20}/> <span className="text-sm font-bold">Open Menu</span>
             </button>
          )}
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            {children}
          </div>
        </main>
      </div>
      
      {/* Mobile Dark Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}