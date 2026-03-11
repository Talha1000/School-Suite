"use client";

import * as React from "react";
import Link from "next/link";
import ModeToggle from "@/components/ui/ModeToggle";

import {
  ChevronDown, Menu, X, GraduationCap,
  Users, School, BookOpen, Calendar,
  ShieldCheck, Map, Moon, Sun, Pin, ChevronRight
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

// --- Mock Data for Notices ---
const notices = [
  { id: 1, title: "Final Term Examination Schedule 2026", date: "Mar 05, 2026", isPinned: true },
  { id: 2, title: "Annual Science Fair Registration Open", date: "Mar 02, 2026", isPinned: true },
  { id: 3, title: "School Closure Notice for National Holiday", date: "Feb 28, 2026", isPinned: false },
  { id: 4, title: "Updated Transport Routes for Spring", date: "Feb 25, 2026", isPinned: false },
];

// --- Type Definitions ---
interface SubItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  isNotice?: boolean;
}

interface NavSection {
  name: string;
  href?: string;
  subItems?: SubItem[];
}

const navData: NavSection[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Academics",
    subItems: [
      { name: "Curriculum", href: "/academics/curriculum", description: "Core academic standards and electives.", icon: <BookOpen size={20} /> },
      { name: "Departments", href: "/academics/departments", description: "Explore our specialized subject faculties.", icon: <School size={20} /> },
      { name: "Library", href: "/academics/library", description: "Our research hub and digital resources.", icon: <GraduationCap size={20} /> },
      { name: "Academic Calendar", href: "/academics/calendar", description: "Stay updated on semesters and holidays.", icon: <Calendar size={20} /> },
    ],
  },
  {
    name: "Admissions",
    subItems: [
      { name: "Process", href: "/admissions/apply", description: "Step-by-step guide to joining us." },
      { name: "Fees & Scholarships", href: "/admissions/fees", description: "Investing in your child's future." },
      { name: "Virtual Tour", href: "/admissions/tour", description: "Explore our campus from anywhere.", icon: <Map size={20} /> },
      { name: "FAQ", href: "/admissions/faq", description: "Common questions and answers." },
    ],
  },
  {
    name: "Facilities",
    subItems: [
      { name: "Academic Facilities", href: "/facilities/academic" },
      { name: "Sports & Physical Ed", href: "/facilities/sports" },
      { name: "Arts & Performance", href: "/facilities/arts" },
      { name: "Campus & Welfare", href: "/facilities/infrastructure" },
    ],
  },
  { name: "Payment", href: "/payment" },
  { name: "Career", href: "/career" },
  { name: "Blog", href: "/blog" },
  {
    name: "Notice",
    subItems: notices.map((notice) => ({
      name: notice.title,
      href: `/notice/${notice.id}`,
      description: notice.date,
      isNotice: true,
      icon: notice.isPinned ? <Pin className="rotate-45 text-red-500" size={20} /> : <Calendar className="text-slate-400" size={20} />,
    })),
  },
];

// --- Theme Toggle Component ---
 <ModeToggle/>

