import React, { useState } from 'react';

export default function ProfileSettingsPage() {
  const [name, setName] = useState('Ramesh Kumar');
  const [email, setEmail] = useState('rameshkumar@example.com');

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Profile Settings</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 border border-slate-300 rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 border border-slate-300 rounded-xl" />
          </div>
          <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 shadow">Save Changes</button>
        </form>
      </div>
    </div>
  );
}