import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center space-y-6">
      <div className="bg-success-50 text-success-600 p-4 rounded-full w-fit mx-auto"><CheckCircle className="w-12 h-12" /></div>
      <h1 className="text-3xl font-bold text-slate-800">Payment Successful!</h1>
      <p className="text-slate-500 text-sm">Your payment has been securely verified via Razorpay and funds are settled.</p>
      <Link to="/customer/dashboard" className="inline-block bg-brand-600 text-white px-8 py-3 rounded-xl font-bold shadow hover:bg-brand-700">Back to Dashboard</Link>
    </div>
  );
}