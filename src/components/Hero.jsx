import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            ISO 9001:2025 Certified Firm
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
            Precision In <br />
            <span className="text-blue-700">Financial</span> Strategy.
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
            Vertex Financial provides expert Tax, Audit, and Advisory services designed to scale your enterprise with total legal compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="flex items-center justify-center gap-3 bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-800 transition-all hover:shadow-2xl hover:shadow-blue-200 group">
              Start Your Audit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center px-10 py-5 rounded-2xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-blue-400 transition-all">
              Our Expertise
            </button>
          </div>
        </div>

        <div className="relative lg:block hidden">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200 aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000"
              alt="Modern Financial Office"
              className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              loading="eager"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000";
              }}
            />
          </div>
          {/* Floating Achievement Card */}
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 z-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none">100%</p>
                <p className="text-sm text-slate-500 font-medium">Compliance Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}