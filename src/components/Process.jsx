import React from 'react';

const Process = () => {
  const steps = [
    { 
      num: '01', 
      title: 'Consultation', 
      desc: 'We analyze your current financial health and tax liabilities through a deep-dive session.' 
    },
    { 
      num: '02', 
      title: 'Strategy', 
      desc: 'Developing a custom roadmap for tax optimization, compliance, and risk management.' 
    },
    { 
      num: '03', 
      title: 'Execution', 
      desc: 'Our experts handle the heavy lifting—filing, auditing, and implementing financial controls.' 
    },
    { 
      num: '04', 
      title: 'Growth', 
      desc: 'Continuous support with quarterly reviews to ensure your business scales legally and safely.' 
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our <span className="text-blue-400">4-Step</span> Process
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We’ve streamlined our onboarding to ensure you get professional financial advisory without the typical complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative group p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10">
              {/* Big background number for design depth */}
              <div className="text-8xl font-black text-white/5 absolute -top-4 left-4 group-hover:text-blue-500/10 transition-colors pointer-events-none">
                {step.num}
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-blue-900/50">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;