// // components/AdminNavbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './AdminNavbar.css'
// const AdminNavbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/admin/dashboard">Admin Dashboard</Link>
//         </li>
//         <li>
//           <Link to="/admin/employee-list">Employee List</Link>
//         </li>
//         <li>
//           <Link to="/admin/patient-list">Patient List</Link>
//         </li>
//         <li>
//           <Link to="/admin/resources-available">Resources Available</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default AdminNavbar;

// components/AdminNavbar.js
import './AdminNavbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/employee-list">Employee List</Link>
        </li>
        <li>
          <Link to="/admin/patient-list">Patient List</Link>
        </li>
        <li>
          <Link to="/admin/resources-available">Resources Available</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
