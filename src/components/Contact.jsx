import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Tax Planning',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., EmailJS or a backend API)
    console.log("Form Submitted:", formData);
    alert("Thank you! Our consultant will reach out to you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              Ready to <span className="text-blue-700">Optimize</span> Your Finances?
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              Schedule a free 15-minute consultation with our experts to discuss your business audit, 
              tax planning, or GST compliance needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-500">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-500">consult@Vertexfinancial.in</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Our Office</h4>
                  <p className="text-slate-500">Financial District, Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    placeholder="john@company.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Interested Service</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition appearance-none bg-white"
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>Tax Planning</option>
                  <option>Corporate Audit</option>
                  <option>GST Advisory</option>
                  <option>Business Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Briefly describe your requirements..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-200"
              >
                <Send size={18} />
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}