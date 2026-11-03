import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Zap, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const categories = [
    { name: 'Painter', icon: '🎨', count: '1,420 workers' },
    { name: 'Electrician', icon: '⚡', count: '980 workers' },
    { name: 'Plumber', icon: '🔧', count: '1,150 workers' },
    { name: 'Loading Helper', icon: '📦', count: '2,300 workers' },
    { name: 'Gardener', icon: '🌱', count: '430 workers' },
    { name: 'Cleaner', icon: '🧹', count: '890 workers' },
    { name: 'Carpenter', icon: '🪚', count: '760 workers' },
    { name: 'General Labour', icon: '🔨', count: '3,400 workers' },
  ];

  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-success-600 text-white py-20 px-4 sm:px-6 lg:px-8 text-center shadow-lg">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border border-white/20">
            🇮🇳 Verified Daily-Work Platform for India
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">Connect with Trusted Daily-Wage Workers Instantly</h1>
          <p className="text-lg sm:text-xl text-brand-50 max-w-2xl mx-auto">Hiring reliable painters, electricians, plumbers, and helpers is now secure, biometric-verified, and hassle-free.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/jobs/create" className="bg-white text-brand-700 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-slate-100 transition flex items-center justify-center">
              Post a Job Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/register/worker" className="bg-success-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-success-600 transition">
              Register as Worker (रोजगार रजिस्टर)
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">Popular Work Categories</h2>
          <p className="text-slate-500 mt-2">Find verified professionals ready for daily or hourly work near you.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link to={`/workers/nearby?category=${cat.name}`} key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-500 transition text-center group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition transform">{cat.icon}</div>
              <h3 className="font-semibold text-slate-800 text-lg">{cat.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{cat.count}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <div className="bg-brand-50 text-brand-600 p-3 rounded-xl w-fit"><ShieldCheck className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-slate-800">DigiLocker & Face Verification</h3>
            <p className="text-sm text-slate-600">Every worker undergoes masked ID checking and liveness face-match onboarding to ensure absolute safety.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <div className="bg-success-50 text-success-600 p-3 rounded-xl w-fit"><MapPin className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-slate-800">PostGIS Location Matching</h3>
            <p className="text-sm text-slate-600">Instantly discover jobs and workers within a 2 km to 25 km radius using advanced geospatial mapping.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-3">
            <div className="bg-amber-50 text-amber-600 p-3 rounded-xl w-fit"><Zap className="w-6 h-6" /></div>
            <h3 className="text-lg font-bold text-slate-800">Razorpay Secure Escrow</h3>
            <p className="text-sm text-slate-600">Payments are safely processed and settled instantly upon work completion confirmation by the customer.</p>
          </div>
        </div>
      </section>
    </div>
  );
}