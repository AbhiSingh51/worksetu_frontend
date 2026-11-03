import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!phoneNumber || !password) {
      setError('Please fill in all fields.');
      return;
    }
    localStorage.setItem('worksetu_token', 'mock_jwt_token_12345');
    localStorage.setItem('worksetu_role', 'CUSTOMER');
    navigate('/customer/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-slate-800">Welcome Back to WorkSetu</h2>
          <p className="text-sm text-slate-500">Login with your phone number and password</p>
        </div>
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">+91</span>
              <input type="text" maxLength="10" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="9876543210" className="w-full pl-12 pr-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:outline-none" />
          </div>
          <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 shadow transition flex items-center justify-center">
            Login <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </form>
        <div className="text-center text-sm text-slate-500 pt-4 border-t border-slate-100">
          Don't have an account? <Link to="/register/customer" className="text-brand-600 font-semibold hover:underline">Register as Customer</Link> or <Link to="/register/worker" className="text-success-600 font-semibold hover:underline">Worker</Link>
        </div>
      </div>
    </div>
  );
}