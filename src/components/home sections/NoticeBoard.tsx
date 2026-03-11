import { Pin, Calendar, ChevronRight, Archive } from "lucide-react";

const notices = [
  { id: 1, title: "Final Term Examination Schedule 2026", date: "Mar 05, 2026", isPinned: true },
  { id: 2, title: "Annual Science Fair Registration Open", date: "Mar 02, 2026", isPinned: true },
  { id: 3, title: "School Closure Notice for National Holiday", date: "Feb 28, 2026", isPinned: false },
  { id: 4, title: "Updated Transport Routes for Spring", date: "Feb 25, 2026", isPinned: false },
];

export default function NoticeBoard() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gradient mb-2">Notice Board</h2>
          <p className="text-muted-foreground">Stay updated with the latest announcements.</p>
        </div>
        <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
          <Archive size={18} /> View Archive
        </button>
      </div>

      <div className="glass rounded-2xl p-6 shadow-soft flex flex-col gap-4">
        {notices.map((notice) => (
          <div 
            key={notice.id} 
            className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-soft hover:bg-accent/20 ${
              notice.isPinned ? "border-primary/30 bg-primary/5" : "border-border/50 bg-background/50"
            }`}
          >
            <div className="mt-1">
              {notice.isPinned ? (
                <Pin className="text-primary rotate-45" size={20} />
              ) : (
                <Calendar className="text-muted-foreground" size={20} />
              )}
            </div>
            <div className="flex-1">
              <h3 className={`font-semibold text-lg ${notice.isPinned ? "text-foreground" : "text-foreground/80"}`}>
                {notice.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{notice.date}</p>
            </div>
            <button className="mt-2 text-muted-foreground hover:text-primary transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}