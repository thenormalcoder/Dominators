import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/Login.module.css';

// Mock database
const users = [
  { role: 'student', email: 'student@example.com', password: 'student123', extraField: 'S12345' },
  { role: 'mentor', email: 'mentor@example.com', password: 'mentor123', extraField: 'Computer Science' },
  { role: 'coordinator', email: 'coordinator@example.com', password: 'coord123', extraField: 'CoordAccess123' },
];

const Login: React.FC = () => {
  const [role, setRole] = useState<string>('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    extraField: '',
  });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(''); // Clear error on input change
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
    setFormData({ email: '', password: '', extraField: '' });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Find user in mock database
    const user = users.find(
      (u) =>
        u.role === role &&
        u.email === formData.email &&
        u.password === formData.password &&
        u.extraField === formData.extraField
    );

    if (user) {
      // Navigate to the respective role dashboard
      if (role === 'student') {
        navigate('/student-dashboard');
      } else if (role === 'mentor') {
        navigate('/mentor-dashboard');
      } else if (role === 'coordinator') {
        navigate('/coordinator-dashboard');
      }
    } else {
      setError('Invalid credentials. Please check your details and try again.');
    }
  };

  const handleCreateAccount = () => {
    if (role === 'student') {
      navigate('/student-register');
    } else if (role === 'mentor') {
      navigate('/mentor-register');
    } else if (role === 'coordinator') {
      navigate('/coordinator-register');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Internship Management System - Login</h1>
      <h2 className={styles.subHeading}>
        Please select your role and provide your details to access the system.
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="role" className={styles.label}>Select Role:</label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={handleRoleChange}
          className={styles.select}
        >
          <option value="" disabled>Select your role</option>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
          <option value="coordinator">Coordinator</option>
        </select>

        {role && (
          <>
            <h3 className={styles.roleHeading}>
              {role === 'student' && 'Student Login'}
              {role === 'mentor' && 'Mentor Login'}
              {role === 'coordinator' && 'Coordinator Login'}
            </h3>

            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />

            <label htmlFor="password" className={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={styles.input}
            />

            {role === 'student' && (
              <>
                <label htmlFor="studentId" className={styles.label}>Student ID:</label>
                <input
                  type="text"
                  id="studentId"
                  name="extraField"
                  value={formData.extraField}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your Student ID"
                />
              </>
            )}

            {role === 'mentor' && (
              <>
                <label htmlFor="department" className={styles.label}>Department:</label>
                <input
                  type="text"
                  id="department"
                  name="extraField"
                  value={formData.extraField}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your Department"
                />
              </>
            )}

            {role === 'coordinator' && (
              <>
                <label htmlFor="accessCode" className={styles.label}>Access Code:</label>
                <input
                  type="text"
                  id="accessCode"
                  name="extraField"
                  value={formData.extraField}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter the Access Code"
                />
              </>
            )}

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.buttonsContainer}>
              <button type="submit" className={styles.button}>Login</button>
              <button
                type="button"
                onClick={handleCreateAccount}
                className={styles.secondaryButton}
              >
                Create Account
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
