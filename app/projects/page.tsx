// app/projects/page.tsx
"use client";
import PageShell from "../components/PageShell";

export default function ProjectsPage() {
  return (
    <PageShell navAnchor="top">
      <section className="min-h-screen px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="aspect-[4/3] bg-black/5 rounded" />
          <div className="aspect-[4/3] bg-black/5 rounded" />
          <div className="aspect-[4/3] bg-black/5 rounded" />
        </div>
      </section>
    </PageShell>
  );
}