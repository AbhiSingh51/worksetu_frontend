import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function JobDetailsPage() {
  const { id } = useParams();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
        <span className="text-xs font-semibold bg-brand-50 text-brand-600 px-2.5 py-1 rounded">Electrician</span>
        <h1 className="text-2xl font-bold text-slate-800">Main Distribution Box Repair (Job ID: {id})</h1>
        <p className="text-slate-600 text-sm">Need a certified electrician to fix sparking in the main MCB switchboard.</p>
        <div className="text-success-600 font-bold text-xl">₹1,500</div>
        <div className="pt-4 flex space-x-4">
          <Link to={`/jobs/${id}/applications`} className="bg-brand-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-brand-700 shadow">View Applicants</Link>
          <Link to={`/jobs/${id}/check-in`} className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-slate-800">Check-In Verification</Link>
        </div>
      </div>
    </div>
  );
}