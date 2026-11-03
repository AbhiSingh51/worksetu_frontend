import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterCustomerPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('worksetu_token', 'mock_token');
    localStorage.setItem('worksetu_role', 'CUSTOMER');
    navigate('/customer/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 text-center">Register as Customer</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="9876543210" className="w-full px-4 py-2.5 border border-slate-300 rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-2.5 border border-slate-300 rounded-xl" />
          </div>
          <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 shadow">Register & Continue</button>
        </form>
        <div className="text-center text-sm text-slate-500">Already registered? <Link to="/login" className="text-brand-600 font-semibold">Login</Link></div>
      </div>
    </div>
  );
}