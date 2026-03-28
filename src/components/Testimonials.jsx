import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: "Arjun Mehta", role: "Founder, BlueCore Tech", text: "Exceptional tax planning. They saved us from a massive compliance headache during our last audit." },
  { name: "Sara Khan", role: "Director, Luxe Retail", text: "Professional and precise. Their GST consultancy is the best in Mumbai." },
  { name: "Rajesh Iyer", role: "Real Estate Developer", text: "Durrani Associates handled our corporate restructuring seamlessly. Highly recommended." },
  { name: "Ananya Gupta", role: "Freelance Designer", text: "Perfect for small business owners. They make complex tax filings feel like a breeze." },
  { name: "Vikram Singh", role: "CEO, AgriFarm", text: "Transparent pricing and expert advice. They are truly our strategic partners." },
  { name: "Deepak Verma", role: "Startup Founder", text: "The team is quick to respond and very knowledgeable about the latest tax laws." },
];

const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 w-[350px] mx-4 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-blue-600 text-blue-600" />)}
    </div>
    <p className="text-slate-600 italic mb-6 leading-relaxed">"{review.text}"</p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700">
        {review.name[0]}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 leading-none">{review.name}</h4>
        <span className="text-xs text-slate-400 uppercase tracking-tighter">{review.role}</span>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Trusted by <span className="text-blue-700">Hundreds</span> of Clients
        </h2>
        <p className="text-slate-600">Don't just take our word for it—hear from the businesses we help every day.</p>
      </div>

      <div className="pause-on-hover flex flex-col gap-8">
        {/* Row 1: Scrolling Left */}
        <div className="flex w-fit animate-scroll">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-fit animate-scroll-reverse">
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}