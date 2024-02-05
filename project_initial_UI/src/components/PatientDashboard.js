// components/AdminDashboardLayout.js
import './AdminDashboard.css'
import React from 'react';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import AdminNavbar from './AdminNavbar'; // Import AdminNavbar component

const PatientDashboard = ({ children }) => {
  return (
    <div>
      <Header />
      <AdminNavbar />
      <div className="content">{children}
      
     <h1>rshi from patient dashboard</h1>
      
      </div>
      <Footer />
    </div>
  );
};

export default PatientDashboard;
