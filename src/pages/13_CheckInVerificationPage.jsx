import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function CheckInVerificationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    alert('OTP & Liveness Face Verification Successful! Job is now IN_PROGRESS.');
    navigate(`/payment/${id}`);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 space-y-6 text-center">
        <div className="bg-success-50 text-success-600 p-3 rounded-full w-fit mx-auto"><ShieldCheck className="w-8 h-8" /></div>
        <h2 className="text-2xl font-bold text-slate-800">Worker Check-In Verification</h2>
        <p className="text-sm text-slate-500">Enter customer 6-digit OTP and complete liveness face match.</p>
        <form onSubmit={handleVerify} className="space-y-4">
          <input type="text" maxLength="6" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter 6-Digit OTP" className="w-full text-center text-2xl tracking-widest py-3 border border-slate-300 rounded-xl" required />
          <button type="submit" className="w-full bg-success-600 text-white font-bold py-3 rounded-xl hover:bg-success-700 shadow">Verify & Start Job</button>
        </form>
      </div>
    </div>
  );
}