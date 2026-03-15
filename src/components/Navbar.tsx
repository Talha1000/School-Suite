"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  ChevronDown, Menu, X, GraduationCap,
  Users, School, BookOpen, Calendar,
  ShieldCheck, Map, Pin, ChevronRight,
  LayoutGrid, Megaphone
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

// --- Nav Data ---
const navData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/public/about" },
  {
    name: "Academics",
    subItems: [
      { name: "Curriculum", href: "/public/academics/curriculum", description: "Core academic standards.", icon: <BookOpen size={18} /> },
      { name: "Departments", href: "/public/academics/departments", description: "Specialized subject faculties.", icon: <School size={18} /> },
      { name: "Library", href: "/public/academics/library", description: "Digital resources.", icon: <GraduationCap size={18} /> },
      { name: "Academic Calendar", href: "/public/academics/calendar", description: "Semesters and holidays.", icon: <Calendar size={18} /> },
    ],
  },
  {
    name: "Admissions",
    subItems: [
      { name: "Process", href: "/public/admissions/apply", description: "Guide to joining us." },
      { name: "Fees & Scholarships", href: "/public/admissions/fees", description: "Investment details." },
      { name: "Virtual Tour", href: "/public/admissions/tour", description: "Explore campus.", icon: <Map size={18} /> },
    ],
  },
  {
    name: "Facilities",
    subItems: [
      { name: "Sports & Physical Ed", href: "/public/facilities/sports" },
      { name: "Arts & Performance", href: "/public/facilities/arts" },
      { name: "Campus & Welfare", href: "/public/facilities/infrastructure" },
    ],
  },
  { name: "Payment", href: "/public/payment" },
  { name: "Career", href: "/public/career" },
  { name: "Blog", href: "/public/blog" },
  {
    name: "Notice",
    subItems: [
      { name: "Final Term Exam Schedule", href: "/notice/1", description: "Mar 05, 2026", isNotice: true, isPinned: true },
      { name: "Annual Science Fair", href: "/notice/2", description: "Mar 02, 2026", isNotice: true, isPinned: true },
    ],
  },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [isAtTop, setIsAtTop] = React.useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
    setIsAtTop(latest < 50);
  });

  // Reveal navbar if mouse moves to the top 20px
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 20) setHidden(false);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navItemClass = "bg-transparent text-slate-600 dark:text-slate-300 text-[13.5px] 2xl:text-[14.5px] font-bold px-3 py-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 whitespace-nowrap";

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-[60] w-full transition-all duration-300",
        isAtTop ? "bg-transparent py-4" : "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-0 shadow-sm"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Branding */}
        <Link href="/" className="flex flex-col group flex-shrink-0">
          <span className="text-xl xl:text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent transition-all duration-500">
            XYZ SCHOOL
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400">Excellence Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navData.map((section) => (
                <NavigationMenuItem key={section.name}>
                  {section.subItems ? (
                    <>
                      <NavigationMenuTrigger className={navItemClass}>{section.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className={cn(
                          "grid gap-2 p-4 bg-white dark:bg-slate-950 rounded-2xl border dark:border-slate-800 shadow-2xl",
                          section.name === "Notice" ? "w-[400px] grid-cols-1" : "w-[550px] grid-cols-2"
                        )}>
                          {section.name === "Notice" && (
                            <div className="px-2 pb-2 flex justify-between items-center border-b border-slate-100 dark:border-slate-800 mb-2">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Recent Notices</span>
                              <Link href="/notice" className="text-[11px] font-bold text-blue-600 hover:underline">View All</Link>
                            </div>
                          )}
                          {section.subItems.map((item) => (
                            <ListItem 
                              key={item.name} 
                              title={item.name} 
                              href={item.href} 
                              icon={item.icon || (section.name === "Notice" ? <Megaphone size={16}/> : <LayoutGrid size={16}/>)}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link href={section.href || "#"} className={navItemClass}>{section.name}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Portals Area - Kept exactly as original */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full text-[14px] font-bold hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all duration-300 outline-none whitespace-nowrap">
                Portals <ChevronDown size={16} className="group-data-[state=open]:rotate-180 transition-transform duration-300" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-3 mt-2 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border dark:border-slate-800 rounded-2xl shadow-xl">
                <DropdownMenuLabel className="dark:text-slate-300 text-xs px-2 mb-1 uppercase tracking-tight font-bold">Institutional Access</DropdownMenuLabel>
                <DropdownMenuSeparator className="dark:bg-slate-800 my-2" />
                <PortalItem href="/auth/login/student" label="Student Login" desc="Grades & Resources" icon={<GraduationCap className="text-blue-500" />} />
                <PortalItem href="/auth/login/parent" label="Parent Portal" desc="Track Progress" icon={<Users className="text-purple-500" />} />
                <PortalItem href="/auth/login/teacher" label="Teacher Portal" desc="Classroom Management" icon={<BookOpen className="text-yellow-500" />} />
                <PortalItem href="/auth/login/admin" label="Administration" desc="Management" icon={<ShieldCheck className="text-orange-500" />} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link href="/apply" className="hidden lg:flex px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
            Apply Now
          </Link>

          <button onClick={() => setIsMobileOpen(true)} className="xl:hidden p-2 text-slate-600 dark:text-slate-300"><Menu size={24} /></button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]" />
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed right-0 top-0 h-full w-[85%] max-w-[320px] bg-white dark:bg-slate-950 z-[80] shadow-2xl p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setIsMobileOpen(false)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full"><X size={20} /></button>
              </div>
              <div className="space-y-2">
                {navData.map(item => (
                  <Link key={item.name} href={item.href || "#"} onClick={() => setIsMobileOpen(false)} className="flex items-center justify-between p-3 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-all">
                    {item.name} <ChevronRight size={14} className="opacity-50" />
                  </Link>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// --- Internal Helper Components ---

const ListItem = ({ title, children, icon, href }: any) => (
  <li>
    <Link href={href} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all duration-300">
      <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="text-[14px] font-bold text-slate-800 dark:text-slate-200 leading-tight group-hover:text-blue-600 transition-colors">{title}</div>
        <p className="text-xs text-slate-500 line-clamp-1 mt-1 font-medium">{children}</p>
      </div>
    </Link>
  </li>
);

function PortalItem({ href, label, desc, icon }: any) {
  return (
    <DropdownMenuItem asChild className="rounded-xl cursor-pointer p-3 mb-1 focus:bg-slate-100 dark:focus:bg-slate-800 transition-all duration-300">
      <Link href={href} className="flex items-center gap-4 w-full">
        <div className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-lg shadow-sm">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-[14px] text-slate-800 dark:text-slate-100">{label}</span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{desc}</span>
        </div>
      </Link>
    </DropdownMenuItem>
  );
}