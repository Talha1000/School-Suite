"use client";

import * as React from "react";
import Link from "next/link";
import { 
  ChevronDown, Menu, X, GraduationCap, 
  Users, School, BookOpen, Calendar, Sparkles,
  ShieldCheck, Map, LayoutDashboard
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

// --- Type Definitions for Safety ---
interface SubItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavSection {
  name: string;
  href?: string;
  subItems?: SubItem[];
}

const navData: NavSection[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Academics",
    subItems: [
      { name: "Curriculum", href: "/academics/curriculum", description: "Core academic standards and electives.", icon: <BookOpen /> },
      { name: "Departments", href: "/academics/departments", description: "Explore our specialized subject faculties.", icon: <School /> },
      { name: "Library", href: "/academics/library", description: "Our research hub and digital resources.", icon: <GraduationCap /> },
      { name: "Academic Calendar", href: "/academics/calendar", description: "Stay updated on semesters and holidays.", icon: <Calendar /> },
    ],
  },
  {
    name: "Admissions",
    subItems: [
      { name: "Process", href: "/admissions/apply", description: "Step-by-step guide to joining us." },
      { name: "Fees & Scholarships", href: "/admissions/fees", description: "Investing in your child's future." },
      { name: "Virtual Tour", href: "/admissions/tour", description: "Explore our campus from anywhere.", icon: <Map /> },
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
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-slate-200/50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        
        {/* Branding: Left Aligned */}
        <Link href="/" className="flex flex-col group z-[60]">
          <span className="text-2xl font-bold bg-gradient-to-r from-[oklch(0.50_0.12_255)] to-[oklch(0.35_0.10_250)] bg-clip-text text-transparent transition-all duration-500">
            XYZ School
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500/80">
            (demo) • Excellence
          </span>
        </Link>

        {/* Desktop Navigation: Center */}
        <div className="hidden xl:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navData.map((section) => (
                <NavigationMenuItem key={section.name}>
                  {section.subItems ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-slate-600 font-semibold hover:text-[oklch(0.50_0.12_255)] data-[state=open]:text-[oklch(0.50_0.12_255)]">
                        {section.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                          {section.subItems.map((item) => (
                            <ListItem
                              key={item.name}
                              title={item.name}
                              href={item.href}
                              icon={item.icon}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-semibold text-slate-600 hover:text-[oklch(0.50_0.12_255)]")}>
                      <Link href={section.href || "/"}>
                        {section.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent font-semibold text-slate-600 hover:text-[oklch(0.50_0.12_255)]")}>
                  <Link href="/contact">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions Area: Right */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center gap-2 px-5 py-2.5 bg-[oklch(0.50_0.12_255)] text-white rounded-full text-sm font-bold shadow-lg shadow-blue-900/10 hover:brightness-110 active:scale-95 transition-all">
                Portals <ChevronDown size={16} className="group-data-[state=open]:rotate-180 transition-transform duration-300" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-2 mt-2">
                <DropdownMenuLabel>Institutional Access</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <PortalItem href="/auth/student" label="Student Login" desc="Grades & Resources" icon={<GraduationCap className="text-blue-500" />} />
                <PortalItem href="/auth/parent" label="Parent Portal" desc="Track Progress" icon={<Users className="text-purple-500" />} />
                <PortalItem href="/auth/admin" label="Administration" desc="Management" icon={<ShieldCheck className="text-orange-500" />} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link 
            href="/apply" 
            className="hidden lg:flex px-6 py-2.5 bg-white border-2 border-[oklch(0.50_0.12_255)] text-[oklch(0.50_0.12_255)] text-sm font-bold rounded-full animate-pulse-subtle hover:bg-[oklch(0.92_0.03_255)] transition-all"
          >
            Apply Now
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileOpen(true)}
            className="xl:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={cn("fixed inset-0 z-[100] transition-opacity duration-500", isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
        <aside className={cn("absolute right-0 top-0 h-full w-[320px] bg-[#0a1128] text-white transition-transform duration-500 ease-in-out shadow-2xl", isMobileOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <span className="font-bold italic text-lg tracking-tight">Navigation</span>
            <button onClick={() => setIsMobileOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {navData.map((item) => (
              <MobileAccordion key={item.name} item={item} close={() => setIsMobileOpen(false)} />
            ))}
          </div>
          <div className="p-6 bg-slate-900/40">
            <Link href="/apply" onClick={() => setIsMobileOpen(false)} className="block w-full py-4 bg-[oklch(0.50_0.12_255)] text-center text-white rounded-2xl font-bold shadow-xl">
              Start Application 2026
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}

// --- Helper Components ---

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }>(
  ({ className, title, children, icon, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          className={cn(
            "group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-[oklch(0.92_0.03_255)] hover:text-accent-foreground focus:bg-accent",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-bold leading-none text-[oklch(0.50_0.12_255)]">
            {icon && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-slate-500 pt-1 font-medium">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

function PortalItem({ href, label, desc, icon }: { href: string; label: string; desc: string; icon: React.ReactNode }) {
  return (
    <DropdownMenuItem asChild className="rounded-xl cursor-pointer py-3 focus:bg-[oklch(0.92_0.03_255)]">
      <Link href={href} className="flex items-center gap-3 w-full">
        <div className="p-2 bg-slate-100 rounded-lg group-focus/dropdown-menu-item:bg-white transition-colors">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-slate-700">{label}</span>
          <span className="text-[10px] text-slate-500 font-medium">{desc}</span>
        </div>
      </Link>
    </DropdownMenuItem>
  );
}

function MobileAccordion({ item, close }: { item: NavSection; close: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  if (!item.subItems) {
    return (
      <Link href={item.href || "#"} onClick={close} className="block px-4 py-3 text-slate-300 font-medium hover:text-white transition-colors">
        {item.name}
      </Link>
    );
  }
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between px-4 py-3 text-slate-300 font-medium hover:text-white transition-colors">
        {item.name}
        <ChevronDown size={16} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <div className={cn("overflow-hidden transition-all duration-500", isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0")}>
        <div className="ml-6 mt-1 border-l border-white/10 flex flex-col gap-1">
          {item.subItems.map((sub) => (
            <Link key={sub.name} href={sub.href} onClick={close} className="px-6 py-2.5 text-sm text-slate-400 hover:text-[oklch(0.50_0.12_255)] transition-colors">
              {sub.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}