import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/01_HomeLandingPage';
import LoginPage from './pages/02_LoginPage';
import RegisterCustomerPage from './pages/03_RegisterCustomerPage';
import RegisterWorkerPage from './pages/04_RegisterWorkerPage';
import WorkerDashboardPage from './pages/05_WorkerDashboardPage';
import CustomerDashboardPage from './pages/06_CustomerDashboardPage';
import CreateJobPage from './pages/07_CreateJobPage';
import JobDetailsPage from './pages/08_JobDetailsPage';
import NearbyJobsPage from './pages/09_NearbyJobsPage';
import NearbyWorkersPage from './pages/10_NearbyWorkersPage';
import WorkerProfilePage from './pages/11_WorkerProfilePage';
import JobApplicationsPage from './pages/12_JobApplicationsPage';
import CheckInVerificationPage from './pages/13_CheckInVerificationPage';
import PaymentPage from './pages/14_PaymentPage';
import OrderSuccessPage from './pages/15_OrderSuccessPage';
import ReviewsPage from './pages/16_ReviewsPage';
import NotificationsPage from './pages/17_NotificationsPage';
import AdminDashboardPage from './pages/18_AdminDashboardPage';
import KycVerificationPage from './pages/19_KycVerificationPage';
import ProfileSettingsPage from './pages/20_ProfileSettingsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register/customer" element={<RegisterCustomerPage />} />
            <Route path="/register/worker" element={<RegisterWorkerPage />} />
            <Route path="/worker/dashboard" element={<WorkerDashboardPage />} />
            <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            <Route path="/jobs/create" element={<CreateJobPage />} />
            <Route path="/jobs/:id" element={<JobDetailsPage />} />
            <Route path="/jobs/nearby" element={<NearbyJobsPage />} />
            <Route path="/jobs/:id/applications" element={<JobApplicationsPage />} />
            <Route path="/jobs/:id/check-in" element={<CheckInVerificationPage />} />
            <Route path="/workers/nearby" element={<NearbyWorkersPage />} />
            <Route path="/workers/:id" element={<WorkerProfilePage />} />
            <Route path="/payment/:jobId" element={<PaymentPage />} />
            <Route path="/payment/success" element={<OrderSuccessPage />} />
            <Route path="/reviews/:jobId" element={<ReviewsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/kyc" element={<KycVerificationPage />} />
            <Route path="/settings" element={<ProfileSettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;