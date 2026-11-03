import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function KycVerificationPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 space-y-6 text-center">
        <div className="bg-success-50 text-success-600 p-4 rounded-full w-fit mx-auto"><ShieldCheck className="w-10 h-10" /></div>
        <h2 className="text-2xl font-bold text-slate-800">DigiLocker KYC & Face Verification</h2>
        <p className="text-sm text-slate-500">Your Aadhaar masked document is verified and live liveness selfie match is active.</p>
        <div className="bg-success-50 text-success-700 p-3 rounded-xl font-semibold text-sm">Status: VERIFIED (Verified Worker Badge Active)</div>
      </div>
    </div>
  );
}