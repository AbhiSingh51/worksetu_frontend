import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Bell, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('worksetu_token');
  const userRole = localStorage.getItem('worksetu_role');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-brand-600 text-white p-2 rounded-lg font-bold text-lg flex items-center shadow">
            <Briefcase className="w-5 h-5 mr-1.5" />
            <span>WorkSetu</span>
            <span className="text-xs bg-success-500 ml-1.5 px-1.5 py-0.5 rounded text-white">रोजगार</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
          <Link to="/jobs/nearby" className="hover:text-brand-600 transition">Find Work</Link>
          <Link to="/workers/nearby" className="hover:text-brand-600 transition">Hire Workers</Link>
          {userRole === 'CUSTOMER' && <Link to="/customer/dashboard" className="hover:text-brand-600 transition">Customer Dashboard</Link>}
          {userRole === 'WORKER' && <Link to="/worker/dashboard" className="hover:text-brand-600 transition">Worker Dashboard</Link>}
          {userRole === 'ADMIN' && <Link to="/admin/dashboard" className="text-amber-600 font-semibold">Admin Panel</Link>}
        </div>
        <div className="flex items-center space-x-4">
          {token ? (
            <>
              <Link to="/notifications" className="text-slate-600 hover:text-brand-600 relative p-1">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </Link>
              <Link to="/settings" className="flex items-center space-x-1 text-slate-700 hover:text-brand-600 text-sm font-medium">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Link>
              <button onClick={handleLogout} className="flex items-center space-x-1 bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-100 transition">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              <Link to="/login" className="text-brand-600 font-medium text-sm hover:underline">Login</Link>
              <Link to="/register/customer" className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-700 shadow transition">Get Started</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}