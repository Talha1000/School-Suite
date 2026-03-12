export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto p-6 md:p-8">
      <h1 className="text-3xl font-bold tracking-tight mb-4">Admin Dashboard</h1>
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <p className="text-muted-foreground">Overview of school operations, user roles, and system metrics.</p>
      </div>
    </div>
  );
}