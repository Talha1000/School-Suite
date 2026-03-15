"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Globe, 
  Users, 
  GraduationCap, 
  Calendar, 
  Award,
  Library,
  BookOpen,
  ChevronRight
} from "lucide-react";

import NoticeBoard from "@/components/home sections/NoticeBoard";
import NewsEvents from "@/components/home sections/NewsEvents";
import Gallery from "@/components/home sections/Gallery";
import Achievements from "@/components/home sections/Achievements";

export default function Home() {
  const [activeTab, setActiveTab] = useState("prospective");

  return (
    <main className="flex flex-col min-h-screen bg-[#fafaf9] font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-10 scale-105 animate-slow-zoom" 
            style={{ 
              backgroundImage: "url('/bg.webp')", 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
            }} 
          />
          {/* Nature-inspired blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-navy-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Left Text Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-emerald-200 px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                Admissions for Fall 2026 are now open
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#0f172a]">
                Cultivating <span className="text-emerald-700 italic font-serif">Excellence</span> <br/>
                in a Global World
              </h1>

              <p className="max-w-[580px] mx-auto lg:mx-0 text-slate-600 text-lg md:text-xl leading-relaxed">
                A world-class educational environment fostering innovation,
                critical thinking, and a global perspective for tomorrow's leaders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link
                  href="/admissions"
                  className="h-16 px-10 rounded-full bg-[#0f172a] text-white font-bold hover:bg-emerald-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"/>
                </Link>

                <Link
                  href="/about"
                  className="h-16 px-10 rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-md font-bold text-slate-700 hover:bg-white hover:border-emerald-200 transition-all flex items-center justify-center"
                >
                  Explore Campus
                </Link>
              </div>
            </div>

            {/* Right Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/Home.jpg"
                  alt="Students"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>
              
              {/* Floating Stats - Glassmorphism style */}
              <div className="absolute -bottom-10 -left-10 hidden md:flex bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700"><Users size={24}/></div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">2,500+</p>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Global Alumni</p>
                  </div>
                </div>
                <div className="h-px bg-slate-100 w-full" />
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-2xl text-blue-700"><GraduationCap size={24}/></div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">1:10</p>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Student Ratio</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- QUICK PORTALS --- */}
      <section className="relative z-20 -mt-12 mb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex flex-col md:flex-row p-2">
            <div className="p-8 md:w-1/4 flex flex-col justify-center bg-slate-50 rounded-[2rem] m-2">
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">Portals</h3>
              <p className="text-xs text-slate-500 mt-2 font-medium">Tailored resources for our community.</p>
            </div>
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-2 p-2">
              <TabButton active={activeTab === 'prospective'} onClick={() => setActiveTab('prospective')} icon={<Globe size={20}/>} label="Future Students" />
              <TabButton active={activeTab === 'current'} onClick={() => setActiveTab('current')} icon={<BookOpen size={20}/>} label="Current Students" />
              <TabButton active={activeTab === 'parents'} onClick={() => setActiveTab('parents')} icon={<Users size={20}/>} label="Parents" />
              <TabButton active={activeTab === 'faculty'} onClick={() => setActiveTab('faculty')} icon={<Award size={20}/>} label="Faculty & Staff" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose XYZ?</h2>
              <p className="text-slate-500 text-lg">We provide a nurturing environment where tradition meets the future of global education.</p>
            </div>
            <div className="h-px flex-1 bg-slate-100 hidden md:block mx-12 mb-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Library size={32} />} 
              title="Modern Curriculum" 
              description="Our syllabus is continually updated to meet the demands of a rapidly changing digital and global landscape."
            />
            <FeatureCard 
              icon={<Globe size={32} />} 
              title="Global Community" 
              description="Representing over 40 countries, our student body fosters a diverse and rich cultural exchange."
            />
            <FeatureCard 
              icon={<GraduationCap size={32} />} 
              title="Expert Mentors" 
              description="Learn directly from industry leaders and distinguished academics dedicated to your personal success."
            />
          </div>
        </div>
      </section>

      {/* --- MAIN DASHBOARD --- */}
      <section className="py-24 bg-[#f8fafc] border-y border-slate-200">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200/60">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Calendar size={24} /></div>
                    <h2 className="text-2xl font-bold">News & Events</h2>
                  </div>
                  <button className="text-sm font-bold text-blue-600 hover:underline">View Calendar</button>
                </div>
                <NewsEvents />
              </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200/60">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl"><Award size={24} /></div>
                  <h2 className="text-2xl font-bold">Recent Achievements</h2>
                </div>
                <Achievements />
              </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200/60">
                <h2 className="text-2xl font-bold mb-8">Campus Life Gallery</h2>
                <Gallery />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#0f172a] text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group">
                {/* Decorative background for Notice board */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-emerald-500/20 transition-colors" />
                
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <h2 className="text-xl font-bold">Notice Board</h2>
                  <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Live</span>
                </div>
                
                <div className="h-[450px] overflow-y-auto pr-2 custom-scrollbar relative z-10">
                   <NoticeBoard />
                </div>
                
                <Link href="/public/notice" className="group/btn relative z-10 flex items-center justify-center w-full py-4 mt-8 bg-white/10 hover:bg-white/20 rounded-2xl transition-all font-bold text-sm">
                  View All Notices <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

// --- REUSABLE COMPONENTS ---

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500">
      <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-slate-400 mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 group-hover:shadow-xl group-hover:shadow-emerald-200">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-slate-800">{title}</h3>
      <p className="text-slate-500 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[1.5rem] transition-all duration-300 ${
        active 
          ? 'bg-white shadow-lg text-emerald-700 ring-1 ring-slate-100' 
          : 'bg-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-50'
      }`}
    >
      <div className={`${active ? 'scale-110' : 'scale-100'} transition-transform`}>{icon}</div>
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}