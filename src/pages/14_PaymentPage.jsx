import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const handleRazorpayPayment = () => {
    alert('Razorpay Checkout Successful! Processing secure payment.');
    navigate('/payment/success');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 space-y-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Razorpay Secure Checkout</h2>
        <p className="text-sm text-slate-500">Job Settlement for Job #{jobId}</p>
        <div className="bg-slate-50 p-4 rounded-xl text-left space-y-2">
          <div className="flex justify-between text-sm"><span className="text-slate-500">Job Amount</span><span className="font-semibold">₹1,500</span></div>
          <div className="flex justify-between text-sm"><span className="text-slate-500">Platform Fee</span><span className="font-semibold">₹50</span></div>
          <div className="border-t pt-2 flex justify-between font-bold text-base"><span>Total Payable</span><span className="text-brand-600">₹1,550</span></div>
        </div>
        <button onClick={handleRazorpayPayment} className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-xl hover:bg-brand-700 shadow">Pay ₹1,550 via Razorpay</button>
      </div>
    </div>
  );
}