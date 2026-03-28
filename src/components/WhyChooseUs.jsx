import { ShieldCheck, Zap, Users, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: <ShieldCheck className="text-blue-600" />, title: "100% Compliance", desc: "Zero-penalty guarantee on all filings." },
    { icon: <Zap className="text-blue-600" />, title: "Fast Turnaround", desc: "Digital-first approach for quicker reports." },
    { icon: <Users className="text-blue-600" />, title: "Expert Panel", desc: "Seasoned consultants at your service." },
    { icon: <Award className="text-blue-600" />, title: "Industry Leader", desc: "Top-rated advisory firm in 2026." }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            More Than Just Accountants.<br/> 
            <span className="text-blue-700 font-black italic">We Are Your Growth Partners.</span>
          </h2>
          <p className="text-slate-600 mb-10 text-lg">
            Vertex Financial provides deep insights that go beyond bookkeeping. 
            We safeguard your wealth so you can focus on scaling your vision.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-lg">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-900">{f.title}</h4>
                  <p className="text-sm text-slate-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 bg-blue-50 rounded-[3rem] p-6 lg:p-12">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
            className="rounded-[2rem] shadow-2xl" 
            alt="Expert Consultant" 
          />
        </div>
      </div>
    </section>
  );
}