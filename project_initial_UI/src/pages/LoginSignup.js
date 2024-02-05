// pages/LoginSignup.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AdminDashboardLayout from '../components/AdminDashboardLayout';
import DoctorDashboard from '../components/DoctorDashboard';
import PatientDashboard from '../components/PatientDashboard';
import ReceptionistDashboard from '../components/ReceptionistDashboard';
import Dashboard from '../components/Dashboard';
import EmployeeList from '../components/EmployeeList';
import PatientList from '../components/PatientList';
import ResourcesAvailable from '../components/ResourcesAvailable';
import './LoginSignup.css'; // Import the CSS file for styling
import ForgotPasswordForm from '../components/ForgotPasswordForm'; // Import the ForgotPasswordForm component

const LoginSignup = () => {
  const initialRoles = ['admin', 'doctor', 'patient', 'receptionist'];
  const [credentials, setCredentials] = useState({
    admin: { username: 'admin', password: 'admin123' },
    doctor: { username: 'doctor', password: 'doctor123' },
    patient: { username: 'patient', password: 'patient123' },
    receptionist: { username: 'receptionist', password: 'receptionist123' },
  });

  const [selectedRole, setSelectedRole] = useState(initialRoles[0]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // Check if the entered credentials match the initial values
    const roleCredentials = credentials[selectedRole];
    if (roleCredentials && username === roleCredentials.username && password === roleCredentials.password) {
      // If matched, set authentication state to true
      setAuthenticated(true);
    } else {
      // If not matched, show an alert
      alert('Incorrect username or password. Please try again.');
    }
  };

  const handleForgotPassword = () => {
    // Show the Forgot Password form
    setForgotPasswordVisible(true);
  };

  const handleForgotPasswordBack = () => {
    // Hide the Forgot Password form
    setForgotPasswordVisible(false);
  };

  const handleForgotPasswordSubmit = ({ userId, securityQuestion, securityAnswer, newPassword }) => {
    // Handle the submission of the Forgot Password form
    const roleCredentials = credentials[selectedRole];

    // Check if the provided security answer matches the stored answer
    if (roleCredentials && userId === roleCredentials.username && securityAnswer === roleCredentials.securityAnswers[securityQuestion]) {
      // Update the password in the state
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [selectedRole]: {
          ...prevCredentials[selectedRole],
          password: newPassword,
        },
      }));

      // Log a message to the console (you can handle database updates here)
      console.log(`Password for ${selectedRole} updated to: ${newPassword}`);

      // Hide the Forgot Password form
      setForgotPasswordVisible(false);
      alert('Password updated successfully!');
    } else {
      // Show an alert for incorrect security answer
      alert('Incorrect security answer. Please try again.');
    }
  };

  return (
    <Router>
      {authenticated ? (
        // Redirect based on the selected role
        <Redirect to={`/${selectedRole}/dashboard`} />
      ) : (
        <div className="login-container">
          <h2>Login</h2>
          <label>
            Role:
            <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
              {initialRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
          {forgotPasswordVisible ? (
            // Render the Forgot Password form if visible
            <ForgotPasswordForm
              userId={credentials[selectedRole].username}
              onBack={handleForgotPasswordBack}
              onSubmit={handleForgotPasswordSubmit}
            />
          ) : (
            // Render the login form if Forgot Password form is not visible
            <>
              <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <div className="button-container">
                <button onClick={handleLogin}>Login</button>
                <span className="forgot-password" onClick={handleForgotPassword}>
                  Forgot Password?
                </span>
              </div>
            </>
          )}
        </div>
      )}

      {/* Route for Dashboard based on the selected role */}
      <Switch>
        <Route path="/admin/dashboard" component={AdminDashboardLayout} />
        <Route path="/doctor/dashboard" component={DoctorDashboard} />
        <Route path="/patient/dashboard" component={PatientDashboard} />
        <Route path="/receptionist/dashboard" component={ReceptionistDashboard} />
      </Switch>
    </Router>
  );
};

export default LoginSignup;
