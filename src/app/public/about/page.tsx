// src/app/(public)/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">About XYZ Academy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">
            Founded in 1998, XYZ Academy has established itself as a premier institution dedicated to academic excellence and character development.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            To cultivate a dynamic learning environment that inspires students to achieve their highest potential, fostering a lifelong love of learning and a commitment to serving their communities.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p>
            To be recognized globally as a model of educational innovation, where every student is empowered to lead with integrity and purpose.
          </p>
        </div>
      </div>
    </div>
  );
}