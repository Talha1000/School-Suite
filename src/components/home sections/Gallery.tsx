import { ImageIcon } from "lucide-react";

const albums = [
  { title: "Graduation Day 2025", count: 42, colSpan: "md:col-span-2 md:row-span-2" },
  { title: "Science Exhibition", count: 18, colSpan: "col-span-1" },
  { title: "Sports Day", count: 35, colSpan: "col-span-1" },
  { title: "Campus Tour", count: 12, colSpan: "md:col-span-2" },
];

export default function Gallery() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gradient mb-2">Moments in Focus</h2>
        <p className="text-muted-foreground">Explore life at our campus through our photo galleries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {albums.map((album, idx) => (
          <div 
            key={idx} 
            className={`relative rounded-3xl overflow-hidden group cursor-pointer ${album.colSpan}`}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-500" />
            <img 
              src={`/api/placeholder/600/400?gallery=${idx}`} 
              alt={album.title}
              className="w-full h-full object-cover animate-slow-zoom" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-white font-bold text-lg">{album.title}</h3>
              <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                <ImageIcon size={14} /> {album.count} Photos
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}