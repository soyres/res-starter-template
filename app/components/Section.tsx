export const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="max-w-3xl mx-auto py-12 px-4">
    {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
    <div className="text-gray-800 text-base">{children}</div>
  </section>
)
