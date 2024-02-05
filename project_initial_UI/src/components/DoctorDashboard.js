// components/AdminDashboardLayout.js
import './AdminDashboard.css'
import React from 'react';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import AdminNavbar from './AdminNavbar'; // Import AdminNavbar component

const AdminDashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <AdminNavbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default AdminDashboardLayout;
