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
  BookOpen
} from "lucide-react";

import NoticeBoard from "@/components/nav-pages/NoticeBoard";
import NewsEvents from "@/components/nav-pages/NewsEvents";
import Gallery from "@/components/nav-pages/Gallery";
import Achievements from "@/components/nav-pages/Achievements";
import Faculty from "@/components/nav-pages/Faculty";

export default function Home() {
  const [activeTab, setActiveTab] = useState("prospective");

  return (
    <main className="flex flex-col min-h-screen bg-background font-sans">
      
      {/* --- HERO SECTION --- */}
{/* --- HERO SECTION --- */}
<section className="relative w-full pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-background">

  <div className="absolute inset-0 z-0">
  
  {/* The Image Layer - Reduced blur and increased opacity */}
  <div 
    className="absolute inset-0 scale-105 blur-xl animate-slow-zoom" 
    style={{ 
      backgroundImage: "url('/bg.webp')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} 
  />

  {/* FIXED GRADIENT: Changed from background to transparent to stop the "white" wash */}
  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/5" />

  {/* Glow effects - Lowered blur so they don't turn everything white */}
  <div className="absolute inset-0 z-0">
  
  {/* The Image Layer - Reduced blur and increased opacity */}
  <div 
    className="absolute inset-0 scale-105 blur-xl opacity-60 animate-slow-zoom" 
    style={{ 
      backgroundImage: "url('/bg.webp')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} 
  />

  {/* FIXED GRADIENT: Changed from background to transparent to stop the "white" wash */}
  
  {/* Glow effects - Lowered blur so they don't turn everything white */}
  <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px]" />
  <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />

</div>
</div>

  {/* Content (relative z-10 ensures it stays on top) */}
  <div className="container px-4 md:px-6 mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Text */}
      <div className="space-y-8 text-center lg:text-left">
        <div className="inline-flex items-center rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary backdrop-blur-md hover:scale-105 transition-transform">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
          Admissions for Fall 2026 are now open
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
          Empowering the <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Leaders of Tomorrow
          </span>
        </h1>

        <p className="max-w-[600px] mx-auto lg:mx-0 text-black text-lg md:text-xl leading-relaxed">
          A world-class educational environment fostering innovation,
          critical thinking, and a global perspective.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            href="/admissions"
            className="h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_10px_20px_rgba(var(--primary),0.3)] hover:-translate-y-1 transition-all flex items-center justify-center group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"/>
          </Link>

          <Link
            href="/about"
            className="h-14 px-8 rounded-full border border-border bg-background/40 backdrop-blur-md font-semibold hover:bg-muted transition-all flex items-center justify-center"
          >
            Explore Campus
          </Link>
        </div>
      </div>

      {/* Right Image with Float Effect */}
      <div className="relative mx-auto w-full max-w-[550px] aspect-square group rounded-3xl overflow-hidden shadow-2xl animate-float">
        <Image
          src="/Home.jpg"
          alt="Students"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Floating Stats Card */}
        <div className="absolute bottom-6 left-6 right-6 glass-white p-6 rounded-2xl flex items-center justify-between border border-white/20">
          <div>
            <p className="text-3xl font-black text-primary">2,500+</p>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Global Alumni</p>
          </div>
          <div className="h-10 w-[1px] bg-border/50"/>
          <div>
            <p className="text-3xl font-black text-primary">1:10</p>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Student Ratio</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* --- QUICK PORTALS --- */}
      <section className="relative z-20 -mt-10 mb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col md:flex-row">
            <div className="bg-muted/50 p-6 md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border">
              <h3 className="text-lg font-bold">Information For...</h3>
              <p className="text-sm text-muted-foreground mt-1">Select your portal for quick access.</p>
            </div>
            <div className="flex-1 p-2 flex flex-col sm:flex-row gap-2">
              <TabButton active={activeTab === 'prospective'} onClick={() => setActiveTab('prospective')} icon={<Globe size={18}/>} label="Future Students" />
              <TabButton active={activeTab === 'current'} onClick={() => setActiveTab('current')} icon={<BookOpen size={18}/>} label="Current Students" />
              <TabButton active={activeTab === 'parents'} onClick={() => setActiveTab('parents')} icon={<Users size={18}/>} label="Parents" />
              <TabButton active={activeTab === 'faculty'} onClick={() => setActiveTab('faculty')} icon={<Award size={18}/>} label="Faculty & Staff" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Horizon?</h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard 
              icon={<Library size={28} />} 
              title="Modern Curriculum" 
              description="Our syllabus is continually updated to meet the demands of a rapidly changing digital and global landscape."
            />
            <FeatureCard 
              icon={<Globe size={28} />} 
              title="Global Community" 
              description="Representing over 40 countries, our student body fosters a diverse, inclusive, and rich cultural exchange."
            />
            <FeatureCard 
              icon={<GraduationCap size={28} />} 
              title="Expert Mentors" 
              description="Learn directly from industry leaders and distinguished academics dedicated to your personal success."
            />
          </div>
        </div>
      </section>

      {/* --- MAIN DASHBOARD / SCHOOL MODULES --- */}
      <section className="py-16 bg-muted/10 border-t border-border">
        <div className="container px-4 mx-auto">
          {/* Added items-start to prevent column stretching which causes overlapping issues */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <Calendar className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold">News & Events</h2>
                </div>
                <NewsEvents />
              </div>

              <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                  <Award className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold">Recent Achievements</h2>
                </div>
                <Achievements />
              </div>

              <div className="bg-card rounded-3xl border border-border p-6 shadow-sm">
                 <h2 className="text-2xl font-bold mb-6">Campus Life Gallery</h2>
                <Gallery />
              </div>
            </div>

            {/* Sidebar Column */}
<div className="lg:col-span-4 space-y-10">
  
  {/* FIX: Removed the 'sticky' from the Notice Board wrapper.
    If you want the WHOLE sidebar to stick, you would move 'sticky' 
    to the parent lg:col-span-4. If you want them to just scroll 
    normally, keep it as 'relative' or 'block'.
  */}
  <div className="relative">
    
    {/* Notice Board Card */}
    <div className="bg-primary/5 rounded-3xl border border-primary/20 p-6 shadow-md backdrop-blur-sm mb-10">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-primary/20">
        <h2 className="text-xl font-bold text-foreground">Notice Board</h2>
        <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-md">Live</span>
      </div>
      <div className="h-[400px] overflow-y-auto pr-2 custom-scrollbar">
         <NoticeBoard />
      </div>
      <Link href="/public/notice" className="block text-center text-sm font-semibold text-primary mt-6 hover:underline">
        View All Notices &rarr;
      </Link>
    </div>

   
    
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
    <div className="group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-200 ${
        active 
          ? 'bg-primary text-primary-foreground shadow-md' 
          : 'bg-transparent text-foreground hover:bg-muted'
      }`}
    >
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}