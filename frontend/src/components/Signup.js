import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      // Replace with your backend signup endpoint
      const response = await fetch('http://3.87.67.208:3000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        setSuccess('Signup successful! Redirecting to login...');
        setError('');
        setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
      } else {
        const errorData = await response.json();
        setError(errorData.msg || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Signup</h2>
        <form onSubmit={handleSignup} style={styles.form}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="Enter your username"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter your email"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" style={styles.signupButton}>
            Signup
          </button>
          {success && <p style={styles.success}>{success}</p>}
          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom, #6a11cb, #2575fc)',
    fontFamily: '"Poppins", sans-serif',
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
    animation: 'fadeIn 0.8s ease-in-out',
  },
  title: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '0.9rem',
    color: '#333',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  signupButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  error: {
    marginTop: '15px',
    color: '#f44336',
    fontSize: '0.9rem',
  },
  success: {
    marginTop: '15px',
    color: '#4CAF50',
    fontSize: '0.9rem',
  },
};

export default Signup;
