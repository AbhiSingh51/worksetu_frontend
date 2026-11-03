import React from 'react';
import { useParams } from 'react-router-dom';

export default function JobApplicationsPage() {
  const { id } = useParams();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Applicants for Job ({id})</h1>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex justify-between items-center">
        <div><h3 className="font-bold text-slate-800">Santosh Sharma</h3><p className="text-sm text-slate-500">Electrician • 6 yrs exp</p></div>
        <button onClick={() => alert('Worker accepted!')} className="bg-success-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-success-700">Accept Worker</button>
      </div>
    </div>
  );
}