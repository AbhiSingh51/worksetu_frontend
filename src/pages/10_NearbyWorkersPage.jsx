import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star } from 'lucide-react';

export default function NearbyWorkersPage() {
  const workers = [
    { id: 'w1', name: 'Santosh Sharma', skill: 'Electrician', rating: '4.8', rate: '₹800/day' },
    { id: 'w2', name: 'Rajesh Verma', skill: 'Painter', rating: '4.9', rate: '₹1,000/day' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Hire Verified Workers Nearby</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workers.map((w) => (
          <div key={w.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2"><h3 className="font-bold text-slate-800 text-lg">{w.name}</h3><ShieldCheck className="w-4 h-4 text-success-500" /></div>
              <p className="text-sm text-slate-500">{w.skill} • <span className="text-emerald-600 font-medium">{w.rate}</span></p>
              <div className="flex items-center text-xs text-amber-500 mt-1"><Star className="w-3.5 h-3.5 fill-current mr-1" />{w.rating} / 5.0</div>
            </div>
            <Link to={`/workers/${w.id}`} className="bg-brand-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-brand-700">View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
}