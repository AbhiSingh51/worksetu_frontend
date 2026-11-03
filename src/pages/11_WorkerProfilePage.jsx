import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Star } from 'lucide-react';

export default function WorkerProfilePage() {
  const { id } = useParams();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center space-x-3"><h1 className="text-2xl font-bold text-slate-800">Santosh Sharma</h1><span className="bg-success-50 text-success-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center"><ShieldCheck className="w-4 h-4 mr-1" /> Verified Worker</span></div>
        <p className="text-slate-600 text-sm">Electrician with 6+ years of experience in residential and commercial wiring and repair.</p>
        <div className="flex items-center text-amber-500"><Star className="w-4 h-4 fill-current mr-1" /> <span className="font-bold text-slate-800">4.8</span> (42 jobs completed)</div>
        <Link to="/payment/j1" className="inline-block bg-success-600 text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-success-700">Hire / Pay via Razorpay</Link>
      </div>
    </div>
  );
}