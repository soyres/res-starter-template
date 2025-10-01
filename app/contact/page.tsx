// app/contact/page.tsx
"use client";
import PageShell from "../components/PageShell";

export default function ContactPage() {
  return (
    <PageShell navAnchor="top">
      <section className="min-h-screen px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <p className="opacity-80">Get in touch...</p>
      </section>
    </PageShell>
  );
}