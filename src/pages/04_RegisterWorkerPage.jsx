import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterWorkerPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [skill, setSkill] = useState('Painter');

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('worksetu_token', 'mock_token');
    localStorage.setItem('worksetu_role', 'WORKER');
    navigate('/worker/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 text-center">Register as Worker (रोजगार)</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="9876543210" className="w-full px-4 py-2.5 border border-slate-300 rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Primary Skill</label>
            <select value={skill} onChange={(e) => setSkill(e.target.value)} className="w-full px-4 py-2.5 border border-slate-300 rounded-xl">
              <option value="Painter">Painter</option>
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
              <option value="Loading Helper">Loading Helper</option>
              <option value="Gardener">Gardener</option>
              <option value="Cleaner">Cleaner</option>
              <option value="Carpenter">Carpenter</option>
              <option value="General Labour">General Labour</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-success-600 text-white font-bold py-3 rounded-xl hover:bg-success-700 shadow">Register Worker Profile</button>
        </form>
        <div className="text-center text-sm text-slate-500">Already have account? <Link to="/login" className="text-brand-600 font-semibold">Login</Link></div>
      </div>
    </div>
  );
}