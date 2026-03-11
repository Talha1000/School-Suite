import { Mail, Linkedin } from "lucide-react";

const faculty = [
  { name: "Dr. Sarah Jenkins", role: "Principal", subject: "Administration", img: "/api/placeholder/300/300" },
  { name: "Robert Chen", role: "Head of Science", subject: "Physics", img: "/api/placeholder/300/300" },
  { name: "Emily Thorne", role: "Senior Teacher", subject: "Literature", img: "/api/placeholder/300/300" },
  { name: "Michael O'Connor", role: "Athletic Director", subject: "Physical Ed.", img: "/api/placeholder/300/300" },
];

export default function Faculty() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-2">Meet Our Faculty</h2>
          <p className="text-muted-foreground">Learn from experienced and dedicated educators.</p>
        </div>
        <button className="text-primary hover:underline font-medium text-sm">View All Directory</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {faculty.map((member, idx) => (
          <div key={idx} className="glass rounded-2xl p-5 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-soft">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-background shadow-md">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
            <p className="text-primary font-medium text-sm mt-1 mb-1">{member.role}</p>
            <p className="text-muted-foreground text-sm mb-5">{member.subject}</p>
            
            <div className="flex justify-center gap-3 border-t border-border/50 pt-4">
              <button className="text-muted-foreground hover:text-primary transition-colors"><Mail size={18} /></button>
              <button className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}