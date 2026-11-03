import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Briefcase, CheckCircle, Clock } from 'lucide-react';

export default function CustomerDashboardPage() {
  const activeJobs = [
    { id: 'j1', title: 'Full 3BHK Apartment Painting', category: 'Painter', status: 'IN_PROGRESS', amount: '₹4,500' },
    { id: 'j2', title: 'Kitchen Plumbing Leak Repair', category: 'Plumber', status: 'OPEN', amount: '₹800' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">Customer Dashboard</span>
          <h1 className="text-2xl font-bold text-slate-800 mt-1">Hello, Ramesh Kumar 👋</h1>
          <p className="text-sm text-slate-500">Manage your posted daily-work jobs and review worker check-ins.</p>
        </div>
        <Link to="/jobs/create" className="bg-brand-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-brand-700 shadow flex items-center">
          <PlusCircle className="w-4 h-4 mr-2" /> Post New Job
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-blue-50 text-blue-600 p-4 rounded-xl"><Briefcase className="w-6 h-6" /></div>
          <div><p className="text-sm text-slate-500">Total Jobs Posted</p><h3 className="text-2xl font-bold text-slate-800">12</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-amber-50 text-amber-600 p-4 rounded-xl"><Clock className="w-6 h-6" /></div>
          <div><p className="text-sm text-slate-500">Active / In Progress</p><h3 className="text-2xl font-bold text-slate-800">2</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="bg-success-50 text-success-600 p-4 rounded-xl"><CheckCircle className="w-6 h-6" /></div>
          <div><p className="text-sm text-slate-500">Completed Jobs</p><h3 className="text-2xl font-bold text-slate-800">10</h3></div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <h3 className="text-lg font-bold text-slate-800">Your Posted Jobs</h3>
        <div className="divide-y divide-slate-100">
          {activeJobs.map((job) => (
            <div key={job.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded">{job.category}</span>
                <h4 className="font-semibold text-slate-800 text-base mt-1">{job.title}</h4>
                <p className="text-sm text-emerald-600 font-medium">{job.amount}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${job.status === 'IN_PROGRESS' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>{job.status}</span>
                <Link to={`/jobs/${job.id}/check-in`} className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800">Manage / Check-In</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}