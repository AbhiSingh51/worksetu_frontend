import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateJobPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Painter');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/customer/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Post a New Daily Work Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Living Room Wall Painting" className="w-full px-4 py-2.5 border border-slate-300 rounded-xl" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-2.5 border border-slate-300 rounded-xl">
              <option value="Painter">Painter</option>
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
              <option value="Loading Helper">Loading Helper</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Offered Amount (₹)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="1200" className="w-full px-4 py-2.5 border border-slate-300 rounded-xl" required />
          </div>
          <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 shadow">Post Job to Nearby Workers</button>
        </form>
      </div>
    </div>
  );
}