// --- Main Navbar Component ---
export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  // Prevent wrapping to keep width perfectly in bounds
  const navItemClass = "bg-transparent text-slate-600 dark:text-slate-300 text-[14px] 2xl:text-[15px] font-semibold px-2.5 py-2 xl:px-3 rounded-full hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:text-[oklch(0.50_0.12_255)] dark:hover:text-[oklch(0.65_0.15_255)] transition-all duration-300 ease-out data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 data-[state=open]:text-[oklch(0.50_0.12_255)] dark:data-[state=open]:text-[oklch(0.65_0.15_255)] whitespace-nowrap";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      {/* Responsive Height: h-16 on mobile/tablets, h-20 on desktops */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        
        {/* Branding */}
        <Link href="/" className="flex flex-col group z-[60] hover:scale-105 transition-transform duration-300 ease-out flex-shrink-0 mr-2">
          <span className="text-xl xl:text-2xl font-extrabold bg-gradient-to-r from-[oklch(0.50_0.12_255)] to-[oklch(0.35_0.10_250)] dark:from-[oklch(0.65_0.15_255)] dark:to-[oklch(0.50_0.12_250)] bg-clip-text text-transparent transition-all duration-500 whitespace-nowrap">
            XYZ School
          </span>
          <span className="text-[9px] xl:text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500/80 dark:text-slate-400">
            (demo) • Excellence
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex justify-center flex-1">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-x-0.5 2xl:gap-x-1">
              {navData.map((section) => (
                <NavigationMenuItem key={section.name}>
                  {section.subItems ? (
                    <>
                      <NavigationMenuTrigger className={navItemClass}>
                        {section.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className={cn(
                          "grid gap-2 p-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border dark:border-slate-800 rounded-2xl shadow-xl shadow-black/5 dark:shadow-black/20",
                          section.name === "Notice" ? "w-[450px] grid-cols-1" : "w-[550px] md:grid-cols-2"
                        )}>
                          {section.name === "Notice" && (
                             <div className="px-4 pt-3 pb-2 flex justify-between items-center border-b border-slate-100 dark:border-slate-800 mb-2">
                               <span className="font-bold text-slate-800 dark:text-slate-200">Recent Notices</span>
                               <Link href="/notice" className="text-xs font-semibold text-[oklch(0.50_0.12_255)] hover:underline">View All</Link>
                             </div>
                          )}
                          {section.subItems.map((item) => (
                            <ListItem
                              key={item.name}
                              title={item.name}
                              href={item.href}
                              icon={item.icon}
                              isNotice={item.isNotice}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link href={section.href || "/"} className={cn("block", navItemClass)}>
                        {section.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={cn("block", navItemClass)}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions Area */}
        <div className="flex items-center gap-3 xl:gap-5 z-[60] flex-shrink-0 ml-2">
          
          <ModeToggle />

          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full text-[14px] 2xl:text-[15px] font-bold hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all duration-300 outline-none whitespace-nowrap">
                Portals <ChevronDown size={16} className="group-data-[state=open]:rotate-180 transition-transform duration-300" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-3 mt-2 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border dark:border-slate-800 rounded-2xl shadow-xl">
                <DropdownMenuLabel className="dark:text-slate-300 text-sm px-2">Institutional Access</DropdownMenuLabel>
                <DropdownMenuSeparator className="dark:bg-slate-800 my-2" />
                <PortalItem href="/auth/login/student" label="Student Login" desc="Grades & Resources" icon={<GraduationCap className="text-blue-500 dark:text-blue-400" />} />
                <PortalItem href="/auth/login/parent" label="Parent Portal" desc="Track Progress" icon={<Users className="text-purple-500 dark:text-purple-400" />} />
                <PortalItem href="/auth/login/teacher" label="Teacher Portal" desc="Classroom Management" icon={<BookOpen className="text-yellow-500 dark:text-yellow-400" />} />
                <PortalItem href="/auth/login/admin" label="Administration" desc="Management" icon={<ShieldCheck className="text-orange-500 dark:text-orange-400" />} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link 
            href="/apply" 
            className="hidden lg:flex px-6 py-2 bg-[oklch(0.50_0.12_255)] text-white text-[14px] 2xl:text-[15px] font-bold rounded-full shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap"
          >
            Apply Now
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileOpen(true)}
            className="xl:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors duration-300"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={cn("fixed inset-0 z-[100] transition-opacity duration-500 ease-in-out", isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
        {/* Fixed Width: Dynamic to viewport, prevents mobile overflow */}
        <aside className={cn("absolute right-0 top-0 h-[100dvh] w-[85vw] sm:w-[360px] bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-transform duration-500 ease-out shadow-2xl flex flex-col", isMobileOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="p-5 border-b border-slate-200 dark:border-white/10 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50 flex-shrink-0">
            <span className="font-bold text-lg tracking-tight">Menu</span>
            <button onClick={() => setIsMobileOpen(false)} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors duration-300">
              <X size={24} />
            </button>
          </div>
          {/* Fixed Height: Uses flex-1 so it dynamically fits between header and footer without breaking */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1 pb-24">
            {navData.map((item) => (
              <MobileAccordion key={item.name} item={item} close={() => setIsMobileOpen(false)} />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white dark:from-slate-950 dark:via-slate-950 to-transparent pt-10 border-t border-slate-200/50 dark:border-white/5">
            <Link href="/apply" onClick={() => setIsMobileOpen(false)} className="block w-full py-3.5 bg-[oklch(0.50_0.12_255)] text-center text-white text-base rounded-xl font-bold shadow-xl hover:scale-[1.02] transition-transform duration-300">
              Start Application 2026
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}

// ... [Helper components remain the same] ...

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode; isNotice?: boolean }>(
  ({ className, title, children, icon, href, isNotice, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          className={cn(
            "group flex items-start gap-4 select-none rounded-xl p-4 no-underline outline-none transition-all duration-300 ease-out hover:bg-slate-100/80 dark:hover:bg-slate-800/80 focus:bg-slate-100 dark:focus:bg-slate-800 hover:scale-[1.01]",
            isNotice && "border border-transparent hover:border-slate-200 dark:hover:border-slate-700",
            className
          )}
          {...props}
        >
          {icon && (
            <div className={cn("mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110", isNotice && "bg-slate-100 dark:bg-slate-900 p-2 rounded-lg")}>
              {icon}
            </div>
          )}
          <div className="flex-1 space-y-1">
            <div className={cn("font-bold leading-none transition-colors duration-300", isNotice ? "text-base text-slate-800 dark:text-slate-200 group-hover:text-[oklch(0.50_0.12_255)]" : "text-[15px] text-[oklch(0.50_0.12_255)] dark:text-[oklch(0.65_0.15_255)]")}>
              <span className="line-clamp-2 leading-tight">{title}</span>
            </div>
            <p className={cn("line-clamp-2 leading-snug font-medium", isNotice ? "text-sm text-slate-500 pt-1" : "text-xs text-slate-500 dark:text-slate-400 pt-0.5")}>
              {children}
            </p>
          </div>
          {isNotice && (
            <ChevronRight size={18} className="text-slate-300 dark:text-slate-600 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

function PortalItem({ href, label, desc, icon }: { href: string; label: string; desc: string; icon: React.ReactNode }) {
  return (
    <DropdownMenuItem asChild className="rounded-xl cursor-pointer p-3 mb-1 focus:bg-slate-100 dark:focus:bg-slate-800 hover:scale-[1.02] transition-all duration-300">
      <Link href={href} className="flex items-center gap-4 w-full">
        <div className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-lg shadow-sm">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-[15px] text-slate-800 dark:text-slate-100">{label}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{desc}</span>
        </div>
      </Link>
    </DropdownMenuItem>
  );
}

function MobileAccordion({ item, close }: { item: NavSection; close: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  if (!item.subItems) {
    return (
      <Link href={item.href || "#"} onClick={close} className="block px-4 py-3.5 text-base text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl hover:text-[oklch(0.50_0.12_255)] dark:hover:text-[oklch(0.65_0.15_255)] transition-all duration-300">
        {item.name}
      </Link>
    );
  }
  return (
    <div className="mb-1">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between px-4 py-3.5 text-base text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl hover:text-[oklch(0.50_0.12_255)] dark:hover:text-[oklch(0.65_0.15_255)] transition-all duration-300">
        {item.name}
        <ChevronDown size={18} className={cn("transition-transform duration-500 ease-out", isOpen && "rotate-180")} />
      </button>
      <div className={cn("overflow-hidden transition-all duration-500 ease-in-out", isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0")}>
        <div className="ml-5 mt-1 border-l-2 border-slate-100 dark:border-slate-800 flex flex-col gap-0.5 pl-2">
          {item.subItems.map((sub) => (
            <Link key={sub.name} href={sub.href} onClick={close} className="px-4 py-3 text-[14px] font-medium text-slate-500 dark:text-slate-400 hover:text-[oklch(0.50_0.12_255)] dark:hover:text-[oklch(0.65_0.15_255)] hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-300 line-clamp-1">
              {sub.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}