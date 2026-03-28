export default function Experience() {
  const stats = [
    { label: "Years of Practice", value: "12+" },
    { label: "Active Clients", value: "450+" },
    { label: "Tax Filings", value: "2.5k" },
    { label: "Audit Reports", value: "800+" }
  ];

  return (
    <section id="experience" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center border-r last:border-0 border-slate-700">
            <div className="text-4xl font-extrabold text-blue-400 mb-1">{stat.value}</div>
            <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}