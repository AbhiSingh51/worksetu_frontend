import React from 'react';
import { Bell } from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    { id: '1', title: 'Job Application Accepted', time: '10 mins ago', message: 'Your application for Painter job was accepted by Ramesh Kumar.' },
    { id: '2', title: 'KYC Verified', time: '2 hours ago', message: 'Your Aadhaar masked KYC & face verification was approved by admin.' }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold text-slate-800 flex items-center"><Bell className="w-6 h-6 mr-2 text-brand-600" /> Notifications</h1>
      <div className="space-y-4">
        {notifications.map((n) => (
          <div key={n.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
            <div className="flex justify-between"><h3 className="font-bold text-slate-800">{n.title}</h3><span className="text-xs text-slate-400">{n.time}</span></div>
            <p className="text-sm text-slate-600">{n.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}