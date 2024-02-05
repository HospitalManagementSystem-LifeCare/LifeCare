// // components/AdminDashboardLayout.js
// import './AdminDashboard.css'
// import React from 'react';
// import Header from './Header'; // Import Header component
// import Footer from './Footer'; // Import Footer component
// import AdminNavbar from './AdminNavbar'; // Import AdminNavbar component
// //import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Resource from './ResourcesAvailable'
// import Patient from './PatientList';
// import Dashboard from './Dashboard';

// const AdminDashboardLayout = ({ children }) => {
//   return (
//     <div>
//       <Header />
//       <AdminNavbar />
//       <Dashboard/>
//       <Footer />
//     </div>
    
//   );
// };

// export default AdminDashboardLayout;
// components/AdminDashboardLayout.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AdminNavbar from './AdminNavbar';
import Dashboard from './Dashboard';
import EmployeeList from './EmployeeList';
import PatientList from './PatientList';
import ResourcesAvailable from './ResourcesAvailable';
import LoginSignup from '../pages/LoginSignup';

const AdminDashboardLayout = ({ children }) => {
  return (
    <Router>
      <div>
        <Header />
        <AdminNavbar />
        <Switch>
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="/admin/employee-list" component={EmployeeList} />
          <Route path="/admin/patient-list" component={PatientList} />
          <Route path="/admin/resources-available" component={ResourcesAvailable} />
          <Route path="/login" exact component={LoginSignup} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AdminDashboardLayout;
