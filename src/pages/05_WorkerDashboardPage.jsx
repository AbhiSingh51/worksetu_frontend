import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, CheckCircle, Clock } from 'lucide-react';

export default function WorkerDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs font-semibold text-success-600 bg-success-50 px-2.5 py-1 rounded-full">Verified Worker Profile</span>
          <h1 className="text-2xl font-bold text-slate-800 mt-1">Santosh Sharma 🛠️</h1>
          <p className="text-sm text-slate-500">Primary Skill: Electrician • Service Area: Delhi NCR</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/jobs/nearby" className="bg-success-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-success-700 shadow flex items-center">
            <MapPin className="w-4 h-4 mr-2" /> Find Nearby Jobs
          </Link>
          <Link to="/kyc" className="bg-slate-100 text-slate-700 px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-200 flex items-center">
            <ShieldCheck className="w-4 h-4 mr-2 text-success-600" /> KYC Status
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-success-50 text-success-600 p-4 rounded-xl"><CheckCircle className="w-6 h-6" /></div>
          <div><p className="text-sm text-slate-500">Completed Jobs</p><h3 className="text-2xl font-bold text-slate-800">34</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-blue-50 text-blue-600 p-4 rounded-xl"><Clock className="w-6 h-6" /></div>
          <div><p className="text-sm text-slate-500">Active Applications</p><h3 className="text-2xl font-bold text-slate-800">3</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-amber-50 text-amber-600 p-4 rounded-xl"><ShieldCheck className="w-6 h-6" /></div>
          <div><p className="text-sm text-slate-500">Verification</p><h3 className="text-lg font-bold text-success-600">Verified Badge</h3></div>
        </div>
      </div>
    </div>
  );
}