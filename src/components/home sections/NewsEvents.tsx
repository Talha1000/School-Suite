import { CalendarDays, MapPin, Tag } from "lucide-react";

export default function NewsEvents() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gradient mb-8">News & Events</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Featured Event */}
        <div className="lg:col-span-2 glass rounded-3xl overflow-hidden shadow-soft group cursor-pointer relative">
          <div className="h-72 bg-muted relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img 
              src="/api/placeholder/800/400" 
              alt="Featured Event" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Featured
            </span>
          </div>
          <div className="p-8 relative z-20 -mt-12 glass-white mx-6 mb-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Annual Cultural Fest 2026</h3>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><CalendarDays size={16}/> April 15 - 17, 2026</span>
              <span className="flex items-center gap-1"><MapPin size={16}/> Main Auditorium</span>
            </div>
            <p className="text-foreground/80 line-clamp-2">Join us for a three-day celebration of art, music, and culture featuring performances by our talented students.</p>
          </div>
        </div>

        {/* Latest News List */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 mb-2 overflow-x-auto pb-2 scrollbar-hide">
            {["All", "Academics", "Sports", "Arts"].map((cat, i) => (
              <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? "bg-primary text-primary-foreground" : "glass border hover:bg-accent/50 text-foreground"}`}>
                {cat}
              </button>
            ))}
          </div>

          {[1, 2, 3].map((item) => (
            <div key={item} className="glass p-4 rounded-xl flex gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-20 h-20 bg-muted rounded-lg shrink-0 overflow-hidden">
                <img src={`/api/placeholder/100/100?id=${item}`} alt="News" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-semibold text-primary mb-1 flex items-center gap-1"><Tag size={12}/> Sports</span>
                <h4 className="font-semibold text-sm line-clamp-2 hover:text-primary cursor-pointer">Inter-School Basketball Championship Finals</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}