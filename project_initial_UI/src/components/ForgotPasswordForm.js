// components/ForgotPasswordForm.js
import React, { useState } from 'react';

const ForgotPasswordForm = ({ onBack, onSubmit }) => {
  const securityQuestions = [
    'Enter your nickname?',
    'What is your favorite color?',
    'What is your pet\'s name?',
    'What is your date of birth?',
  ];

  const [userId, setUserId] = useState('');
  const [selectedSecurityQuestion, setSelectedSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Validate inputs and perform the necessary actions
    if (!userId || !selectedSecurityQuestion || !securityAnswer || !newPassword || !confirmPassword) {
      alert('Please fill in all the details.');
      return;
    }

    // You can add logic here to handle the submission, such as updating the password in the database
    // For now, log the details to the console
    console.log(`User ID: ${userId}`);
    console.log(`Security Question: ${selectedSecurityQuestion}`);
    console.log(`Security Answer: ${securityAnswer}`);
    console.log(`New Password: ${newPassword}`);
    console.log(`Confirm Password: ${confirmPassword}`);

    // Trigger the onSubmit function passed from the parent component
    onSubmit();
  };

  return (
    <div className="forgot-password-form">
      <button onClick={onBack}>Back</button>
      <h2>Forgot Password</h2>
      <label>
        User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <label>
        Security Question:
        <select value={selectedSecurityQuestion} onChange={(e) => setSelectedSecurityQuestion(e.target.value)}>
          <option value="">Select a security question</option>
          {securityQuestions.map((question, index) => (
            <option key={index} value={question}>
              {`${index + 1}. ${question}`}
            </option>
          ))}
        </select>
      </label>
      <label>
        Security Answer:
        <input type="text" value={securityAnswer} onChange={(e) => setSecurityAnswer(e.target.value)} />
      </label>
      <label>
        New Password:
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </label>
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ForgotPasswordForm;
