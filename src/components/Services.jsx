import React from 'react';
import { 
  Calculator, ShieldCheck, PieChart, Briefcase, 
  Globe, Landmark, Scale, TrendingUp 
} from 'lucide-react';

const services = [
  {
    title: "Income Tax & Compliance",
    desc: "Expert tax planning, filing, and representation for individuals and corporations to ensure zero penalties.",
    icon: <Calculator size={32} />
  },
  {
    title: "Statutory Audit",
    desc: "Thorough independent audits that provide credibility to your financial statements for stakeholders.",
    icon: <Landmark size={32} />
  },
  {
    title: "Virtual CFO Services",
    desc: "Strategic financial leadership for startups and SMEs, including budgeting, forecasting, and board reporting.",
    icon: <Briefcase size={32} />
  },
  {
    title: "GST Consultancy",
    desc: "Complete GST lifecycle management from registration and monthly returns to annual reconciliations.",
    icon: <PieChart size={32} />
  },
  {
    title: "International Taxation",
    desc: "Expert guidance on cross-border transactions, transfer pricing, and Double Taxation Avoidance Agreements (DTAA).",
    icon: <Globe size={32} />
  },
  {
    title: "Internal Audit & Risk",
    desc: "Identifying operational gaps and strengthening internal controls to safeguard enterprise assets.",
    icon: <ShieldCheck size={32} />
  },
  {
    title: "Business Restructuring",
    desc: "Advisory on mergers, acquisitions, and legal entity structures to optimize business efficiency.",
    icon: <Scale size={32} />
  },
  {
    title: "Investment Advisory",
    desc: "Data-driven wealth management and capital allocation strategies for long-term sustainable growth.",
    icon: <TrendingUp size={32} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Comprehensive <span className="text-blue-700">Financial</span> Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From early-stage startups to established enterprises, we provide the precision and expertise needed to navigate complex financial landscapes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}