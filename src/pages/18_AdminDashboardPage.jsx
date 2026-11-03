import React from 'react';
import { ShieldCheck, Users, Briefcase } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">Admin Control Center</span>
        <h1 className="text-2xl font-bold text-slate-800 mt-1">Platform Management & KYC Approvals</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-blue-50 text-blue-600 p-4 rounded-xl"><Users className="w-6 h-6" /></div>
          <div><p className="text-sm text-slate-500">Total Users</p><h3 className="text-2xl font-bold text-slate-800">4,820</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-success-50 text-success-600 p-4 rounded-xl"><Briefcase className="w-6 h-6" /></div>
          <div><p className="text-sm text-slate-500">Completed Jobs</p><h3 className="text-2xl font-bold text-slate-800">1,240</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-amber-50 text-amber-600 p-4 rounded-xl"><ShieldCheck className="w-6 h-6" /></div>
          <div><p className="text-sm text-slate-500">Pending KYC</p><h3 className="text-2xl font-bold text-amber-600">14</h3></div>
        </div>
      </div>
    </div>
  );
}