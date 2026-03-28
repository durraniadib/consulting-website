import React from 'react';

const logos = ["Fortune 500", "TechGlobal", "BlueHorizon", "EquityGroup", "NexusCorp", "PeakAdvisors"];

export default function LogoBar() {
  return (
    <div className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
          Trusted by Industry Leaders Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <span key={logo} className="text-xl md:text-2xl font-black text-slate-400 hover:text-blue-700 cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}