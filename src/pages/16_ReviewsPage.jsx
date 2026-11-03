import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ReviewsPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState('5');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Review submitted successfully!');
    navigate('/customer/dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 text-center">Rate & Review Job #{jobId}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Rating (1 to 5 Stars)</label>
            <select value={rating} onChange={(e) => setRating(e.target.value)} className="w-full px-4 py-2.5 border border-slate-300 rounded-xl">
              <option value="5">⭐⭐⭐⭐⭐ (5 - Excellent)</option>
              <option value="4">⭐⭐⭐⭐ (4 - Good)</option>
              <option value="3">⭐⭐⭐ (3 - Average)</option>
              <option value="2">⭐⭐ (2 - Poor)</option>
              <option value="1">⭐ (1 - Very Bad)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Comment</label>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write your experience..." className="w-full px-4 py-2.5 border border-slate-300 rounded-xl" rows="3" required></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 shadow">Submit Review</button>
        </form>
      </div>
    </div>
  );
}