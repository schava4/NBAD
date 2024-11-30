import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../contexts/AuthContext'; // Correct the import path as necessary

function Login() {
  const navigate = useNavigate(); // Create navigate instance
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log('Login form submitted:', { username, password });
  
    // Hardcoded credentials
    const hardcodedUsername = 'Sriya';
    const hardcodedPassword = 'Chava';
  
    if (username === hardcodedUsername && password === hardcodedPassword) {
      console.log('Hardcoded login successful');
      login('hardcoded-token');
      return;
    }
  
    try {
      const response = await axios.post('http://3.87.67.208:3000/api/login', { username, password });
      console.log('Login API response:', response.data);
      login(response.data.token); // This sets the token in the context and localStorage
    } catch (error) {
      console.error('Login API error:', error.response?.data || error.message);
      setError(error.response?.data?.msg || 'Login failed: Server error');
    }
  };
  

  const handleSignup = () => {
    navigate('/signup'); // Redirect to the signup page
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Please login to your account</p>
        <form onSubmit={handleSubmit} style={styles.form}>
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
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" style={styles.loginButton}>
            Login
          </button>
          <button type="button" onClick={handleSignup} style={styles.signupButton}>
            Signup
          </button>
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
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
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
    transition: 'all 0.3s ease',
  },
  inputHover: {
    borderColor: '#007BFF',
    outline: 'none',
  },
  loginButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '10px',
  },
  loginButtonHover: {
    backgroundColor: '#45a049',
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
  signupButtonHover: {
    backgroundColor: '#0056b3',
  },
  error: {
    marginTop: '15px',
    color: '#f44336',
    fontSize: '0.9rem',
  },
};

export default Login;
