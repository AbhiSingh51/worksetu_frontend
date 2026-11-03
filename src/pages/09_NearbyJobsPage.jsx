import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function NearbyJobsPage() {
  const jobs = [
    { id: 'j1', title: 'Wall Painting for 2 Rooms', category: 'Painter', distance: '1.2 km', amount: '₹2,000' },
    { id: 'j2', title: 'Tap & Basin Leak Repair', category: 'Plumber', distance: '2.5 km', amount: '₹600' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Nearby Jobs (PostGIS Discovery)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex justify-between items-center"><span className="text-xs bg-brand-50 text-brand-600 px-2 py-0.5 rounded font-semibold">{job.category}</span><span className="text-xs text-slate-400 flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{job.distance}</span></div>
            <h3 className="font-bold text-slate-800 text-lg">{job.title}</h3>
            <p className="text-success-600 font-semibold">{job.amount}</p>
            <Link to={`/jobs/${job.id}`} className="block text-center bg-brand-600 text-white py-2 rounded-xl text-sm font-semibold hover:bg-brand-700">Apply Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
}