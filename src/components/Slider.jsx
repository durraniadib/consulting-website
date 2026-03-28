import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const slides = [
  { text: "Vertex Financial is a game-changer for our compliance. Their audit process is incredibly thorough.", author: "Arjun Mehta", company: "BlueCore Tech" },
  { text: "Their fractional CFO services allowed us to scale 3x faster than we originally projected.", author: "Sara Khan", company: "Luxe Retail" },
  { text: "The most precise and professional tax consultancy firm in the industry today.", author: "Vikram Singh", company: "AgriFarm" },
];

export default function Slider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-blue-700 text-white relative overflow-hidden">
      <Quote className="absolute top-10 right-10 w-64 h-64 text-white/5 -rotate-12" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="relative h-64 md:h-48">
          {slides.map((slide, i) => (
            <div key={i} className={`absolute inset-0 transition-all duration-1000 transform ${active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-2xl md:text-3xl font-medium italic mb-8">"{slide.text}"</p>
              <h4 className="font-bold text-xl">{slide.author}</h4>
              <p className="text-blue-200 text-sm uppercase tracking-widest">{slide.company}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`h-1.5 transition-all duration-500 rounded-full ${active === i ? 'w-10 bg-white' : 'w-4 bg-white/30'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}