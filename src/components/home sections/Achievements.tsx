import { Trophy, Star, BookOpen, Users } from "lucide-react";

const stats = [
  { icon: Trophy, label: "National Awards", value: "24+" },
  { icon: Star, label: "Pass Rate", value: "99.8%" },
  { icon: BookOpen, label: "Scholarships", value: "$2M+" },
  { icon: Users, label: "Alumni Worldwide", value: "10k+" },
];

export default function Achievements() {
  return (
    <section className="py-20 my-10 relative overflow-hidden bg-primary/5">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-4">Excellence in Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Consistently pushing boundaries and achieving greatness in academics, sports, and extracurricular activities.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-soft hover:bg-background transition-colors duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                  <Icon className="text-primary" size={32} />
                </div>
                <h4 className="text-4xl font-black text-foreground mb-2 tracking-tight">{stat.value}</h4>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}