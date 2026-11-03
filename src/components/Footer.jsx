import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">WorkSetu (रोजगार सेतु)</h3>
          <p className="text-sm leading-relaxed">India's verified daily-work hiring platform. Connecting trusted local workers with customers instantly and securely.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/jobs/nearby" className="hover:text-white transition">Browse Nearby Jobs</a></li>
            <li><a href="/workers/nearby" className="hover:text-white transition">Find Verified Painters & Plumbers</a></li>
            <li><a href="/register/worker" className="hover:text-white transition">Register as a Worker</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Safety & Trust</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><ShieldCheck className="w-4 h-4 text-success-500 mr-2" /> Aadhaar Masked Verification</li>
            <li className="flex items-center"><ShieldCheck className="w-4 h-4 text-success-500 mr-2" /> Biometric Check-In Security</li>
            <li className="flex items-center"><ShieldCheck className="w-4 h-4 text-success-500 mr-2" /> Razorpay Secure Payments</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">DPDP Act Compliance</h4>
          <p className="text-xs leading-relaxed">We adhere strictly to India's Digital Personal Data Protection Act principles: purpose limitation, data minimization, and secure user consent.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between">
        <p>&copy; {new Date().getFullYear()} WorkSetu Inc. All rights reserved.</p>
        <p className="flex items-center mt-2 sm:mt-0">Built with <Heart className="w-3.5 h-3.5 text-red-500 mx-1" /> for India's workforce</p>
      </div>
    </footer>
  );
}