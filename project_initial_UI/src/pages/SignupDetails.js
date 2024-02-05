// pages/SignupDetails.js
import React, { useState } from 'react';

const SignupDetails = ({ setUsername, setPassword, setStep }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');

  const handleNext = () => {
    // Validate the input fields
    if (!email || !fullName) {
      alert('Please fill in all the details.');
      return;
    }

    // In a real application, you would send the signup details to a server here
    // For now, log the details and go back to the login/signup form
    console.log(`Signup Details: Email - ${email}, Full Name - ${fullName}`);

    // Pass the email and full name back to the parent component (LoginSignup)
    setUsername(email);
    setPassword(fullName);

    // Go back to the login/signup form (step 0)
    setStep(0);
  };

  return (
    <div className="signup-details-container">
      <h2>Signup Details</h2>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </label>
      <div className="button-container">
        <button onClick={handleNext}>Signup</button>
      </div>
    </div>
  );
};

export default SignupDetails;
