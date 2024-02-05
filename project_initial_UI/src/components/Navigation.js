// // components/Navigation.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About Us</Link></li>
//       <li><Link to="/contact">Contact Us</Link></li>
//       <li><Link to="/dashboard">Dashboard</Link></li>
//       <li><Link to="/login">Login/Signup</Link></li>
//     </ul>
//   </nav>
//   );
// };

// export default Navigation;
// components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'; // Import the CSS file for styling

const Navigation = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About Us</Link></li>
        <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
        <li className="nav-item"><Link to="/dashboard">Dashboard</Link></li>
        <li className="nav-item"><Link to="/login">Login/Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
